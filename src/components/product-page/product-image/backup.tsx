import React from "react";
import { NextImageButton, PreviousImageButton } from "./slider-buttons";
import { ImageThumbnail, SelectedImageThumbnail } from "./image-thumbnail";

function ImageView({
  images,
  selectedImage,
  handleNextImage,
  handlePreviousImage,
  hanldeSelectImage
}: any) {
  return (
    <div className="hidden sm:block">
      <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 flex items-center justify-center">
        <div>
          <MainSliderImage
            path={images[selectedImage]?.imagePath}
            handleNextImage={handleNextImage}
            handlePreviousImage={handlePreviousImage}
          />
          <Thumbnails images={images}  selectedImage={selectedImage} hanldeSelectImage={hanldeSelectImage}/>
        </div>
      </div>
    </div>
  );
}

export default ImageView;

function MainSliderImage({ path, handleNextImage, handlePreviousImage }: any) {
  return (
    <div className="relative mx-auto w-[550px]">
      <NextImageButton handleNextImage={handleNextImage}/>
      <PreviousImageButton handlePreviousImage={handlePreviousImage}/>
      <img className="object-cover h-[550px] w-[550px] rounded-lg" src={path} />
    </div>
  );
}

function Thumbnails({images,selectedImage, hanldeSelectImage}:any) {
  return (
    <div className="mt-[38px] block">
      <div className="flex justify-center gap-4 w-full">
        {images.map((item:any,index:number) => (
          <>
            {selectedImage == item.id ? (
              <SelectedImageThumbnail image={item} key={item.path} />
            ) : (
              <ImageThumbnail image={item} key={item.path} hanldeSelectImage={hanldeSelectImage}  />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
