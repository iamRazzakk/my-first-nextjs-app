import Link from "next/link";
import "./globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-5xl p-10 font-bold">{children}</body>
      <Link href='/'>
      <button className="btn btn-info">Home</button>
      </Link>
      <Link href='/About'>
      <button className="btn btn-info">About</button>
      </Link>
    </html>
  );
}
