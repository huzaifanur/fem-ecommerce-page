import Navbar from "@/components/navbar";
import { productThumbnails } from "@/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
    </>
  );
}

function ImageSlider() {
  return (
    <div className="sm:fixed sm:top-0 left-0 sm:h-screen sm:w-screen sm:bg-black sm:bg-opacity-60 sm:flex sm:items-center sm:justify-center">
      <div>
        <MainSliderImage />
        <div className="hidden mt-[38px] sm:block">
          <div className="flex justify-center gap-4 w-full">
            <ImageThumbnail />
            <SelectedImageThumbnail />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageThumbnail() {
  return (
    <div className="h-[88px] w-[88px] rounded-lg ">
      <img
        className="rounded-lg"
        src={productThumbnails[0].path}
        key={productThumbnails[0].path}
        alt=""
      />
    </div>
  );
}

function SelectedImageThumbnail() {
  return (
    <div className="h-[88px] w-[88px] rounded-lg relative before:content[''] before:h-[88px] before:w-[88px] before:absolute before:top-0 before:left-0 before:bg-white before:bg-opacity-75 before:border-2 before:border-primary-orange before:rounded-lg">
      <img
        className="rounded-lg"
        src={productThumbnails[0].path}
        key={productThumbnails[0].path}
        alt=""
      />
    </div>
  );
}

function MainSliderImage() {
  return (
    <div className="relative w-[375px] mx-auto sm:w-[550px]">
      <NextArrow />
      <PreviousArrow />
      <img
        className="h-[300px] w-[375px] object-cover sm:h-[550px] sm:w-[550px]"
        src="/images/image-product-1.jpg"
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
