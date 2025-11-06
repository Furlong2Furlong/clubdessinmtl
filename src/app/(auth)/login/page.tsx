"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSocialAuth = async (provider: "google" | "github") => {
    setIsLoading(true);
    setError("");

    try {
      console.log("logged in with " + provider);
    } catch (err) {
      setError(
        `Failed to login with ${provider} : ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isSignIn) {
        console.log("sign in with email");
      } else {
        console.log("sign up with email");
      }
    } catch (err) {
      setError(
        `authentication failed: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <p>{isSignIn ? "Signin to you accout" : "sign up to get started"}</p>
      </div>

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}
