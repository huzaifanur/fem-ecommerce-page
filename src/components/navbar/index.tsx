"use client";
import React from "react";
import Container from "../shared/containter";
import { navList } from "@/constants";
import MobileMenu from "./mobile-menu";
import NavbarCart from "./navbar-cart";

function Navbar() {
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between p-6 border-b-[1px]">
          {/* left side of Nav */}
          <div className="flex items-center gap-4">
            <MobileMenu />
            <span>
              <img
                src="/images/logo.svg"
                alt="logo"
                className="w-[138px] h-[20px]"
              />
            </span>
            <ul className="hidden sm:flex gap-x-6">
              {navList.map((item) => (
                <li
                  className={`relative text-neutral-800 hover:text-neutral-900 cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[5px] hover:after:bg-primary-orange hover:after:left-0 hover:after:bottom-[-37px]`}
                  key={item.name}
                >
                  {item.name}
                </li>
              ))}
            </ul>{" "}
          </div>

          {/* right */}
          <div className="flex items-center gap-x-6">
            <NavbarCart />
            <span className="h-[50px] w-[50px] rounded-full cursor-pointer ring-2 ring-[#ffffff] hover:ring-primary-orange hover:text-neutral-900">
              <img src="/images/image-avatar.png" alt="" />
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;


