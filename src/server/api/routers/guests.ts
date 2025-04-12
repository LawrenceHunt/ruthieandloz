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
import { z } from "zod";

const DATABASE_ID = env.NOTION_GUEST_DB_ID;

const NOTION_CLIENT = new Client({
  auth: env.NOTION_TOKEN,
});

// Seriously sketch to have this in the codebase
// but I don't care, it's only my wedding.
// I don't want to set up a whole auth system for this.
// I just want to be able to see the guest list.
// I will change this to a more secure solution later.
// I promise. Maybe.
// I will also change the password to something more secure.
const PASSWORD = "derulo";

export const guestsRouter = createTRPCRouter({
  getGuests: publicProcedure
    .input(z.object({ password: z.string() }))
    .query(async ({ input }) => {
      if (input.password !== PASSWORD) {
        return { auth: false, guests: [] };
      }

      const rows = await getGuestDBRows(NOTION_CLIENT, DATABASE_ID);
      const parsedRows = rows
        .map((row) => {
          const parsedRow = parseGuestDBRow(row);
          if (!parsedRow.name) {
            return null;
          }
          return parsedRow;
        })
        .filter((row) => row !== null);

      return { auth: true, guests: parsedRows };
    }),

  getGuest: publicProcedure
    .input(getUserFormSchema)
    .mutation(async ({ input }) => {
      const rows = await getGuestDBRows(NOTION_CLIENT, DATABASE_ID);

      const inputFullName = `${input.firstName.trim()} ${input.lastName.trim()}`;

      if (!rows) {
        throw new Error(
          "Sorry, we encountered an error while fetching the guest list.",
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
          console.info("ERROR!!!", error);

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
