'use client'
import React, {useState} from "react";
import Link from "next/link";
import ShopMenu from "./ShopMenu";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import dynamic from "next/dynamic";
import InputLabel from '@mui/material/InputLabel';
import Image from "next/image";


type Props = {};

export default function Navbar({}: Props) {
    const [hamburger, setHamburger] = useState(true);
    const [shop, setShop] = useState(true);
    const [personalized, setPersonalized] = useState(true);
    const [gift, setGift] = useState(true);
    const [collection, setCollection] = useState(true);


    const shopItems=[
        {
            category: "Categories",
            type: [
                "All",
                "Rings",
                "Necklaces",
                "Bracelets",
                "Earrings",
            ],
        },
        {
            category: "Personalized Jewellery",
            type: [
                "All",
                "Name Necklaces",
                "Couple Name Necklaces",
                "3d Bar Name Necklaces",
                "Name Bracelets",
                "Message Necklaces",
            ]
        },
        {
            category: "Collections",
            type: [
                "Animal Collection",
                "Classic Collection",
                "Evil Eye Collection",
                "Pride Collection",
                "Timeless Collection",
                "Valentine's Collection",
                ]
        }

    ]
    const gifts = [
        {name: "Gifts for Her",src: "/giftforher.webp",url:"/"},
        {name: "Anniversary Gifts",src: "/anniversarygifts.webp",url:"/"},
        {name: "Birthday Gifts",src: "/birthdaygifts.webp",url:"/"},
        {name: "Couple gifts",src: "/couplegifts.webp",url:"/"}
    ]
     const collections = [
         {name: "Evil Eye Collection",src: "/evileye.webp",url:"/"},
         {name: "classic charm",src: "/classiccharm.webp",url:"/"},
         {name: "Timeless Treasures",src: "/timeless.webp",url:"/"},
         {name: "Valentine special",src: "/valentine.webp",url:"/"}
     ]
  return (
      <>
    <div className="sticky top-0 flex justify-between border-b-2 my-0 mx-[4rem] ">
        <MenuIcon className="flex self-center lg:hidden  " onClick={()=>setHamburger(!hamburger)}/>
        <ul className="lg:flex items-center text-sm font-cardo hidden">

            <button className="mx-3 group h-[100%] transition-transform duration-150 ease-in-out ">
            <Link href="#">
                <li className="asas">
                    Shop
                <ShopMenu />
                </li>
                
            </Link>
            </button>
            
            <button className=" mx-3 group h-[100%]">
            <Link href="#">
                <li className="">
                    Personlized Jewellery
                <ShopMenu />
                </li>
                
            </Link>
            </button>
            <li className="mx-3 my-3">Gifts</li>
            <li className="mx-3 my-3">Collection</li>
            <li className="mx-3 my-3">Featured</li>
        </ul>
        <div className="flex items-center justify-around logo font-pinyon text-2xl font-medium mx-3 my-5">

        <h1 className="text-purple-900">
            Fitoor.co
        </h1>
        </div>
        <ul className="flex items-center text-sm font-cardo mx-3 my-3">
            <li className="mx-3 my-3">Track Order</li>
            <li className="mx-3 my-3 hidden lg:flex">Contact Us</li>
            

            <SearchIcon className="mx-3 hidden lg:flex"/>
            <PersonOutlineOutlinedIcon className="mx-3 hidden lg:flex"/>
            <LocalMallOutlinedIcon className="mx-3"/>
        </ul>
    </div>
          <div className={hamburger?"hidden":""}>
          <div className="flex flex-col items-center ">
              <FormControl sx={{ m: 4, width: '80vw' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                  <OutlinedInput endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                             />
              </FormControl>
          </div>
          <ul className="flex flex-col ">
              <li className="py-4" key="1">
                  <ul className="flex justify-between px-8 my-4" onClick={()=>setShop(!shop)}>
                  <li >Shop</li><li className={shop?``:`rotate-90`}> {'>'} </li>
                  </ul>
                  <ul className={`${shop?`hidden`:``} flex flex-col mx-12`}>
                      {shopItems.map((item)=>(
                          <>
                          <li key={item.category} className="font-serif text-sm font-bold my-4">{item.category}</li>
                      {item.type.map((items)=>(<li className=" text-sm" key={items}><Link href={`/`}>{items}</Link></li>))}

                          </>
                      ))}

                  </ul>
              </li>
              <li className="flex justify-between px-8 h-12" onClick={()=>setPersonalized(!personalized)}><span >Personalized jewelery</span><span className="h-7"> {'>'} </span></li>
              <ul className={`${personalized?`hidden`:``} flex flex-col mx-12 pb-4`}>
                  {shopItems[1].type.map((items)=>(

                      <li className=" text-sm" key={items}>
                      <Link href={`/`}>{items}</Link>
                  </li>))}
              </ul>
              <li className="flex justify-between h-12 mx-8" onClick={()=>setGift(!gift)}><span className={``}>gifts</span><span className={`${gift?``:`rotate-90`} h-7`}> {'>'} </span></li>
                <ul className={`${gift?`hidden`:``} flex flex-wrap  justify-evenly pb-4 `}>
                    {gifts.map((items)=>(
                        <div className={`relative`} key={`1 ${items.name}`}>
                            <Link href={items.url}>
                        <Image src={items.src} alt={items.name}  width={140} height={140} className={` mb-4 h-[40vw] w-[40vw] cursor-pointer`}/>
                            <li className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-bold text-white`} key={`${items.name}`}>{items.name}</li>
                            </Link>
                            </div>

                    ))}
                </ul>
              <li className="flex justify-between px-8 h-12" onClick={()=>setCollection(!collection)}><span>collection</span><span className={`${collection?``:`rotate-90`} h-7`}> {'>'} </span></li>
              <ul className={`${collection?`hidden`:``} flex flex-wrap  justify-evenly pb-4 `}>
                  {collections.map((items)=>(
                      <div className={`relative`} key={`${items.name}1`}>
                          <Link href={items.url}>
                              <Image src={items.src} alt={items.name}  width={140} height={140} className={` mb-4 h-[40vw] w-[40vw] cursor-pointer`}/>
                              <li className={`absolute bottom-4 left-1/2 transform -translate-x-1/2  text-sm font-bold text-white`}>{items.name}</li>
                          </Link>
                      </div>

                  ))}
              </ul>
              <li className="flex justify-between px-8 h-12"><span>featured</span><span className="h-7"> {'>'} </span></li>

          </ul>
          </div>
      </>
  );
}
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });