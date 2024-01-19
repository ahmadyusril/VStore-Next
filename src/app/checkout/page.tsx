import Container from "@/components/container";
import CheckoutClient from "./checkoutClient";
import FormWrap from "@/components/formWrap";

const Checkout = () => {
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <CheckoutClient />
        </FormWrap>
      </Container>
    </div>
  );
};

export default Checkout;
