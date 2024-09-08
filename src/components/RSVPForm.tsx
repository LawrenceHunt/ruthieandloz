"use client";

import { type TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import {} from "react-hook-form";
import { api } from "~/trpc/react";
import { type Checkbox, type NotionGuestDBRow } from "~/types/guests.types";

function getContentFromRichText(richText: Array<TextRichTextItemResponse>) {
  return richText.map((text) => text.plain_text).join("");
}

function getValueFromCheckbox(checkbox: Checkbox) {
  return checkbox.checkbox;
}

export function RSVPForm() {
  const [latestGuests] = api.guests.getGuests.useSuspenseQuery();

  const guestDBRows = latestGuests.guests;

  const utils = api.useUtils();

  const { mutate, isPending } = api.guests.updateRSVP.useMutation({
    onSuccess: async () => {
      await utils.guests.getGuests.invalidate();
    },
  });

  return (
    <div>
      <h1 className="mb-4">RSVP FORM</h1>

      {isPending ? <p>Loading...</p> : null}

      <ul>
        {guestDBRows?.map((row, index) => {
          return (
            <li key={index} className="flex gap-4">
              <h2>{getContentFromRichText(row.properties.Name.title)}</h2>
              <input
                type="checkbox"
                checked={getValueFromCheckbox(row.properties.RSVP)}
                onChange={(e) => {
                  const newValue = e.target.checked;
                  console.log("newValue", newValue);
                  mutate({ id: row.id, rsvp: newValue });
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
