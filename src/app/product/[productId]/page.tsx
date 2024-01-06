import Container from "@/components/container";
import { product } from "../../../../public/dummy/product";
import ProductDetails from "@/components/Product/productDetails";

interface iPrams {
  productId?: string;
}

const Product = ({ params }: { params: iPrams }) => {
  console.log("params", params);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
