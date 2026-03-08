"use client";

import { useState } from "react";
import DynamicForm from "@/src/components/DynamicForm";
import EntriesTable from "@/src/components/EntriesTable";
import { Entry, EntryForm } from "@/src/types/entry";
import { validateRow } from "@/src/utils/validation";


interface Props {
  rows: EntryForm[];
  setRows: React.Dispatch<React.SetStateAction<EntryForm[]>>;
  entries: Entry[];
  onChange: (
    index: number,
    field: "name" | "email" | "phone",
    value: string
  ) => void;
  addRow: () => void;
  handleSubmit: () => void;
  refreshEntries: () => void;
}

export default function FormUI({
  rows,
  setRows,
  entries,
  onChange,
  addRow,
  handleSubmit,
  refreshEntries,
}: Props) {
  const [editId, setEditId] = useState<number | null>(null);
const [errors, setErrors] = useState<any[]>([]);
  // DELETE ENTRY
  const handleDelete = async (id: number) => {
    await fetch(`/api/entries/${id}`, {
      method: "DELETE",
    });

    refreshEntries();
  };

  // EDIT ENTRY
  const handleEdit = (entry: Entry) => {
    setEditId(entry.id);

    setRows([
      {
        name: entry.name || "",
        email: entry.email || "",
        phone: entry.phone || "",
      },
    ]);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 const handleSave = async () => {

  const validationErrors = rows.map((row) => validateRow(row));
  const hasError = validationErrors.some(
    (err) => Object.keys(err).length > 0
  );

  if (hasError) {
    setErrors(validationErrors);
    return;
  }

  setErrors([]);

  if (editId !== null) {
    await fetch(`/api/entries/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rows[0]),
    });

    setEditId(null);

    setRows([{ name: "", email: "", phone: "" }]);

    refreshEntries();
    return;
  }

  handleSubmit();

  setRows([{ name: "", email: "", phone: "" }]);
};

  return (
    <div className="max-w-5xl mx-auto mt-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Dynamic Form Builder
      </h1>

      {/* FORM */}
      <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-8 mb-10">

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          {editId ? "Edit Entry" : "Add New Entry"}
        </h2>

      <DynamicForm rows={rows} errors={errors} onChange={onChange} />

        <div className="flex gap-4 mt-6">

          {/* <button
            onClick={addRow}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
          >
            + Add Row
          </button> */}

          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg"
          >
            {editId ? "Update Entry" : "Save Entries"}
          </button>

        </div>
      </div>

      {/* SAVED ENTRIES */}
      <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-8">

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Saved Entries
        </h2>

        <EntriesTable
          entries={entries}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>
    </div>
  );
}