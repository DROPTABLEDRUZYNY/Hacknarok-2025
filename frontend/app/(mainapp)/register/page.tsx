"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { register as registerUser } from "@/services/authService";

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUser(data.email, data.password);
      setError(null);
      setSuccess("Registered successfully!");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Registration failed");
      setSuccess(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password must be at least 3 characters long",
            },
          })}
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <input
          {...register("confirmPassword", {
            required: "Please confirm password",
          })}
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}

        <button
          type="submit"
          className="w-full bg-black hover:bg-black/90 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
