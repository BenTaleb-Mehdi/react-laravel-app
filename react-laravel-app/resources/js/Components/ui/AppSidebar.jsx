import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar"
import { LayoutDashboard, Users, FileText, Settings, LogOut } from "lucide-react"
import { Link, usePage } from '@inertiajs/react'

export function AppSidebar() {
    const user = usePage().props.auth.user;

    const items = [
        { title: "Dashboard", url: route('dashboard'), icon: LayoutDashboard },
        { title: "Clients", url: "/clients", icon: Users }, // N-qdero n-diro route('clients.index')
        { title: "Factures", url: "#", icon: FileText },
    ]

    return (
        <Sidebar variant="inset" collapsible="icon">
            <SidebarHeader className="py-4">
                <div className="flex items-center gap-3 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                        <span className="font-black text-xs">IV</span>
                    </div>
                    <span className="font-bold text-slate-800 tracking-tight group-data-[collapsible=icon]:hidden">
                        Invoicer Pro
                    </span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        <Link href={item.url} className="flex items-center gap-3">
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-slate-100">
                 <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">
                        {user.name.charAt(0)}
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="text-sm font-bold text-slate-700 truncate w-32">{user.name}</span>
                        <Link href={route('logout')} method="post" as="button" className="text-[10px] text-red-500 font-bold hover:underline text-left">
                            Déconnexion
                        </Link>
                    </div>
                 </div>
            </SidebarFooter>
        </Sidebar>
    )
}