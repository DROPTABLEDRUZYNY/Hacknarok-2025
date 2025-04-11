"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data.email, data.password);
      console.log("Logged in!");
      router.push("/"); // перенаправление на домашнюю страницу или любую другую
    } catch (err) {
      setError("Неверный адрес электронной почты или пароль");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="w-full max-w-md p-8 border border-black rounded-lg backdrop-blur bg-white/10 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Login
        </h1>
        {error && (
          <p className="text-center text-sm text-black mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-black rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-black">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-black rounded-lg bg-white/50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-black">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-black hover:bg-black/90 text-white p-3 rounded-lg transition-colors"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
