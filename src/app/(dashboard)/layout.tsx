import { PropsWithChildren } from "react"
import DashboardNav from "../../components/navigation/DashboardNav"
import AppBar from "@/components/navigation/AppBar"

const Layout: React.FC<PropsWithChildren> = ({children}) => {
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