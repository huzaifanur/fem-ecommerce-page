
export function NextImageButton({handleNextImage}:any) {
    return (
      <button onClick={handleNextImage} className="absolute top-[50%] -translate-y-1/2 right-4 bg-white h-10 w-10 rounded-full flex items-center justify-center sm:-right-4">
        <img src="/images/icon-next.svg" alt="" />
      </button>
    );
  }
  
 export function PreviousImageButton({handlePreviousImage}:any) {
    return (
       
      <button onClick={handlePreviousImage} className="absolute top-[50%] -translate-y-1/2 left-4 bg-white h-10 w-10 rounded-full flex items-center justify-center sm:-left-4">
        <img className="mr-1" src="/images/icon-previous.svg" alt="" />
      </button>
    );
  }
  