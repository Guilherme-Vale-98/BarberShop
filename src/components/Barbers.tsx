import { abril, barbers, inter} from "../app/constants/index";

import BarbersCard from "./BarbersCard";


const renderCards = ()=>{
    return(
        <div className=" grid gap-8 md:grid-cols-2 xl:grid-cols-3  justify-center ">
                {barbers.map((barber, index) => (
                    <BarbersCard key={index} barber={barber} />
                ))}
        </div>
    )
}

const Barbers = () => {
    return (
        <section className="w-full pb-10 overflow-hidden text-black relative">
            <div className="text-center pt-10 w-full">
                <h4 className={`${inter.className} text-[19px] text-themeYellow`}>
                    MEET THE FAMILY
                </h4>
                <h2 className={`${abril.className} text-[50px] `}>
                    OUR BARBERS
                </h2>
            </div>
            {renderCards()}          
        </section>
    );
};

export default Barbers;