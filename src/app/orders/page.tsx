import Container from "@/components/container";
import OrdersClient from "./orderClient";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/components/nullData";
import getOrders from "@/actions/getOrders";
import getOrdersByUserId from "@/actions/getOrdersByUserId";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Oops! Access Denied!" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No order(s) yet..." />;
  }

  return (
    <div className="pt-8">
      <Container>
        <OrdersClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
