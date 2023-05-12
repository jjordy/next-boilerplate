import "css/tailwind.css";
import Link from "next/link";

export default function RootLayout({
  children,
  sidebar,
  navigation,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  navigation: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </head>
      <body className="bg-gradient-to-r from-slate-800 to-slate-700">
        {navigation}
        <div className="flex w-full space-x-4 px-24">
          <div className="w-1/6">{sidebar}</div>
          <div className="w-5/6">{children}</div>
        </div>
      </body>
    </html>
  );
}
