import { NextResponse } from "next/server";
import { entries } from "@/src/lib/db";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json();

  const index = entries.findIndex((e) => e.id === Number(id));

  if (index === -1) {
    return NextResponse.json({ message: "Entry not found" }, { status: 404 });
  }

  entries[index] = {
    ...entries[index],
    name: body.name,
    email: body.email,
    phone: body.phone,
  };

  return NextResponse.json(entries[index]);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const index = entries.findIndex((e) => e.id === Number(id));

  if (index === -1) {
    return NextResponse.json({ message: "Entry not found" }, { status: 404 });
  }

  entries.splice(index, 1);

  return NextResponse.json({ message: "Deleted" });
}