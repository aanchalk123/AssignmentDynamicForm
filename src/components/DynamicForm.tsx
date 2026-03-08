"use client";

import { EntryForm } from "@/src/types/entry";

interface Props {
  rows: EntryForm[];
  onChange: (index: number, field: keyof EntryForm, value: string) => void;
}

export default function DynamicForm({ rows, onChange }: Props) {
  return (
    <>
      {rows.map((row, index) => (
        <div key={index} className="flex gap-4 mb-4">

          <input
            className="border p-2 rounded w-full text-black"
            placeholder="Name"
            value={row.name}
            onChange={(e) => onChange(index, "name", e.target.value)}
          />

          <input
            className="border p-2 rounded w-full text-black"
            placeholder="Email"
            value={row.email}
            onChange={(e) => onChange(index, "email", e.target.value)}
          />

          <input
            className="border p-2 rounded w-full text-black"
            placeholder="Phone"
            value={row.phone}
            onChange={(e) => onChange(index, "phone", e.target.value)}
          />

        </div>
      ))}
    </>
  );
}