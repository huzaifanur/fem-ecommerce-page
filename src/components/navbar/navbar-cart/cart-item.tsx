function CartItem() {
    return (
      <div className="flex gap-4">
        <img
          className="h-[50px] w-[50px] rounded-md"
          src="/images/image-product-1-thumbnail.jpg"
          alt="image-product-1-thumbnail"
        />
        <div className="text-neutral-800">
          <div>Fall Limited Edition Sneakers</div>
          <div>
            <span>$125.00</span> <span>x 3</span>{" "}
            <span className="font-bold text-neutral-900">$375.00</span>
          </div>
        </div>
      </div>
    );
  }

  export default CartItem
  