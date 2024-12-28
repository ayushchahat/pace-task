import "./styles/globals.css";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Your Portfolio",
  description: "Personal Portfolio created using Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
