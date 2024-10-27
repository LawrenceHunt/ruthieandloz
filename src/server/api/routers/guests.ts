import { type TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  type Checkbox,
  getUserFormSchema,
  type NotionGuestDBRow,
  type ParsedGuest,
  parsedGuestSchema,
} from "~/types/guests.types";

export const client = new Client({
  auth: env.NOTION_TOKEN,
});

function getContentFromRichText(richText: Array<TextRichTextItemResponse>) {
  return richText.map((text) => text.plain_text).join("");
}

function getValueFromCheckbox(checkbox: Checkbox) {
  return Boolean(checkbox.checkbox);
}

function getNameFromRow(row: NotionGuestDBRow) {
  return getContentFromRichText(row.properties.Name.title);
}

function getHasPlusOneFromRow(row: NotionGuestDBRow) {
  return getValueFromCheckbox(row.properties["Has Plus One"]);
}

function getPlusOneNameFromRow(row: NotionGuestDBRow) {
  if (!getHasPlusOneFromRow(row)) {
    return null;
  }
  return getContentFromRichText(row.properties["Plus One Name"].rich_text);
}

function getHasRSVPdFromRow(row: NotionGuestDBRow) {
  return getValueFromCheckbox(row.properties["Has RSVPd"]);
}

function getRSVPFromRow(row: NotionGuestDBRow) {
  return getValueFromCheckbox(row.properties.RSVP);
}

function getPlusOneRSVPFromRow(row: NotionGuestDBRow) {
  if (!getHasPlusOneFromRow(row)) {
    return null;
  }
  return getValueFromCheckbox(row.properties["Plus One RSVP"]);
}

function getDietaryRequirementsFromRow(row: NotionGuestDBRow) {
  return getContentFromRichText(row.properties.Dietary.rich_text);
}

function getPlusOneDietaryRequirementsFromRow(row: NotionGuestDBRow) {
  if (!getHasPlusOneFromRow(row)) {
    return null;
  }
  return getContentFromRichText(row.properties["Plus One Dietary"].rich_text);
}

function getEmailFromRow(row: NotionGuestDBRow) {
  return row.properties.Email.email;
}

async function getGuestDBRows(): Promise<NotionGuestDBRow[]> {
  const response = await client.databases.query({
    database_id: env.NOTION_GUEST_DB_ID,
  });

  const rows = response.results as NotionGuestDBRow[];
  return rows;
}

export async function updateGuestDBRow(updatedGuest: ParsedGuest) {
  const response = await client.pages.update({
    page_id: updatedGuest.id,
    properties: {
      RSVP: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        checkbox: updatedGuest.rsvp,
      },
      Dietary: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        rich_text: [
          {
            text: {
              content: updatedGuest.dietaryRequirements,
            },
          },
        ],
      },
      "Has RSVPd": {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        checkbox: updatedGuest.hasRSVPd,
      },
      "Plus One RSVP": {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        checkbox: updatedGuest.plusOneRSVP,
      },
      "Plus One Name": {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        rich_text: [
          {
            text: {
              content: updatedGuest.plusOneName,
            },
          },
        ],
      },
      "Plus One Dietary": {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        rich_text: [
          {
            text: {
              content: updatedGuest.plusOneDietaryRequirements,
            },
          },
        ],
      },
      Email: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        email: updatedGuest.email,
      },
    },
  });

  return response;
}

function parseGuestDBRow(row: NotionGuestDBRow): ParsedGuest {
  const name = getNameFromRow(row);
  const rsvp = getRSVPFromRow(row);
  const hasRSVPd = getHasRSVPdFromRow(row);
  const dietaryRequirements = getDietaryRequirementsFromRow(row);
  const hasPlusOne = getHasPlusOneFromRow(row);
  const plusOneName = getPlusOneNameFromRow(row);
  const plusOneRSVP = getPlusOneRSVPFromRow(row);
  const plusOneDietaryRequirements = getPlusOneDietaryRequirementsFromRow(row);
  const email = getEmailFromRow(row);

  const guest = {
    id: row.id,
    name,
    hasRSVPd,
    rsvp,
    hasPlusOne,
    dietaryRequirements,
    plusOneName,
    plusOneRSVP,
    plusOneDietaryRequirements,
    email,
  };

  const parsedGuest = parsedGuestSchema.safeParse(guest);

  if (!parsedGuest.success) {
    throw new Error(parsedGuest.error.errors.join(", "));
  }

  return parsedGuest.data;
}

export const guestsRouter = createTRPCRouter({
  getGuest: publicProcedure
    .input(getUserFormSchema)
    .mutation(async ({ input }) => {
      const rows = await getGuestDBRows();

      const inputFullName = `${input.firstName.trim()} ${input.lastName.trim()}`;

      if (!rows) {
        throw new Error(
          "Sorry, we encountered an error while trying to find your RSVP details.",
        );
      }

      const matchingRow = rows.find((row) => {
        const rowPrimaryGuestName = getNameFromRow(row);
        const plusOneName = getPlusOneNameFromRow(row);

        return (
          rowPrimaryGuestName.toLowerCase() === inputFullName.toLowerCase() ||
          plusOneName?.toLowerCase() === inputFullName.toLowerCase()
        );
      });

      if (!matchingRow) {
        throw new Error(
          "Sorry, couldn't find that specific name. Try again with the name on your invite, or email us at ruthieandloz@gmail.com!",
        );
      }

      try {
        const parsedRow = matchingRow ? parseGuestDBRow(matchingRow) : null;

        return {
          guest: parsedRow,
        };
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(
            `Sorry, we encountered an error while trying to find your RSVP details: ${error.message}`,
          );
        }
      }
    }),

  updateRSVP: publicProcedure
    .input(parsedGuestSchema)
    .mutation(async ({ input }) => {
      const response = await updateGuestDBRow(input);

      return {
        response,
      };
    }),
});
