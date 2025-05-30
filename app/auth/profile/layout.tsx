import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/auth/profile/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  
  
    return (
    <SidebarProvider className="pt-19">
      <AppSidebar/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}