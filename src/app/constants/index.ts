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



import groomingTrends from "../../../public/groomingTrends.webp";
import hairMaintenance from "../../../public/hairMaintenance.jpg";
import groomingBeard from "../../../public/grooming_beard.jpg";
import shavingMistakes from "../../../public/shavingMistakes.png";
import haircut from "../../../public/haircut.jpg";
import skincare from "../../../public/skincare.webp";
import blackHairstyles from "../../../public/blackHairstyles.jpeg";
import chooseBarber from "../../../public/chooseBarber.jpeg";
import facialTreatment from "../../../public/facialTreatment.jpeg";
import appoint from "../../../public/appoint.jpg";
import hairProducts from "../../../public/hairProduts.jpg";
import DIYBeard from "../../../public/DIYBeard.jpg";

import marlon from "../../../public/marlon.jpg";
import john from "../../../public/john.jpg";
import derek from "../../../public/derrek.jpg";
import jerry from "../../../public/jerry.jpg";
import james from "../../../public/james.jpg";
import kevin from "../../../public/kevin.jpg";

import { StaticImageData } from "next/image";

export const abril = Abril_Fatface({ subsets: ["latin"], weight: "400" });
export const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export const inter = Inter({ subsets: ["latin"] });

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  alt: string;
  link: string;
}

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



export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Secret to a Perfect Haircut",
    description:
      "Discover how expert barbers craft precision haircuts that complement your style and personality. Tips and trends for 2024.",
    imageUrl: haircut,
    alt: "Barber cutting hair",
    link: "/blog/perfect-haircut-tips",
  },
  {
    id: 2,
    title: "Beard Grooming Essentials",
    description:
      "From trimming techniques to the best beard oils, learn how to maintain a sharp, healthy-looking beard at all times.",
    imageUrl: groomingBeard,
    alt: "Beard grooming essentials",
    link: "/blog/beard-grooming-essentials",
  },
  {
    id: 3,
    title: "Top Shaving Mistakes and How to Avoid Them",
    description:
      "Say goodbye to irritation and cuts. Explore the most common shaving mistakes and learn the best practices for a clean, smooth shave.",
    imageUrl: shavingMistakes,
    alt: "Man shaving with razor",
    link: "/blog/shaving-mistakes-to-avoid",
  },
  {
    id: 4,
    title: "Skincare Routines for a Healthy Glow",
    description:
      "Upgrade your skincare game with expert advice on facials, exfoliation, and hydration for men to achieve flawless skin.",
    imageUrl: skincare,
    alt: "Skincare facial routine",
    link: "/blog/skincare-routine-for-men",
  },
  {
    id: 5,
    title: "Top Black Male Hairstyles for Every Occasion",
    description:
      "From fades and twists to afro styles and locs, discover versatile and stylish Black male hairstyles perfect for any event or season.",
    imageUrl: blackHairstyles,
    alt: "Black male hairstyle ideas",
    link: "/blog/black-male-hairstyles",
  },
  {
    id: 6,
    title: "Choosing the Right Barber: What to Look For",
    description:
      "Finding the perfect barber can make all the difference. Learn the top qualities to look for in your next barber.",
    imageUrl: chooseBarber,
    alt: "Barber shop interior",
    link: "/blog/choosing-the-right-barber",
  },
  {
    id: 7,
    title: "How to Maintain Your Hair Between Salon Visits",
    description:
      "Keep your hair looking sharp with simple maintenance tips. Learn to extend the life of your haircut with at-home care.",
    imageUrl: hairMaintenance,
    alt: "Man combing hair",
    link: "/blog/hair-maintenance-tips",
  },
  {
    id: 8,
    title: "The Benefits of Professional Facial Treatments",
    description:
      "Unwind and rejuvenate with a professional facial. Discover how regular treatments can improve skin health and appearance.",
    imageUrl: facialTreatment,
    alt: "Facial treatment for men",
    link: "/blog/professional-facial-benefits",
  },
  {
    id: 9,
    title: "Men's Grooming Trends for the Modern Gentleman",
    description:
      "Stay ahead of the curve with the latest grooming trends in 2024. From haircuts to skincare, find what works for you.",
    imageUrl: groomingTrends,
    alt: "Modern grooming trends",
    link: "/blog/mens-grooming-trends",
  },
  {
    id: 10,
    title: "Top Hair Products Every Man Should Own",
    description:
      "Find out which hair products make the cut—whether it’s pomade, wax, or styling cream—for different hair types and styles.",
    imageUrl: hairProducts,
    alt: "Hair products for men",
    link: "/blog/top-hair-products-for-men",
  },
  {
    id: 11,
    title: "How to Prepare for Your Next Barber Appointment",
    description:
      "Get the most out of your next barber visit with these preparation tips. Learn how to communicate your desired style effectively.",
    imageUrl: appoint,
    alt: "Barber appointment preparation",
    link: "/blog/prepare-for-barber-visit",
  },
  {
    id: 12,
    title: "Simple DIY Grooming Tips for Busy Men",
    description:
      "Short on time? Here are quick, effective grooming hacks to keep you looking sharp without breaking the bank or the clock.",
    imageUrl: DIYBeard,
    alt: "DIY grooming tips",
    link: "/blog/diy-grooming-tips",
  },
];

