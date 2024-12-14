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
import iconFacial from "../../../public/icon facial.png";
import iconHair from "../../../public/icon hair.png";
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
      "Precision grooming that transforms your look. Expert stylists craft the perfect cut tailored to your face shape and personal style.",
    iconUrl: iconScissors,
    alt: "Icon of scissors for Haircut & Beard Trim",
  },
  {
    id: 2,
    title: "Shaves & Haircut",
    description:
      "The ultimate gentleman's grooming experience. Classic close shave meets precision haircut for a refined, polished appearance.",
    iconUrl: iconRazor,
    alt: "Icon of a razor for Shaves & Haircut",
  },
  {
    id: 3,
    title: "Facial & Shave",
    description:
      "Revitalize your skin with deep cleansing and exfoliation. Professional shave ensures a smooth, comfortable finish.",
    iconUrl: iconBeard,
    alt: "Icon of a beard for Facial & Shave",
  },
  {
    id: 4,
    title: "The Big Day",
    description:
      "Premium grooming package for your most important moments. Complete transformation to ensure you look and feel your absolute best.",
    iconUrl: iconMustache,
    alt: "Icon of a mustache for The Big Day service",
  },
  {
    id: 5,
    title: "Facial",
    description:
      "Personalized facial treatments tailored to your skin type. Deep cleansing and targeted care for a refreshed, glowing complexion.",
    iconUrl: iconFacial,
    alt: "Icon of facial treatment for skin care",
  },
  {
    id: 6,
    title: "Hair Styling",
    description:
      "Expert styling that brings your personality to life. Modern techniques and premium products create your perfect look.",
    iconUrl: iconHair,
    alt: "Icon of hair styling tools",
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


export interface PricingItem {
  id: number;
  title: string;
  description: string;
  price: number;
}

export const pricingItems: PricingItem[] = [
  {
    id: 1,
    title: "Haircut",
    description:
      "Experience a professional haircut tailored to your style, delivered by skilled barbers using precision techniques.",
    price: 20,
  },
  {
    id: 2,
    title: "Shaving",
    description:
      "Enjoy a clean and close shave with premium products, ensuring smooth and refreshed skin every time.",
    price: 15,
  },
  {
    id: 3,
    title: "Trimming",
    description:
      "Get a sharp and well-defined trim to maintain your beard or hair with expert care and attention to detail.",
    price: 15,
  },
  {
    id: 4,
    title: "Facial",
    description:
      "Rejuvenate your skin with a relaxing facial treatment designed to cleanse, hydrate, and refresh your complexion.",
    price: 20,
  },
];