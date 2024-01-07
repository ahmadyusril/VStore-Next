import Container from "@/components/container";
import { product } from "../../../../public/dummy/product";
import ProductDetails from "@/components/Product/productDetails";
import ListRating from "./listRating";

interface iParams {
  productId?: string;
}

const Product = ({ params }: { params: iParams }) => {
  console.log("params", params);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
