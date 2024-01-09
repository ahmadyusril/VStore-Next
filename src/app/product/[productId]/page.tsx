import Container from "@/components/container";
import ProductDetails from "@/components/Product/productDetails";
import ListRating from "./listRating";
import { products } from "../../../../public/dummy/products";

interface iParams {
  productId?: string;
}

const Product = ({ params }: { params: iParams }) => {
  console.log("params", params);

  const product = products.find((item) => item.id === params.productId);

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
