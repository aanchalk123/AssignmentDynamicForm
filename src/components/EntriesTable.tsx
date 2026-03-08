import { Entry } from "@/src/types/entry";

interface Props {
  entries: Entry[];
  onEdit: (entry: Entry) => void;
  onDelete: (id: number) => void;
}

export default function EntriesTable({ entries, onEdit, onDelete }: Props) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="flex justify-between items-center border border-gray-200 p-4 rounded-lg shadow-sm"
        >
          <span className="text-gray-700">
            {entry.name} | {entry.email} | {entry.phone}
          </span>

          <div className="flex gap-3">
            <button
              onClick={() => onEdit(entry)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(entry.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}