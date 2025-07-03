import { baseUrl } from "@/config/site";
import { type Blog } from "@/types/blog";
import {
  HomeIcon,
  BookOpenIcon,
} from "lucide-react"

export const getRelativeBaseUrl = (path: string) => `${baseUrl}/prototipo${path}`;

export const blog: Blog = {
    title: "Prototipo",
    description: "Cuaderno",
    rss: getRelativeBaseUrl('/rss.xml'),
    image: getRelativeBaseUrl("perspectiva.png"),
    menu: [
      {
        name: "Home",
        url: getRelativeBaseUrl(""),
        icon: HomeIcon,
      },
      {
          name: "Inventario",
          url: getRelativeBaseUrl("/inventario"),
          icon: HomeIcon,
      },
      {
        name: "Microcontroladores",
        url: getRelativeBaseUrl("/microcontroladores"),
        icon: HomeIcon
      },
      {
        name: "Recursos",
        url: getRelativeBaseUrl("/recursos"),
        icon: BookOpenIcon
      }
    ]
};
