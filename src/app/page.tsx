import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider/>
    </>
  );
}




function ImageSlider(){
  return (
    <div className="relative max-w-[375px] mx-auto">
        <NextArrow/>
        <PreviousArrow/>
        <img
          className="h-[300px] w-[375px] object-cover"
          src="/images/image-product-1.jpg"
        />
      </div>
  )
}


function NextArrow() {
  return (
    <div className="absolute top-[50%] -translate-y-1/2 right-4 bg-white h-10 w-10 rounded-full flex items-center justify-center ">
      <img src="/images/icon-next.svg" alt="" />
    </div>
  );
}

function PreviousArrow() {
  return (
    <div className="absolute top-[50%] -translate-y-1/2 left-4 bg-white h-10 w-10 rounded-full flex items-center justify-center ">
      <img className="mr-1" src="/images/icon-previous.svg" alt="" />
    </div>
  );
}
