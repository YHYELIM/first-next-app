export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>🌍 My Next.js App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
