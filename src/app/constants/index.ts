import { Inter } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import iconMustache from "../../../public/icon mustache.png";
import iconRazor from "../../../public/icon razor.png";
import iconBeard from "../../../public/icon beard.png";
import iconScissors from "../../../public/icon scissors.png";
import iconBeardRazor from "../../../public/icon beardrazor.png";
import iconBarbershop from "../../../public/icon barbershop.png";
import { StaticImageData } from "next/image";

export const abril = Abril_Fatface({ subsets: ["latin"], weight: "400" });
export const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export const inter = Inter({ subsets: ["latin"] });

export interface Service {
  id: number;
  title: string;
  description: string;
  iconUrl: StaticImageData;
  alt: string;
}
export interface CounterItem {
  id: number;
  title: string;
  count: number;
  logo: StaticImageData
}
export const counterItems: CounterItem[] = [
  {
    id: 1,
    title: "SHAVES",
    count: 2500,
    logo: iconBeardRazor
  },
  {
    id: 2,
    title: "HAIRCUTS",
    count: 4500,
    logo: iconScissors
  },
  {
    id: 3,
    title: "OPENSHOPS",
    count: 23,
    logo: iconBarbershop
  },
];
export const services: Service[] = [
  {
    id: 1,
    title: "Haircut & Beard Trim",
    description:
      "Duis porta, ligula rhoncus euismod od pretium, nisi tellus eleifend odio, luctus viverra sem.",
    iconUrl: iconScissors,
    alt: "Icon of scissors for Haircut & Beard Trim",
  },
  {
    id: 2,
    title: "Shaves & Haircut",
    description:
      "Duis porta, ligula rhoncus euismod od pretium, nisi tellus eleifend odio, luctus viverra sem.",
    iconUrl: iconRazor,
    alt: "Icon of a razor for Shaves & Haircut",
  },
  {
    id: 3,
    title: "Facial & Shave",
    description:
      "Duis porta, ligula rhoncus euismod od pretium, nisi tellus eleifend odio, luctus viverra sem.",
    iconUrl: iconBeard,
    alt: "Icon of a beard for Facial & Shave",
  },
  {
    id: 4,
    title: "The Big Day",
    description:
      "Duis porta, ligula rhoncus euismod od pretium, nisi tellus eleifend odio, luctus viverra sem.",
    iconUrl: iconMustache,
    alt: "Icon of a mustache for The Big Day service",
  },
];
