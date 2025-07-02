import { type Blog } from "./blog";
import {
  HomeIcon,
  BookOpenIcon,
} from "lucide-react"

export const blog: Blog = {
    title: "Perspectiva",
    description: "Cuaderno",
    image: "/bitacora/perspectiva/perspectiva.png",
    menu: [
      {
        name: "Home",
        url: "/bitacora2/perspectiva",
        icon: HomeIcon,
      },
      {
          name: "Tags",
          url: "/bitacora/tags",
          icon: HomeIcon,
      },
      {
        name: "Categorias",
        url: "/bitacora/categorias",
        icon: HomeIcon
      },
      {
        name: "Bibliografia",
        url: "/bitacora/bibliografia",
        icon: BookOpenIcon
      }
    ]
};
