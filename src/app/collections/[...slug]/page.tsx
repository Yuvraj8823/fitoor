'use client'
import  {useState} from "react";
import React from 'react';
import Link from "next/link";
import Productcard from "@/app/components/Productcard";
interface Props {}
const Page =  ({params}:{
    params: {slug: string}
}) => {
    const [isHovering, setIsHovering] = useState(false);
        const evilEye = [
            {
                name: "Iconic Evil Eye Double Layered Necklace",
                image1:"/evil-eye-necklace1.jpg",
                image2:"/evil-eye-necklace1-2.jpg",
                oldprice: "Rs. 1649.00",
                newprice: "Rs. 1149.00",
                discount: "30% OFF",
            },
            {
                name: "Evil Eye Dazzling Bracelet",
                image1:"/evil-eye-necklace2.jpg",
                image2:"/evil-eye-necklace2-2.jpg",
                oldprice: "Rs. 1749.00",
                newprice: "Rs. 1249.00",
                discount: "28% OFF",
            },
            {
                name: "Evil Eye Charm Bracelet",
                image1:"/evil-eye-necklace3.jpg",
                image2:"/evil-eye-necklace3-2.jpg",
                oldprice: "Rs. 1549.00",
                newprice: "Rs. 1049.00",
                discount: "32% OFF",
            },
            {
                name: "Elegant Evil Eye Necklace",
                image1:"/evil-eye-necklace4.jpg",
                image2:"/evil-eye-necklace4-2.jpg",
                oldprice: "Rs. 799.00",
                newprice: "Rs. 649.00",
                discount: "18% OFF",
            },
            {
                name: "Evil Eye Double Layered Necklace",
                image1:"/evil-eye-necklace5.jpg",
                image2:"/evil-eye-necklace5-2.jpg",
                oldprice: "Rs. 2049.00",
                newprice: "Rs. 1549.00",
                discount: "24% OFF",
            },
            {
                name: "Set of 3 Evil Eye Earrings",
                image1:"/evil-eye-necklace6.jpg",
                image2:"/evil-eye-necklace6-2.jpg",
                oldprice: "Rs. 1399.00",
                newprice: "Rs. 899.00",
                discount: "35% OFF",
            },
            {
                name: "Fitoor Evil Eye Bracelet",
                image1:"/evil-eye-necklace7.jpg",
                image2:"/evil-eye-necklace7-2.jpg",
                oldprice: "Rs. 2249.00",
                newprice: "Rs. 1749.00",
                discount: "22% OFF",
            },
            {
                name: "Floral Evil Eye Triple Layered Necklace",
                image1:"/evil-eye-necklace8.jpg",
                image2:"/evil-eye-necklace8-2.jpg",
                oldprice: "Rs. 2049.00",
                newprice: "Rs. 1549.00",
                discount: "24% OFF",
            },
            {
                name: "Evil Eye Triple Charm Bracelet",
                image1:"/evil-eye-necklace9.jpg",
                image2:"/evil-eye-necklace9-2.jpg",
                oldprice: "Rs. 1849.00",
                newprice: "Rs. 1349.00",
                discount: "27% OFF",
            },
            {
                name: "Evil Eye Tassle Necklace",
                image1:"/evil-eye-necklace10.jpg",
                image2:"/evil-eye-necklace10-2.jpg",
                oldprice: "Rs. 1399.00",
                newprice: "Rs. 899.00",
                discount: "35% OFF",
            },
            ]
    return (
        <div>

            <div className="m-8 font-sans  text-[10px] flex justify-center">
                <Link href={'/'} className="hover:underline">HOME</Link>&nbsp;/ {String(params.slug).toUpperCase()}
            </div>
            <div className="flex justify-center m-12 text-2xl">HOME / {params.slug}</div>

            <div className="my-8 lg:grid-cols-4 md:grid-cols-3 grid grid-cols-1 gap-4 lg:mx-8 text-center mx-auto ">
                {
                    evilEye.map((item, index) =>
                        <Productcard name={item.name} image1={item.image1} image2={item.image2} oldprice={item.oldprice} newprice={item.newprice} discount={item.discount} key={index}/>
                    )

                }
            </div>

        </div>
    );
};

export default Page;