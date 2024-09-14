import { z } from "zod";
import {
  type PageObjectResponse,
  type QueryDatabaseResponse,
  type TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Title = {
  type: "title";
  title: Array<TextRichTextItemResponse>;
  id: string;
};

export type RichText = {
  type: "rich_text";
  rich_text: Array<TextRichTextItemResponse>;
  id: string;
};

export type Email = {
  type: "email";
  email: string | null;
  id: string;
};

export type Checkbox = {
  type: "checkbox";
  checkbox: boolean;
  id: string;
};

export type Number = {
  type: "number";
  number: number | null;
  id: string;
};

export type NotionGuestDBRow = PageObjectResponse & {
  parent: {
    type: "database_id";
    database_id: string;
  };
  properties: {
    Name: Title;
    Address: RichText;
    Kids: Number;
    Email: Email;
    "Has RSVPd": Checkbox;
    RSVP: Checkbox;
    Dietary: RichText;
    "Has Plus One": Checkbox;
    "Plus One Name": RichText;
    "Plus One RSVP": Checkbox;
    "Plus One Dietary": RichText;
  };
};

export type NotionGuestDBResponse = QueryDatabaseResponse & {
  results: NotionGuestDBRow[];
};

export const getUserFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

export type GetUserFormData = z.infer<typeof getUserFormSchema>;

export const parsedGuestSchema = z.object({
  id: z.string(),
  name: z.string(),
  hasRSVPd: z.boolean(),
  rsvp: z.boolean(),
  dietaryRequirements: z.string(),
  hasPlusOne: z.boolean(),
  plusOneName: z.string().nullable(),
  plusOneRSVP: z.boolean().nullable(),
  plusOneDietaryRequirements: z.string().nullable(),
});

export type ParsedGuest = z.infer<typeof parsedGuestSchema>;
