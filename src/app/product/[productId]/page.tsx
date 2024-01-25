import Container from "@/components/container";
import ProductDetails from "@/components/Product/productDetails";
import ListRating from "./listRating";
import getProductById from "@/actions/getProductById";
import NullData from "@/components/nullData";
import AddRating from "./addRating";
import { getCurrentUser } from "@/actions/getCurrentUser";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  // Ensure productId is defined before calling getProductById
  const productId = params.productId;

  if (!productId) {
    return <NullData title="Product ID is not provided" />;
  }

  const product = await getProductById({ productId });

  const user = await getCurrentUser();
  if (!product) {
    return <NullData title="Product with the given ID not found" />;
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
