import { type FC } from "react";
import { LoginView } from "~/widgets/auth/ui";

const Login: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <LoginView />
    </div>
  );
};

export default Login;
