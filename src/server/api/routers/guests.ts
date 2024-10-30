import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { getUserFormSchema, parsedGuestSchema } from "~/types/guests.types";
import {
  getNameFromRow,
  getPlusOneNameFromRow,
  getGuestDBRows,
  parseGuestDBRow,
  updateGuestDBRow,
} from "~/lib/notion";
import { env } from "~/env";
import { Client } from "@notionhq/client";

const DATABASE_ID = env.NOTION_GUEST_DB_ID;

const NOTION_CLIENT = new Client({
  auth: env.NOTION_TOKEN,
});

export const guestsRouter = createTRPCRouter({
  getGuest: publicProcedure
    .input(getUserFormSchema)
    .mutation(async ({ input }) => {
      const rows = await getGuestDBRows(NOTION_CLIENT, DATABASE_ID);

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
      const response = await updateGuestDBRow(NOTION_CLIENT, input);

      return {
        response,
      };
    }),
});
