
export  function ImageThumbnail({path}:{path:string}) {
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
  
  export  function SelectedImageThumbnail({path}:{path:string}) {
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
