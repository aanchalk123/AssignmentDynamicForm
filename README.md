# Dynamic Form Application

This project is built using **Next.js with TypeScript**.
In this application, a user can fill a form and submit their details. The submitted data is stored in a **PostgreSQL database** using **Prisma ORM**, and all the entries are displayed in a table on the page.

The goal of this project is to practice form handling, database integration, and working with Prisma in a Next.js application.

---

## Technologies Used

* Next.js
* TypeScript
* Prisma ORM
* PostgreSQL

---

## Features

* User can fill and submit form data
* Data is stored in PostgreSQL database
* Submitted entries are displayed in a table
* Prisma ORM is used for database interaction

---

## Project Structure

src
├── components
│ ├── DynamicForm.tsx
│ └── EntriesTable.tsx

├── lib
│ └── prisma.ts

├── types
│ └── entry.ts

app
└── page.tsx

prisma
└── schema.prisma

---

## How to Run the Project

1. Install dependencies

npm install

This command installs all the required packages and libraries listed in the `package.json` file.

---

2. Generate Prisma Client

npx prisma generate

This command generates the Prisma client based on the schema defined in `schema.prisma`.
It allows the application to interact with the database using Prisma.

---

3. Run Database Migration

npx prisma migrate dev

This command creates the required database tables according to the Prisma schema and applies the migration to the database.

---

4. Start the Development Server

npm run dev

This command starts the Next.js development server and runs the project locally.

After running this command, open the browser and go to:

[http://localhost:3000](http://localhost:3000)

to see the application running.

---

## Database Schema

The database contains an **Entry** table with the following fields:

* id
* name
* email
* mobile
* createdAt

Example schema:

model Entry {
id        Int      @id @default(autoincrement())
name      String
email     String
mobile    String
createdAt DateTime @default(now())
}

---

## Future Improvements

* Add edit and delete functionality
* Improve form validation
* Add pagination for entries table
* Improve UI styling

---

## Author

Aanchal Kumari
Frontend Developer (React.js)