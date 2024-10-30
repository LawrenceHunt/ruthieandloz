import { type TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { type Client } from "@notionhq/client";
import {
  parsedGuestSchema,
  type Checkbox,
  type NotionGuestDBRow,
  type ParsedGuest,
} from "~/types/guests.types";

export function getContentFromRichText(
  richText: Array<TextRichTextItemResponse>,
) {
  return richText.map((text) => text.plain_text).join("");
}

export function getValueFromCheckbox(checkbox: Checkbox) {
  return Boolean(checkbox.checkbox);
}

export function getNameFromRow(row: NotionGuestDBRow) {
  return getContentFromRichText(row.properties.Name.title);
}

export function getAddressFromRow(row: NotionGuestDBRow) {
  return getContentFromRichText(row.properties.Address.rich_text);
}

export function getHasPlusOneFromRow(row: NotionGuestDBRow) {
  return getValueFromCheckbox(row.properties["Has Plus One"]);
}

export function getPlusOneNameFromRow(row: NotionGuestDBRow) {
  if (!getHasPlusOneFromRow(row)) {
    return null;
  }
  return getContentFromRichText(row.properties["Plus One Name"].rich_text);
}

export function getHasRSVPdFromRow(row: NotionGuestDBRow) {
  return getValueFromCheckbox(row.properties["Has RSVPd"]);
}

export function getRSVPFromRow(row: NotionGuestDBRow) {
  return getValueFromCheckbox(row.properties.RSVP);
}

export function getPlusOneRSVPFromRow(row: NotionGuestDBRow) {
  if (!getHasPlusOneFromRow(row)) {
    return null;
  }
  return getValueFromCheckbox(row.properties["Plus One RSVP"]);
}

export function getDietaryRequirementsFromRow(row: NotionGuestDBRow) {
  return getContentFromRichText(row.properties.Dietary.rich_text);
}

export function getPlusOneDietaryRequirementsFromRow(row: NotionGuestDBRow) {
  if (!getHasPlusOneFromRow(row)) {
    return null;
  }
  return getContentFromRichText(row.properties["Plus One Dietary"].rich_text);
}

export function getEmailFromRow(row: NotionGuestDBRow) {
  return row.properties.Email.email;
}

export async function getGuestDBRows(
  client: Client,
  databaseId: string,
): Promise<NotionGuestDBRow[]> {
  const response = await client.databases.query({
    database_id: databaseId,
  });

  const rows = response.results as NotionGuestDBRow[];
  return rows;
}

export function getAccommodationFromRow(row: NotionGuestDBRow) {
  return getContentFromRichText(row.properties.Accommodation.rich_text);
}

export async function updateGuestDBRow(
  client: Client,
  updatedGuest: ParsedGuest,
) {
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

export function parseGuestDBRow(row: NotionGuestDBRow): ParsedGuest {
  const name = getNameFromRow(row);
  const rsvp = getRSVPFromRow(row);
  const hasRSVPd = getHasRSVPdFromRow(row);
  const dietaryRequirements = getDietaryRequirementsFromRow(row);
  const hasPlusOne = getHasPlusOneFromRow(row);
  const plusOneName = getPlusOneNameFromRow(row);
  const plusOneRSVP = getPlusOneRSVPFromRow(row);
  const plusOneDietaryRequirements = getPlusOneDietaryRequirementsFromRow(row);
  const email = getEmailFromRow(row);
  const accommodation = getAccommodationFromRow(row);

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
    accommodation,
  };

  const parsedGuest = parsedGuestSchema.safeParse(guest);

  if (!parsedGuest.success) {
    throw new Error(parsedGuest.error.errors.join(", "));
  }

  return parsedGuest.data;
}
