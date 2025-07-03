import { baseUrl } from "@/config/site";
import { type Blog } from "@/types/blog";
import {
  HomeIcon,
  BookOpenIcon,
} from "lucide-react"

export const getRelativeBaseUrl = (path: string) => `${baseUrl}/perspectiva${path}`;

export const blog: Blog = {
    title: "Perspectiva",
    description: "Cuaderno",
    rss: getRelativeBaseUrl('/rss.xml'),
    image: getRelativeBaseUrl("/perspectiva.png"),
    menu: [
      {
        name: "Home",
        url: getRelativeBaseUrl(''),
        icon: HomeIcon,
      },
      {
          name: "Tags",
          url: getRelativeBaseUrl('/tags'),
          icon: HomeIcon,
      },
      {
        name: "Categorias",
        url: getRelativeBaseUrl('/categorias'),
        icon: HomeIcon
      },
      {
        name: "Bibliografia",
        url: getRelativeBaseUrl('/bibliografia'),
        icon: BookOpenIcon
      }
    ]
};
