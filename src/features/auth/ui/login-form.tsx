import { type FC } from "react";
import { Button, Input } from "@nextui-org/react";
import { type SubmitHandler, useForm } from "react-hook-form";

interface LoginFormFields {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[20px] md:w-[500px] lg:w-[700px]"
    >
      <Input
        {...register("email", { required: true })}
        isRequired
        type="email"
        label="Email"
      />
      {errors.email && <span>This field is required</span>}
      <Input
        {...register("password", { required: true })}
        isRequired
        type="password"
        label="Password"
      />
      {errors.password && <span>This field is required</span>}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
