import Container from "@/components/container";
import FormWrap from "@/components/formWrap";
import LoginForm from "./loginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Login = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Login;
