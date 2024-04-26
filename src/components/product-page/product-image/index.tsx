"use client";
import React, { useState } from "react";
import { images } from "@/constants";
import { SelectedImageThumbnail, ImageThumbnail } from "./image-thumbnail";
import { NextImageButton, PreviousImageButton } from "./slider-buttons";
import ImageView from "./backup";

function ProductImageComponent() {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [showViewComponent, setShowViewComponent] = useState(false);
  function hanldeSelectImage(index: number) {
    
    setSelectedImage(index);
  }

  function handleNextImage() {
    // should not be more than images length
    if (selectedImage >= images.length - 1) {
      setSelectedImage(0);
    }
    else{
    setSelectedImage(selectedImage + 1);}
  }
  function handlePreviousImage() {
    if (selectedImage <= 0) {
      setSelectedImage(images.length - 1);
    }
    else{
    setSelectedImage(selectedImage - 1);}
  }

  return (
    <div>
      {/* Image */}
      <div className="relative mx-auto w-[375px]  sm:w-[445px]">
        <div className="sm:hidden">
          <NextImageButton handleNextImage={handleNextImage}  />
        </div>
        <div className="sm:hidden">
          <PreviousImageButton handlePreviousImage={handlePreviousImage} />
        </div>
        <img
        onClick={()=>{setShowViewComponent(true)}}
          className="object-cover h-[445px] w-[375px]  sm:w-[445px] cursor-pointer mx-auto"
          src={images[selectedImage].imagePath}

        />
      </div>
      {/* Thumbnails */}
      <div className="hidden sm:flex justify-center gap-[30px] w-full pt-8">
        {images.map((image, index) => {
          return index == selectedImage ? (
            <SelectedImageThumbnail
              key={index}
              image={image}
              hanldeSelectImage={hanldeSelectImage}
            />
          ) : (
            <ImageThumbnail
              key={index}
              image={image}
              hanldeSelectImage={hanldeSelectImage}
            />
          );
        })}
      </div>
      {/* Image View  */}
      {showViewComponent && (
        <ImageView
          images={images}
          selectedImage={selectedImage}
          handleNextImage={handleNextImage}
          handlePreviousImage={handlePreviousImage}
          hanldeSelectImage={hanldeSelectImage}
        />
      )}
    </div>
  );
}

export default ProductImageComponent;
