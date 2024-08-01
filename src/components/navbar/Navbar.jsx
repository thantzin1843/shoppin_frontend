
"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Navbar } from "flowbite-react";
import ProfileDropDown from "./Profile";
import Cart from "./Cart";
import ThemeSwitcher from "../theme/ThemeSwitcher";



export function HomeNav() {
  return (
    <Navbar fluid rounded className="sticky top-0 z-[500]">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/vercel.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-orange-400 dark:text-white">Shoppin</span>
      </Navbar.Brand>

      <div className="flex sm:w-full md:w-auto mt-3 md:order-2 justify-between">
        <div className="flex items-center justify-between">
        <ProfileDropDown/>
        <Cart/>
        </div>
        <div>
        <input className="border border-orange-500 py-1 md:px-3 sm:px-1 rounded-l-md focus:outline-orange-500" />
            <button className="bg-orange-400 py-1 md:px-2 sm:px-1 rounded-r-md">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="/" className="text-red-600" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/shop">Shop</Navbar.Link>
        <Navbar.Link href="/shop">Contact</Navbar.Link>
        {/* <ProfileDropDown/>
        <Cart/> */}
        

      </Navbar.Collapse>
    </Navbar>
  );
}
