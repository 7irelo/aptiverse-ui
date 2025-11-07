import { PropsWithChildren } from "react"
import DashboardNav from "../../components/navigation/DashboardNav"
import AppBar from "@/components/navigation/AppBar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Layout: React.FC<PropsWithChildren> = async ({children}) => {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  console.log('Authenticated session:', session)
  return (
    <div className="layout-container">
        <DashboardNav />
        <div className="content-area">
          <AppBar />
          <div className="main-content">
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout