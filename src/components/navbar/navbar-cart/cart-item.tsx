import { useCart } from "@/hooks/useCart";

function CartItem() {
  const { cart } = useCart();
  // caculate total items
  const totalCartItems = cart.cartItems.reduce(
    (acc, item) => acc + item.count,
    0
  );
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
            <span>$125.00</span> <span>x {totalCartItems}</span>{" "}
            <span className="font-bold text-neutral-900">${totalCartItems*125}.00</span>
          </div>
        </div>
      </div>
    );
  }

  export default CartItem
  