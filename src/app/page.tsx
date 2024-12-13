import Brands from "@/components/Brands";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Image from "next/image";

export default function App() {
    return (
        <>
            <Hero/>
            <Services/>
            <Counter/>
            <Review/>
            <Brands/>
            
        </>
    );
}