import { type Blog } from "./blog";
import {
  HomeIcon,
  BookOpenIcon,
} from "lucide-react"

export const blog: Blog = {
    title: "Herbrand",
    description: "Cuaderno",
    image: "/bitacora/perspectiva/perspectiva.png",
    menu: [
      {
        name: "Home",
        url: "/bitacora2/herbrand",
        icon: HomeIcon,
      },
      {
          name: "Tags",
          url: "/bitacora2/herbrand/tags",
          icon: HomeIcon,
      }
    ]
};
