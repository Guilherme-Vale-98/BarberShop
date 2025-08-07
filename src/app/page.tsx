import Brands from "@/components/Brands";
import ContactUs from "@/components/ContactUs";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import beardTrim from "../../public/beardTrim.png";


export default function App() {
    return (
        <>
            <Hero/>
            <Services img={beardTrim} showTitle={true}/>
            <Counter/>
            <Review/>
            <Brands/>
            <ContactUs/>
        </>
    );
}