'use client'
import React from 'react';
import {useState} from 'react';
import Image from "next/image";

interface Props {
    name: string;
    image1: string;
    image2: string;
    oldprice: string;
    newprice: string;
    discount: string;
}
const Productcard = ({name,image1,image2,oldprice,newprice,discount}:Props) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div className="flex flex-col  gap-1 transition-all duration-300 ease-in-out cursor-pointer hover:text-pink-400 my-4">
            <div className="relative" onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
                {
                    isHovering ? <Image alt={name} src={image2} height={400} width={300} />:<Image alt={name} src={image1} height={400} width={300} />
                }
                <div className="absolute top-4 right-8 h-5 w-16 text-sm bg-white"> {discount} </div>
            </div>
            <h6 className="font-cardo">{name}</h6>
            <div className="text-md text-black font-cardo"><span className=" line-through">{oldprice}</span> <span className="text-pink-400">{newprice}</span> </div>
        </div>
    );
};

export default Productcard;