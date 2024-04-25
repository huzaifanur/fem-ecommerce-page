import Container from "../shared/containter";
import ProductImageComponent from "./product-image";
import ProductContent from "./product-content";

function ProductPage() {
  return (
    <Container>
      <div className="md:flex sm:pt-[90px] ">
        <div className="basis-1/2">
          <ProductImageComponent />
        </div>

        <div className="basis-1/2 ">
          <ProductContent />
        </div>
      </div>
    </Container>
  );
}

export default ProductPage