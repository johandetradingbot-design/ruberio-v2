import { NextResponse } from "next/server";

type ContactPayload = {
  naam?: string;
  bedrijfsnaam?: string;
  email?: string;
  telefoon?: string;
  bericht?: string;
};

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID =
  process.env.NOTION_DATABASE_ID ?? "311cbcab-0078-803a-a2ae-000b5f25e83f";

export async function POST(request: Request) {
  try {
    if (!NOTION_API_KEY) {
      return NextResponse.json({ ok: false, error: "Missing Notion API key" }, { status: 500 });
    }

    const payload = (await request.json()) as ContactPayload;

    const naam = payload.naam?.trim();
    const bedrijfsnaam = payload.bedrijfsnaam?.trim();
    const email = payload.email?.trim();
    const telefoon = payload.telefoon?.trim();
    const bericht = payload.bericht?.trim();

    if (!naam || !bedrijfsnaam || !email || !bericht) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 500 });
    }

    const notionResponse = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: {
          database_id: NOTION_DATABASE_ID,
        },
        properties: {
          Naam: {
            title: [
              {
                text: {
                  content: naam,
                },
              },
            ],
          },
          Bedrijfsnaam: {
            rich_text: [
              {
                text: {
                  content: bedrijfsnaam,
                },
              },
            ],
          },
          Contact: {
            email,
          },
          Telefoon: {
            phone_number: telefoon || null,
          },
          Bericht: {
            rich_text: [
              {
                text: {
                  content: bericht,
                },
              },
            ],
          },
          Status: {
            select: {
              name: "Nieuw",
            },
          },
          Datum: {
            date: {
              start: new Date().toISOString().split("T")[0],
            },
          },
        },
      }),
    });

    if (!notionResponse.ok) {
      const error = await notionResponse.text();
      console.error("Notion error:", error);
      return NextResponse.json({ ok: false, error: "Failed to create Notion entry" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
