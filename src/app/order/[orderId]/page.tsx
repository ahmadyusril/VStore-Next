import Container from "@/components/container";
import OrderDetails from "./orderDetails";
import getOrderById from "@/actions/getOrderById";
import NullData from "@/components/nullData";

interface iParams {
  orderId?: string;
}

const Order = async ({ params }: { params: iParams }) => {
  const order = await getOrderById(params);

  if (!order) {
    return <NullData title="No order found" />;
  }
  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
