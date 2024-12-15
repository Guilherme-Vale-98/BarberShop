import React from 'react'
import Button from './Button'
import { abril, BlogPost, inter } from '@/app/constants'
import Image from 'next/image'

type Props = {
    blogPost: BlogPost
}

const NewsCard = ({ blogPost }: Props) => {
    return (
        <div
            key={blogPost.id}
            className='bg-black mx-auto h-[650px] w-[300px] md:w-[340px] lg:w-[300px]'
        >
            <div className="h-[360px] relative flex items-center flex-col justify-end overflow-hidden mb-6">
                <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    alt={blogPost.alt}
                    src={blogPost.imageUrl}
                    className='object-cover'
                />
            </div>
            <div className='p-4'>
                <h3 className={`${abril.className} text-[24px] text-white`}>
                    {blogPost.title}
                </h3>
                <p className={`${inter.className} text-[16px] text-gray-300 mt-2 
                    line-clamp-3 overflow-hidden text-ellipsis`}>
                    {blogPost.description}
                </p>
                <p className={`${inter.className} inline-block cursor-pointer text-[16px] text-themeYellow mt-2`}>
                    Read more
                </p>
            </div>
        </div>
    )
}

export default NewsCard