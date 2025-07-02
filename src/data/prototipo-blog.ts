import { type Blog } from "./blog";
import {
  HomeIcon,
  BookOpenIcon,
} from "lucide-react"

export const blog: Blog = {
    title: "Prototipo",
    description: "Cuaderno",
    image: "/bitacora/perspectiva/perspectiva.png",
    menu: [
      {
        name: "Home",
        url: "/bitacora2/prototipo",
        icon: HomeIcon,
      },
      {
          name: "Inventario",
          url: "/bitacora2/prototipo/inventario",
          icon: HomeIcon,
      },
      {
        name: "Microcontroladores",
        url: "/bitacora2/prototipo/microcontroladores",
        icon: HomeIcon
      },
      {
        name: "Recursos",
        url: "/bitacora2/prototipo/recursos",
        icon: BookOpenIcon
      }
    ]
};
