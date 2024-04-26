
export function NextImageButton() {
    return (
      <div className="absolute top-[50%] -translate-y-1/2 right-4 bg-white h-10 w-10 rounded-full flex items-center justify-center sm:-right-4">
        <img src="/images/icon-next.svg" alt="" />
      </div>
    );
  }
  
 export function PreviousImageButton() {
    return (
       
      <button className="absolute top-[50%] -translate-y-1/2 left-4 bg-white h-10 w-10 rounded-full flex items-center justify-center sm:-left-4">
        <img className="mr-1" src="/images/icon-previous.svg" alt="" />
      </button>
    );
  }
  