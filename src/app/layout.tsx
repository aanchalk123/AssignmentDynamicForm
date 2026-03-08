import "./globals.css";

export const metadata = {
  title: "Dynamic Form Builder",
  description: "Next.js Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen p-10">
        {children}
      </body>
    </html>
  );
}