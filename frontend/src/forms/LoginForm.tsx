import { useState } from "react";
import Input from "../components/Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Logging in with", { email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full mx-auto p-4 bg-background rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Input
        name="Email"
        value={email}
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="Password"
        value={password}
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Login
      </button>
    </form>
  );
}
