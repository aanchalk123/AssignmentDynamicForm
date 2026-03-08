

import { NextResponse } from "next/server";
import { entries, id } from "@/src/lib/db";

export async function GET() {
  return NextResponse.json(entries);
}

export async function POST(req: Request) {
  const data = await req.json();

  const rows = Array.isArray(data) ? data : [data];

  const newEntries = rows.map((item: any) => ({
    id: Date.now() + Math.random(),
    name: item.name,
    email: item.email,
    phone: item.phone,
  }));

  entries.push(...newEntries);

  return NextResponse.json({
    message: "Saved",
    data: newEntries,
  });
}