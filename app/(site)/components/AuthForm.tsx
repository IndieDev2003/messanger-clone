"use client";

import { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVarient = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "Smith",
      email: "Smith@example.com",
      password: "",
    },
  });

  return <div>Auth Form Here</div>;
};

export default AuthForm;
