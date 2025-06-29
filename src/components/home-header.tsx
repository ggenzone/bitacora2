import { SidebarIcon } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"

export function HomeHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-sidebar text-sidebar-foreground  sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />


        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </a>
          <Button asChild>
            <a href="#get-started">Get Started</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
