import { EntryForm } from "@/src/types/entry";

export const saveEntries = async (rows: EntryForm[]) => {
  await fetch("/api/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rows),
  });
  console.log('res==',rows)
};

export const getEntries = async () => {
  const res = await fetch("/api/entries");
  return res.json();
};