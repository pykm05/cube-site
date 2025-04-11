import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getServerSession } from "next-auth";
import Sidebar from "./components/Sidebar";

import SessionProvider from "./components/SessionProvider";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html>
      <body>
        <SessionProvider session={session}>
          <main className="flex h-screen border-2 border-green-500">
            <Sidebar />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
