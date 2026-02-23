import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/Components/ui/sidebar"
import { AppSidebar } from "@/Components/ui/AppSidebar"

export default function AuthenticatedLayout({ header, children }) {
    return (
        <SidebarProvider>
            {/* Hada hwa l-Sidebar lli gha n-qado daba */}
            <AppSidebar />
            
            <SidebarInset>
                {/* Header Section */}
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white/50 backdrop-blur-md sticky top-0 z-10">
                    <SidebarTrigger className="-ml-1" />
                    <div className="h-4 w-[1px] bg-slate-200 mx-2" />
                    {header && (
                        <h1 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                            {header}
                        </h1>
                    )}
                </header>

                {/* Main Content */}
                <main className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-slate-50/50">
                    <div className="py-6">
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}