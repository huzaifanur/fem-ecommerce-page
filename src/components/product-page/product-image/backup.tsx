import React from "react";
import { productThumbnails } from "@/constants";
import { NextImageButton, PreviousImageButton } from "./slider-buttons";
import { ImageThumbnail, SelectedImageThumbnail } from "./image-thumbnail";

function ImageView() {
  return (
    <div className="hidden sm:block">
      <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 flex items-center justify-center">
        <div>
          <MainSliderImage />
          <Thumbnails />
        </div>
      </div>
    </div>
  );
}

export default ImageView;

function MainSliderImage() {
  return (
    <div className="relative mx-auto w-[550px]">
      <NextImageButton />
      <PreviousImageButton />
      <img
        className="object-cover h-[550px] w-[550px]"
        src="/images/image-product-1.jpg"
      />
    </div>
  );
}

function Thumbnails() {
  return (
    <div className="mt-[38px] block">
      <div className="flex justify-center gap-4 w-full">
        {productThumbnails.map((item) => (
          <>
            {item.selected ? (
              <SelectedImageThumbnail path={item.path} key={item.path} />
            ) : (
              <ImageThumbnail path={item.path} key={item.path}/>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
