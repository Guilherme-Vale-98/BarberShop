import Image, { StaticImageData } from "next/image";
import { abril, blogPosts, inter, services } from "../app/constants/index";
import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";
import NewsCard from "./NewsCard";

type Props = {

};

const renderCards = ()=>{
    return(
        <div className=" grid gap-8 sm:grid-cols-2 xl:grid-cols-4 justify-center  p-4">
                {blogPosts.slice(0,4).map((blogPost, index) => (
                    <NewsCard key={index} blogPost={blogPost} />
                ))}
        </div>
    )
}

const Blog = (props: Props) => {
    return (
        <section className="w-full bg-[#212121] pb-10 overflow-hidden text-white relative">
            <div className="text-center pt-10 w-full">
                <h4 className={`${inter.className} text-[19px] text-themeYellow`}>
                    OUR BLOG
                </h4>
                <h2 className={`${abril.className} text-[50px] text-white`}>
                    LATEST NEWS
                </h2>
            </div>
            {renderCards()}          
        </section>
    );
};

export default Blog;