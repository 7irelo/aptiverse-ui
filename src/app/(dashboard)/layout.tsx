import AppBar from "@/components/navigation/AppBar"
import { getSession } from "@/lib/services/auth"
import { redirect } from "next/navigation"
import { PropsWithChildren } from "react"
import DashboardNav from "../../components/navigation/DashboardNav"

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - relative positioning */}
      <DashboardNav />
      
      {/* Main content area - flexes to fill remaining space */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 transition-all duration-300 ease-in-out">
        <AppBar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout