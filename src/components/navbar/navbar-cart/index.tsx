"use client";
import React from "react";
import CartItem from "./cart-item";
import CartButton from "./cart-button";
import { useCart } from "@/hooks/useCart";
function NavbarCart() {
  const [showToolTip, setShowToolTip] = React.useState(false);
  const { cart } = useCart();
  // caculate total items
  const totalCartItems = cart.cartItems.reduce(
    (acc, item) => acc + item.count,
    0
  );
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
      <span onClick={handleCartIconClick} className="cursor-pointer relative ">
        {totalCartItems > 0 && <span className="h-[13px] w-[19px] absolute top-[-4px] left-[10px] bg-primary-orange rounded-full  flex items-center justify-center text-[10px] text-white font-bold">
          {totalCartItems}
        </span>}
        <img src="/images/icon-cart.svg" alt="" />
      </span>
      {showToolTip && (
        <div className="w-[360px] h-[256px] absolute top-[68px] sm:top-[45px]  left-[-246px] sm:left-[-160px] bg-white border border-gray-300 rounded z-20 shadow">
          <div className="font-bold p-4 border-b-[1px]">Cart</div>
          <div className="flex flex-col gap-8  h-[197px] p-6 rounded-sm">
            {totalCartItems > 0 && (
              <>
                <CartItem />
                <CartButton />
              </>
            )}
            {totalCartItems == 0 && (
              <>
              <div className="flex items-center justify-center h-full">

                <p>You cart is empty</p>
              </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarCart;
