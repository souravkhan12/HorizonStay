import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataFrom from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  gap: 5rem;
`;

function Account() {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user.fullName) {
    return (
      <Div>
        <Heading>This is the testing User. Please Create new User</Heading>
        <Button onClick={() => navigate("/users")}>Click Here </Button>
      </Div>
    );
  }

  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataFrom />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
