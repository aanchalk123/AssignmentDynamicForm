import { Entry } from "@/src/types/entry";

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export const validateRow = (row: Entry) => {
  const errors: ValidationErrors = {};

  // NAME VALIDATION
  const nameRegex = /^[A-Za-z\s]+$/;

  if (!row.name) {
    errors.name = "Name is required";
  } else if (row.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (!nameRegex.test(row.name)) {
    errors.name = "Name cannot contain numbers or symbols";
  }

  // EMAIL VALIDATION
 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

  if (!row.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(row.email)) {
    errors.email = "Enter a valid email address";
  }

  // PHONE VALIDATION
  const phoneRegex = /^[0-9]{10}$/;

  if (!row.phone) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(row.phone)) {
    errors.phone = "Phone number must be exactly 10 digits";
  }

  return errors;
};