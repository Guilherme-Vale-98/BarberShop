"use client"
import Image, { StaticImageData } from "next/image";
import { abril, blogPosts, inter, services } from "../app/constants/index";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";
import NewsCard from "./NewsCard";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, SquareArrowLeft, SquareArrowRight } from "lucide-react";

type Props = {

};



const Blog = (props: Props) => {
    const pathname = usePathname()
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;
    const totalPages = Math.ceil(blogPosts.length / postsPerPage)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPaginationButtons = () => {
        return (
            <div className="flex gap-2 mt-10 justify-center items-center">
                <ChevronLeft
                    onClick={prevPage}
                    className={`cursor-pointer ${currentPage === 1
                        ? 'bg-gray-300 cursor-default border-gray-300'
                        : 'bg-themeYellow border-themeYellow '
                        } border-2 h-10 w-10 bg-themeYellow border-themeYellow />`} />


                {Array.from({ length: totalPages }, (_, i) => {
                    return <div key={i} className={`${inter.className}
                    ${currentPage === (i+1)
                        ? 'bg-themeYellow border-themeYellow cursor-default'
                        : ' border-themeYellow '
                        }
                    font-medium flex items-center justify-center border-2 h-10 w-10 `}>{i + 1}</div>
                })}

                

                <ChevronRight onClick={nextPage} className={`cursor-pointer border-2 h-10 w-10 ${currentPage === totalPages
                    ? 'cursor-default bg-gray-300 border-gray-300'
                    : 'bg-themeYellow border-themeYellow'}`} />
            </div>
        )
    }

    const renderCards = (pathname: string) => {
        console.log(Math.ceil((blogPosts.length / 8)))
        if (pathname === "/blog") {
            return (
                <>
                    <div className=" grid gap-8 sm:grid-cols-2 xl:grid-cols-4 justify-center  p-4">
                        {currentPosts.map((blogPost, index) => (
                            <NewsCard key={index} blogPost={blogPost} />
                        ))}
                    </div>
                    {renderPaginationButtons()}
                </>
            )
        }
        return (
            <div className=" grid gap-8 sm:grid-cols-2 xl:grid-cols-4 justify-center  p-4">
                {blogPosts.slice(0, 4).map((blogPost, index) => (
                    <NewsCard key={index} blogPost={blogPost} />
                ))}
            </div>
        )
    }


    return (
        <section className="w-full  bg-[#212121] pb-10 overflow-hidden text-white relative">
            <div className="text-center pt-10 w-full">
                <h4 className={`${inter.className} text-[19px] text-themeYellow`}>
                    OUR BLOG
                </h4>
                <h2 className={`${abril.className} text-[50px] text-white`}>
                    LATEST NEWS
                </h2>
            </div>
                {renderCards(pathname)}

        </section>
    );
};

export default Blog;