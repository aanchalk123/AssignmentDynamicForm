"use client";

import { EntryForm } from "@/src/types/entry";

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}

interface DynamicFormProps {
  rows: EntryForm[];
  errors: ValidationErrors[];
  onChange: (index: number, field: keyof EntryForm, value: string) => void;
}

export default function DynamicForm({ rows, errors, onChange }: DynamicFormProps) {
  return (
    <div className="flex flex-col gap-4">
      {rows.map((row, index) => (
        <div key={index} className="grid grid-cols-3 gap-4">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Name"
              value={row.name}
              className={`border p-2 rounded w-full text-black ${errors[index]?.name ? "border-red-500" : "border-gray-300"}`}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  onChange(index, "name", value);
                }
              }}
            />
            {errors[index]?.name && <p className="text-red-500 text-sm mt-1">{errors[index]?.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={row.email}
              className={`border p-2 rounded w-full text-black ${errors[index]?.email ? "border-red-500" : "border-gray-300"}`}
              onChange={(e) => {
                const value = e.target.value.replace(/\s/g, "");
                onChange(index, "email", value);
              }}
            />
            {errors[index]?.email && <p className="text-red-500 text-sm mt-1">{errors[index]?.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              placeholder="Phone"
              value={row.phone}
              maxLength={10}
              className={`border p-2 rounded w-full text-black ${errors[index]?.phone ? "border-red-500" : "border-gray-300"}`}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  onChange(index, "phone", value.slice(0, 10));
                }
              }}
            />
            {errors[index]?.phone && <p className="text-red-500 text-sm mt-1">{errors[index]?.phone}</p>}
          </div>

        </div>
      ))}
    </div>
  );
}