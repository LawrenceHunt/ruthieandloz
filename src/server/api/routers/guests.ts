import { z } from "zod";
import { getGuestDBRows, updateGuestDBRow } from "~/lib/notion.db";
import { client } from "~/lib/notion.db";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const guestsRouter = createTRPCRouter({
  getGuests: publicProcedure.query(async () => {
    const guests = await getGuestDBRows();

    return {
      guests,
    };
  }),

  updateRSVP: publicProcedure
    .input(z.object({ id: z.string().min(1), rsvp: z.boolean() }))
    .mutation(async ({ input }) => {
      const { id, rsvp } = input;

      const response = await updateGuestDBRow(id, rsvp);

      console.log("response", response);

      return {
        success: true,
      };
    }),
});
