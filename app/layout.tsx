import Navbar from "./components/Navbar";
import {Metadata} from "next";

export const metadata: Metadata = {
  title:'Aekkarin',
  description: 'Aekkarin is a personal website that showcases my work and projects.',
  keywords: ['Aekkarin', 'portfolio', 'projects', 'work', 'personal website'],
}

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