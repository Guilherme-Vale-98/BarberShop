import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function App() {
    return (
        <>
            <Hero/>
            <Services/>
            <Counter/>
        </>
    );
}