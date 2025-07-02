import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import type { Menu } from "@/data/blog"

export function NavBlog({
  menu,
}: {
  menu: Menu[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {(menu || []).map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                {item && item.icon && typeof item.icon !== "function" && console.warn("icon inválido:", item.icon)}
                {item.icon && typeof item.icon !== "object" && <item.icon className="w-4 h-4"/> }
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
