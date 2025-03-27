// app/login/page.js
"use client";

import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useRouter } from "next/navigation"; // Note: different import in App Router

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const { login, signup } = useAuth();
  const router = useRouter();

  async function submitHandler(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setError(null);
      if (isLoggingIn) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      router.push("/dashboard"); // Redirect to dashboard after login/signup
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">
          {isLoggingIn ? "Login" : "Sign Up"}
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isLoggingIn ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsLoggingIn(!isLoggingIn)}
          >
            {isLoggingIn
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
