import { NextResponse } from "next/server";
import { Entry } from "@/src/types/entry";

let entries: Entry[] = [];
let idCounter = 1;

// GET /api/entries
export async function GET() {
  return NextResponse.json(entries);
}

// POST /api/entries
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const newEntries: Entry[] = data.map((item: any) => ({
      id: idCounter++,
      name: item.name,
      email: item.email,
      phone: item.phone,
      createdAt: new Date(),
    }));

    entries.push(...newEntries);

    return NextResponse.json({
      message: "Entries saved successfully",
      data: newEntries,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Error saving entries" },
      { status: 500 }
    );
  }
}