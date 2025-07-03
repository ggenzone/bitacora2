import { baseUrl } from "@/config/site";
import { type Blog } from "@/types/blog";
import {
  HomeIcon,
  TagIcon,
} from "lucide-react"

export const getRelativeBaseUrl = (path: string) => `${baseUrl}/herbrand${path}`;

export const blog: Blog = {
    title: "Herbrand",
    description: "Cuaderno",
    rss: getRelativeBaseUrl('/rss.xml'),
    image: getRelativeBaseUrl('herbrand.png'),
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
