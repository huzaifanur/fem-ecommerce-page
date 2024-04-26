import Navbar from "@/components/navbar";
import ProductPage from "@/components/product-page";
import { CartProvider } from "@/hooks/useCart";

export default function Home() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <ProductPage />
      </CartProvider>
    </>
  );
}
