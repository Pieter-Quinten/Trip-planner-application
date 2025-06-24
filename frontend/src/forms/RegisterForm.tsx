import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "../components/Link";

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Registering user", { name, email, password });
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setLoading(false);
    }
  };

  const clearFieldError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-xl shadow-lg p-8 space-y-6"
        >
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Create account
            </h1>
            <p className="text-sm text-muted-foreground">
              Join us to start planning your next adventure
            </p>
          </div>

          <div className="space-y-4">
            <Input
              name="Full Name"
              value={name}
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => {
                setName(e.target.value);
                clearFieldError("name");
              }}
              error={errors.name}
            />

            <Input
              name="Email"
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
                clearFieldError("email");
              }}
              error={errors.email}
            />

            <Input
              name="Password"
              value={password}
              type="password"
              placeholder="Create a password"
              onChange={(e) => {
                setPassword(e.target.value);
                clearFieldError("password");
              }}
              error={errors.password}
            />

            <Input
              name="Confirm Password"
              value={confirmPassword}
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                clearFieldError("confirmPassword");
              }}
              error={errors.confirmPassword}
            />
          </div>

          <Button type="submit" loading={loading} disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </Button>

          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Already have an account? <Link href="/login">Sign in</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
