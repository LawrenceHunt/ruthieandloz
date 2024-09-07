import {
  type PageObjectResponse,
  type QueryDatabaseResponse,
  type RichTextPropertyItemObjectResponse,
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
