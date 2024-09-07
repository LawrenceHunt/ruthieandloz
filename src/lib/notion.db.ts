import { NotionRenderer } from "@notion-render/client";
import { type NotionGuestDBRow } from "~/types/guests.types";
import { Client } from "@notionhq/client";
import { env } from "~/env";

export const client = new Client({
  auth: env.NOTION_TOKEN,
});

export const renderer = new NotionRenderer({
  client,
});

export async function getGuestDBRows(): Promise<NotionGuestDBRow[]> {
  const response = await client.databases.query({
    database_id: env.NOTION_GUEST_DB_ID,
  });

  const rows = response.results as NotionGuestDBRow[];
  return rows;
}

export async function updateGuestDBRow(id: string, rsvp: boolean) {
  const response = await client.pages.update({
    page_id: id,
    properties: {
      RSVP: {
        checkbox: rsvp,
      },
    },
  });

  return response;
}
