import React from "react";
import { productThumbnails } from "@/constants";
import { SelectedImageThumbnail, ImageThumbnail } from "./image-thumbnail";
import { NextImageButton, PreviousImageButton } from "./slider-buttons";

function ProductImageComponent() {
  return (
    <div>
      {/* Image */}
      <div className="relative mx-auto sm:w-[445px] sm:rounded-lg">
        <div className="sm:hidden">
          <NextImageButton />
        </div>
        <div className="sm:hidden">
          <PreviousImageButton />
        </div>
        <img
          className="h-[300px] w-[375px] object-cover sm:h-[445px] sm:w-[445px] sm:rounded-lg mx-auto"
          src="/images/image-product-1.jpg"
        />
      </div>
      {/* Thumbnails */}
      <div className="hidden sm:flex justify-center gap-[30px] w-full pt-8">
        {productThumbnails.map((item) => {
          return item.selected ? (
            <SelectedImageThumbnail key={item.path} path={item.path} />
          ) : (
            <ImageThumbnail key={item.path} path={item.path} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductImageComponent;
