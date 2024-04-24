"use client";
import React from "react";
import Container from "../shared/containter";
import Button from "../shared/button";

const navList = [
  {
    name: "Collections",
  },
  {
    name: "Men",
  },
  {
    name: "Women",
  },
  {
    name: "About",
  },
  {
    name: "Contacts",
  },
];

{
}

function Navbar() {
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between p-6">
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
                  className={`relative text-neutral-800 hover:text-neutral-900 cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[5px] hover:after:bg-primary-orange hover:after:left-0 hover:after:-bottom-12`}
                  key={item.name}
                >
                  {item.name}
                </li>
              ))}
            </ul>{" "}
          </div>

          {/* right */}
          <div className="flex items-center gap-x-6">
            <CartToolTip />
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

function MobileMenu() {
  const [showSidebar, setShowSidebar] = React.useState(true);

  function toggleSideMenu() {
    setShowSidebar(!showSidebar);
  }
  const handleOutsideClick = (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest("#outside-mobile-menu")) {
      setShowSidebar(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  console.log(showSidebar);
  return (
    <>
      
        <span onClick={toggleSideMenu}>
          <img src="/images/icon-menu.svg" alt="" />
        </span>
        {/* Z-INDEX-1 */}
        {showSidebar && (
          <ul className="fixed top-0 left-0 w-[65%] flex h-screen flex-col gap-6 bg-white p-6 z-10">
            <span onClick={toggleSideMenu} className="py-6">
              <img src="/images/icon-close.svg" alt="" />
            </span>
            {navList.map((item) => (
              <li
                className={` text-neutral-900 hover:text-neutral-800 text-2xl font-bold  cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[5px] hover:after:bg-primary-orange hover:after:left-0 hover:after:-bottom-12`}
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      
      {showSidebar && (
        <div
          id="outside-mobile-menu"
          className="fixed top-0 right-0 w-[35%] flex h-screen flex-col gap-6 bg-black bg-opacity-50 p-6 z-10"
        ></div>
      )}
    </>
  );
}

function CartToolTip() {
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
        <div className=" w-[360px] h-[256px] absolute top-[50px] -right-[180px] bg-white border border-gray-300 rounded shadow">
          <p className="font-bold p-4 border-b-[1px]">Cart</p>
          <div className="flex flex-col gap-8  h-[197px] p-6 rounded-sm">
            <CartItem />
            <CartButton />
            {/* <p >Your cart is empty.</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

function CartItem() {
  return (
    <div className="flex gap-4">
      <img
        className="h-[50px] w-[50px] rounded-md"
        src="/images/image-product-1-thumbnail.jpg"
        alt="image-product-1-thumbnail"
      />
      <p className="text-neutral-800">
        <div>Fall Limited Edition Sneakers</div>
        <div>
          <span>$125.00</span> <span>x 3</span>{" "}
          <span className="font-bold text-neutral-900">$375.00</span>
        </div>
      </p>
    </div>
  );
}

function CartButton() {
  return (
    <Button>
      <p>Checkout</p>
    </Button>
  );
}
