import Navbar from "./components/Navbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          {children}</main>
      </body>
    </html>
  )
}