export interface Barber {
  id: number;
  name: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  imageUrl: StaticImageData;
  alt: string;
  bookingLink: string;
}

export const barbers: Barber[] = [
  {
    id: 1,
    name: "Marlon McDonald",
    socialLinks: {
      facebook: "https://facebook.com/marlonmcdonald",
      twitter: "https://twitter.com/marlonmcdonald",
      instagram: "https://instagram.com/marlonmcdonald",
    },
    imageUrl: marlon,
    alt: "Marlon McDonald profile image",
    bookingLink: "/book/marlon-mcdonald",
  },
  {
    id: 2,
    name: "Jerry Banks",
    socialLinks: {
      facebook: "https://facebook.com/jerrybanks",
      twitter: "https://twitter.com/jerrybanks",
      instagram: "https://instagram.com/jerrybanks",
    },
    imageUrl: jerry,
    alt: "Jerry Banks profile image",
    bookingLink: "/book/jerry-banks",
  },
  {
    id: 3,
    name: "John Bailey",
    socialLinks: {
      facebook: "https://facebook.com/johnbailey",
      twitter: "https://twitter.com/johnbailey",
      instagram: "https://instagram.com/johnbailey",
    },
    imageUrl: john,
    alt: "John Bailey profile image",
    bookingLink: "/book/john-bailey",
  },
  {
    id: 4,
    name: "Derek Jordan",
    socialLinks: {
      facebook: "https://facebook.com/derekjordan",
      twitter: "https://twitter.com/derekjordan",
      instagram: "https://instagram.com/derekjordan",
    },
    imageUrl: derek,
    alt: "Derek Jordan profile image",
    bookingLink: "/book/derek-jordan",
  },
  {
    id: 5,
    name: "Kevin Brooks",
    socialLinks: {
      facebook: "https://facebook.com/kevinbrooks",
      twitter: "https://twitter.com/kevinbrooks",
      instagram: "https://instagram.com/kevinbrooks",
    },
    imageUrl: kevin,
    alt: "Kevin Brooks profile image",
    bookingLink: "/book/kevin-brooks",
  },
  {
    id: 6,
    name: "James Bailey",
    socialLinks: {
      facebook: "https://facebook.com/jamesbailey",
      twitter: "https://twitter.com/jamesbailey",
      instagram: "https://instagram.com/jamesbailey",
    },
    imageUrl: james,
    alt: "James Bailey profile image",
    bookingLink: "/book/james-bailey",
  },
];