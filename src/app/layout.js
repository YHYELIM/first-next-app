export default  async function DashboardLayout({ children, params }) {
  const {team} =  await params
  return (
    <html lang="en">
      <body>
    <section>
    <header>
      <h1>Welcome to {team}'s Dashboard</h1>
    </header>
    <main>{children}</main>
  </section>
  </body>
  </html>
  )
}