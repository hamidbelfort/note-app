import "./globals.css";
import Header from "@/components/header";
export const metadata = {
  title: "My Note App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body className="flex flex-col gap-8">
        <Header />
        {children}
      </body>
    </html>
  );
}
