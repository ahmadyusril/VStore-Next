"use client";

import Input from "@/components/Input/input";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Login" />
      <Button
        outline
        label="Sign in with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className="bg-gray-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading..." : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Don't have an account?{" "}
        <Link className="underline" href={"/register"}>
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
