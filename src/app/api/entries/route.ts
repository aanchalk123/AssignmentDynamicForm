import { NextResponse } from "next/server";

let entries: any[] = [];
let id = 1;

export async function GET() {
  return NextResponse.json(entries);
}

export async function POST(req: Request) {

const data = await req.json();

const newEntries = data.map((item: any) => ({
id: id++,
name: item.name,
email: item.email,
phone: item.phone,
createdAt: new Date()
}));

entries.push(...newEntries);

return NextResponse.json({
message: "Saved",
data: newEntries
});

}