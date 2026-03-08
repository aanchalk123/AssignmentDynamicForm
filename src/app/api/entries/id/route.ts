import { NextResponse } from "next/server";
import { Entry } from "@/src/types/entry";

let entries: Entry[] = [];

// PUT /api/entries/:id
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await req.json();

  const index = entries.findIndex((e) => e.id === id);

  if (index === -1) {
    return NextResponse.json(
      { message: "Entry not found" },
      { status: 404 }
    );
  }

  entries[index] = {
    ...entries[index],
    ...body,
  };

  return NextResponse.json({
    message: "Entry updated",
    data: entries[index],
  });
}

// DELETE /api/entries/:id
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  entries = entries.filter((entry) => entry.id !== id);

  return NextResponse.json({
    message: "Entry deleted",
  });
}