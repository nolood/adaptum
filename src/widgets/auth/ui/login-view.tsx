import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { type FC } from "react";
import { LoginForm } from "~/features/auth/ui";

const LoginView: FC = () => {
  return (
    <Card className="p-8">
      <CardHeader>
        <h1 className="text-3xl">Login</h1>
      </CardHeader>
      <CardBody>
        <LoginForm />
      </CardBody>
      <CardFooter className="flex gap-[1rem]">
        <p>Already have an account?</p>
        <Link className="cursor-pointer">Register!</Link>
      </CardFooter>
    </Card>
  );
};

export default LoginView;
