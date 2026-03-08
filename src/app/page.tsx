"use client";

import { useState, useEffect } from "react";
import DynamicForm from '@/src/components/DynamicForm';
import EntriesTable from "@/src/components/EntriesTable";
import { Entry } from "@/src/types/entry";
import { getEntries, saveEntries } from "@/src/services/entryService";

export default function Home() {

  const [rows, setRows] = useState<
  { name: string; email: string; phone: string }[]
>([{ name: "", email: "", phone: "" }]);

//state for saved entries
const [entries, setEntries] = useState<
  { name: string; email: string; phone: string }[]
>([]);
const addRow = () => {
setRows([...rows, { name: "", email: "", phone: "" }]);
};

const handleChange = (
  index: number,
  field: "name" | "email" | "phone",
  value: string
) => {
  const updatedRows = [...rows];
  updatedRows[index][field] = value;
  setRows(updatedRows);
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

<div>

<h1>Dynamic Form</h1>

<DynamicForm
rows={rows}
onChange={handleChange}
/>

<button onClick={addRow}>Add Row</button>
<button onClick={handleSubmit}>Save</button>

<EntriesTable
entries={entries}
onEdit={()=>{}}
onDelete={()=>{}}
/>

</div>

);

}