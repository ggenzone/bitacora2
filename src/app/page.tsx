
export default function Page(props) {
  return (
    <div className="min-h-screen bg-baground text-foreground ">
      <header className="sticky top-0 z-50 w-full border-b bg-sidebar text-sidebar-foreground  print:hidden">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            {/**
             * 

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">StreamLine</span>
            */}
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/bitacora2" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/bitacora2/resume" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="/bitacora2/repos" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Repos
            </a>
            <a href="/bitacora2/bitacora" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Cuadernos
            </a>
            {/*
            <a href="/bitacora2/resources" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Resources
            </a>
            */}


          </nav>

          <div className="flex items-center space-x-4">

          </div>
        </div>
      </header>


        {props.children}

    </div>
  )
}
