import { type Blog } from "./blog";
import {
  HomeIcon,
  BookOpenIcon,
} from "lucide-react"

export const blog: Blog = {
    title: "Decadencia",
    description: "Cuaderno",
    image: "/bitacora2/perspectiva/perspectiva.png",
    menu: [
      {
        name: "Home",
        url: "/bitacora2/decadencia",
        icon: HomeIcon,
      },
      {
          name: "Tags",
          url: "/bitacora2/decadencia/tags",
          icon: HomeIcon,
      }
    ]
};
