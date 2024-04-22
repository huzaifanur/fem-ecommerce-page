import React from "react";
import Container from "../shared/containter";

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

function Navbar() {
  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between pt-[28px] pb-[34px] border-b-[2px] border-[#E4E9F2]">
          {/* left side of Nav */}
          <div className="flex  gap-x-[54px]">
            <span>
              <img src="/images/logo.svg" alt="logo" />
            </span>
            <ul className="flex gap-x-[34px] relative">
              {navList.map((item) => (
                <li
                  className={`relative text-neutral-800 hover:text-neutral-900 cursor-pointer hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[5px] hover:after:bg-primary-orange hover:after:left-0 hover:after:-bottom-12`}
                  key={item.name} // Assuming a unique 'id' property for each item
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* right */}
          <div className="flex items-center gap-x-[44px]">
            <span className="cursor-pointer">
              <img src="/images/icon-cart.svg" alt="" />
            </span>
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

function CartToolTip() {
    const [showToolTip, setShowToolTip] = React.useState(true);
  
    const handleCartIconClick = () => {
      setShowToolTip(!showToolTip);
    };
  
    const handleOutsideClick = (e:any) => {
      if (!e.target.closest(".cart-tooltip")) {
        setShowToolTip(false);
      }
    };
  
    return (
      <div className="relative">
        <span className="cursor-pointer" onClick={handleCartIconClick}>
          <img src="/images/icon-cart.svg" alt="Cart" />
        </span>
        {showToolTip && (
          <div
            className="cart-tooltip absolute top-[60px] right-0 bg-white p-4 border border-gray-300 rounded shadow"
            onClick={handleOutsideClick}
          >
            {/* Your cart content goes here */}
            {/* For example: */}
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    );
  }
  
  