import { Inter } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import iconMustache from "../../../public/icon mustache.png";
import iconRazor from "../../../public/icon razor.png";
import iconBeard from "../../../public/icon beard.png";
import iconScissors from "../../../public/icon scissors.png";
import iconBeardRazor from "../../../public/icon beardrazor.png";
import iconBarbershop from "../../../public/icon barbershop.png";
import iconLocation from "../../../public/icon location.png";
import iconEnvelope from "../../../public/icon envelope.png";
import iconPhone from "../../../public/icon phone.png";
import iconClock from "../../../public/icon clock.png";
import client1 from "../../../public/client 1.png";
import client2 from "../../../public/client 2.png";
import client3 from "../../../public/client 3.png";

import { StaticImageData } from "next/image";

export const abril = Abril_Fatface({ subsets: ["latin"], weight: "400" });
export const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export const inter = Inter({ subsets: ["latin"] });

export interface ContactInfo {
  id: number;
  title: string;
  value: string | string[];
  icon: StaticImageData;
  alt: string;
}

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
export interface ReviewItem {
  id: number;
  name: string;
  review: string;
  photo: StaticImageData
}


export const reviewItems: ReviewItem[] = [
  {
    id: 1,
    name: "GLEN SPARKLE",
    review: "Best haircut I've ever had! The barbers here are true professionals. They took the time to understand exactly what I wanted and delivered a precise, stylish cut. The attention to detail is incredible.",
    photo: client1
  },
  {
    id: 2,
    name: "DAVID RODRIGUEZ",
    review: "I've tried barbershops all over the city, and this place stands out. The barbers know how to create sharp, clean lines that make a real difference. The classic styling combined with modern techniques is exactly what I look for.",
    photo: client2
  },
  {
    id: 3,
    name: "MICHAEL JOHNSON",
    review: "This barbershop is a game-changer. Clean, professional environment, skilled barbers who really know their craft. My fade is always perfect, and the service is consistently excellent. This is more than a haircut - it's an experience.",
    photo: client3
  }
 ]


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

export const contactInfos: ContactInfo[] = [
  {
    id: 1,
    title: "Address",
    value: "304 North Cardinal St., Dorchester Center, MA 02124",
    icon: iconLocation,
    alt: "Icon representing an address",
  },
  {
    id: 2,
    title: "Email",
    value: "info@company.com",
    icon: iconEnvelope,
    alt: "Envelope Icon representing an email",
  },
  {
    id: 3,
    title: "Phone",
    value: ["(+63) 555 1212", "(+63) 555 1212"],
    icon: iconPhone,
    alt: "Icon representing a phone",
  },
  {
    id: 4,
    title: "Working Hours",
    value: ["Mon - Fri: 10am - 6pm", "Sat - Sun: 10am - 6pm"],
    icon: iconClock,
    alt: "Icon representing working hours",
  },
];
