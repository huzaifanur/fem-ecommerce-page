import Button from "@/components/shared/button";

function ProductContent() {
    return (
      <div className="flex flex-col gap-4 p-6 bg-white sm:gap-8 sm:p-[62px] ">
        <p className="text-xs text-primary-orange font-bold text-uppercase">
          SNEAKER COMPANY
        </p>
        <h1 className="text-[2rem] leading-[2rem] font-bold ">
          Fall Limited Edition Sneakers
        </h1>
        {/*  */}
        <p className="text-neutral-800">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the
          weather can offer.
        </p>
        {/*  */}
        <div className="flex justify-between sm:flex-col">
          <div className="flex items-center gap-4">
            <span className="text-[28px] font-bold"> $125.00</span>
            <span className="text-primary-orange bg-pale-orange rounded-md p-1">
              50%
            </span>
          </div>
          <s className="text-neutral-700 font-bold">$250.00</s>
        </div>
 
        {/*  */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="basis-2/5 flex items-center justify-between font-bold bg-neutral-100 p-4 rounded-md">
            <button>
              <img src="/images/icon-plus.svg" alt="" />
            </button>
            <span>0</span>
            <button>
              <img src="/images/icon-minus.svg" alt="" />
            </button>
          </div>
          <div className="basis-3/5 rounded-lg shadow-md shadow-primary-orange sm:shadow-none">
            <Button>
              <div className="flex items center justify-center gap-4 text-white">
                <img className="" src="/images/icon-cart-white.svg" alt="" />
                <p>Add to cart</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductContent