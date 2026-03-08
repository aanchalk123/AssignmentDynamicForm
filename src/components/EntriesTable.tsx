import { Entry } from "@/src/types/entry";

interface Props {
  entries: Entry[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function EntriesTable({ entries, onEdit, onDelete }: Props) {
  return (
    <>
      {entries.map((entry, index) => (
        <div key={index}>
          {entry.name} | {entry.email} | {entry.phone}

          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}