import { baseUrl } from "@/config/site";
import { type Blog } from "@/types/blog";
import {
  HomeIcon,
  TagIcon,
} from "lucide-react"

export const getRelativeBaseUrl = (path: string) => `${baseUrl}/decadencia${path}`;

export const blog: Blog = {
    title: "Decadencia",
    description: "Cuaderno",
    rss: getRelativeBaseUrl('/rss.xml'),
    image: getRelativeBaseUrl('/decadencia.png'),
    menu: [
      {
        name: "Home",
        url: getRelativeBaseUrl(''),
        icon: HomeIcon,
      },
      {
          name: "Tags",
          url: getRelativeBaseUrl('/tags'),
          icon: TagIcon,
      }
    ]
};
