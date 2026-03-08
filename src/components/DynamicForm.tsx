"use client";
import { Entry } from '@/src/types/entry';

interface Props {
  rows: Entry[];
  onChange: (index: number, field: keyof Entry, value: string) => void;
}

export default function DynamicForm({ rows, onChange }: Props) {
  return (
    <>
      {rows.map((row, index) => (
        <div key={index} className="flex gap-4 mb-4">
          <input
            placeholder="Name"
            value={row.name}
            onChange={(e) => onChange(index, "name", e.target.value)}
          />

          <input
            placeholder="Email"
            value={row.email}
            onChange={(e) => onChange(index, "email", e.target.value)}
          />

          <input
            placeholder="Phone"
            value={row.phone}
            onChange={(e) => onChange(index, "phone", e.target.value)}
          />
        </div>
      ))}
    </>
  );
}