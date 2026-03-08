import { Entry } from "@/src/types/entry";

export const validateRow = (row: Entry) => {
  if (!row.name.trim()) {
    alert("Name is required");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(row.email)) {
    alert("Enter a valid email");
    return false;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(row.phone)) {
    alert("Phone must be 10 digits");
    return false;
  }

  return true;
};