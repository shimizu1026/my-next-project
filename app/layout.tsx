import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),
	title: {
		template: "%s | シンプルなコーポレートサイト",
		default: "シンプルなコーポレートサイト",
	},
	description:"「Next.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」作成されるサイトです。",
	openGraph: {
		title: "シンプルなコーポレートサイト",
		description: "「Next.js＋ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」作成されるサイトです。",
		images: ["/ogp.png"],
	},
	alternates: {
		canonical: "http://localhost:3000",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
