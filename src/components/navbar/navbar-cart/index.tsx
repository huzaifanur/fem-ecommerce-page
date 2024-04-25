"use client";
import React from "react";
import CartItem from "./cart-item";
import CartButton from "./cart-button";
function NavbarCart() {
    const [showToolTip, setShowToolTip] = React.useState(false);
  
    const handleCartIconClick = () => {
      setShowToolTip(!showToolTip);
    };
  
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".cart-tooltip")) {
        setShowToolTip(false);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener("click", handleOutsideClick);
      return () => {
        window.removeEventListener("click", handleOutsideClick);
      };
    }, []);
  
    return (
      <div className="cart-tooltip relative">
        <span onClick={handleCartIconClick} className="cursor-pointer">
          <img src="/images/icon-cart.svg" alt="" />
        </span>
        {showToolTip && (
          <div className="w-[360px] h-[256px] absolute top-[68px] sm:top-[45px]  left-[-246px] sm:left-[-160px] bg-white border border-gray-300 rounded shadow">
            <div className="font-bold p-4 border-b-[1px]">Cart</div>
            <div className="flex flex-col gap-8  h-[197px] p-6 rounded-sm">
              <CartItem/>
              <CartButton/>
            </div>
          </div>
        )}
      </div>
    );
  }
  

 export default NavbarCart