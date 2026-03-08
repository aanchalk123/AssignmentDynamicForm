"use client";

import { useState, useEffect } from "react";
import FormUI from "@/src/components/FormUI";
import { Entry, EntryForm } from "@/src/types/entry";
import { getEntries, saveEntries } from "@/src/services/entryService";

export default function Home() {

const [rows, setRows] = useState<EntryForm[]>([
{ name: "", email: "", phone: "" },
]);

const [entries, setEntries] = useState<Entry[]>([]);

const addRow = () => {
setRows([...rows, { name: "", email: "", phone: "" }]);
};

const handleChange = (
index: number,
field: "name" | "email" | "phone",
value: string
) => {

const updated = [...rows];
updated[index][field] = value;
setRows(updated);

};

const handleSubmit = async () => {

await saveEntries(rows);
fetchEntries();
setRows([{ name: "", email: "", phone: "" }]);

};

const fetchEntries = async () => {

const data = await getEntries();
setEntries(data);

};

useEffect(() => {
fetchEntries();
}, []);

return (
  <FormUI
    rows={rows}
    setRows={setRows}
    entries={entries}
    onChange={handleChange}
    addRow={addRow}
    handleSubmit={handleSubmit}
    refreshEntries={fetchEntries}
  />
);
}