import Container from "@/components/container";
import AddProductForm from "./addProductForm";
import FormWrap from "@/components/formWrap";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/components/nullData";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied!" />;
  }
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
