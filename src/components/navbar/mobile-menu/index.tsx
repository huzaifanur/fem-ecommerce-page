'use client'
import React from "react";
import { navList } from "@/constants";

function MobileMenu() {
    const [showSidebar, setShowSidebar] = React.useState(false);
  
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
  
    
    return (
      <div className="sm:hidden">
        
          <span onClick={toggleSideMenu}>
            <img src="/images/icon-menu.svg" alt="" />
          </span>
          {/* Z-INDEX-1 */}
          {showSidebar && (
            <ul className="fixed top-0 left-0 w-[65%] flex h-screen flex-col gap-6 bg-white p-6 ">
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
      </div>
    );
  }

  export default MobileMenu