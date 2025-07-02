import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { type Blog } from "@/data/blog"
import { type ReactNode } from "react"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function BlogPage(props : { blog: Blog, children: ReactNode }) {
  console.log("BlogPage props", props.blog)
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar blog={props.blog} />
          <SidebarInset>
            {props.children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
