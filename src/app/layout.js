import Link from "next/link";
export default function RootLayout({ children, dashboard, sidebar }) {
  return (
    <html lang="ko">
        <body>
            <main>{children}</main>
            <div className="dashboard">{dashboard}</div>
            <aside>{sidebar}</aside>
        </body>
    </html>
  );
}