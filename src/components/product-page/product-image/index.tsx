import React from "react";
import { productThumbnails } from "@/constants";


function ProductImageComponent() {
  return (
    <div>
        <MainSliderImage />
        <div className="hidden  sm:flex justify-center gap-[30px] w-full pt-8">

        {productThumbnails.map((item=>{
            return  item.selected ? <SelectedImageThumbnail path={item.path}/> :<ImageThumbnail path={item.path}/>
        }))}
        </div>
    </div>
    
  );
}

export default ProductImageComponent;


function MainSliderImage() {
  return (
    <div className="relative mx-auto sm:w-[445px] sm:rounded-lg">
      <div className="sm:hidden">
        <NextArrow />
      </div>
      <div className="sm:hidden">
        <PreviousArrow />
      </div>
      <img
        className="h-[300px] w-[375px] object-cover sm:h-[445px] sm:w-[445px] sm:rounded-lg mx-auto"
        src="/images/image-product-1.jpg"
      />
    </div>
  );
}


function ImageThumbnail({path}:{path:string}) {
    return (
      <div className="cursor-pointer h-[88px] w-[88px] rounded-lg relative hover:before:content[''] hover:before:h-[88px] hover:before:w-[88px] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:bg-white hover:before:bg-opacity-75 hover:before:rounded-lg">
        <img
          className="rounded-lg"
          src={path}
          alt={path}
        />
      </div>
    );
  }
  
  function SelectedImageThumbnail({path}:{path:string}) {
    return (
      <div className="cursor-pointer h-[88px] w-[88px] rounded-lg relative before:content[''] before:h-[88px] before:w-[88px] before:absolute before:top-0 before:left-0 before:bg-white before:bg-opacity-75 before:border-2 before:border-primary-orange before:rounded-lg">
        <img
          className="rounded-lg"
          src={path}
          alt={path}
        />
      </div>
    );
  }


function NextArrow() {
  return (
    <div className="absolute top-[50%] -translate-y-1/2 right-4 bg-white h-10 w-10 rounded-full flex items-center justify-center sm:-right-4">
      <img src="/images/icon-next.svg" alt="" />
    </div>
  );
}

function PreviousArrow() {
  return (
    <div className="absolute top-[50%] -translate-y-1/2 left-4 bg-white h-10 w-10 rounded-full flex items-center justify-center sm:-left-4">
      <img className="mr-1" src="/images/icon-previous.svg" alt="" />
    </div>
  );
}
