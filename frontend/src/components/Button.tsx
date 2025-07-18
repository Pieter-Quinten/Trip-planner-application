export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "default",
  loading = false,
}: {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  loading?: boolean;
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
    outline:
      "border border-border bg-background hover:bg-accent hover:text-accent-foreground focus:ring-primary",
    ghost: "hover:bg-accent hover:text-accent-foreground focus:ring-primary",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm rounded-md",
    default: "h-10 px-4 py-2 rounded-lg",
    lg: "h-12 px-6 text-lg rounded-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        w-full
      `}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-25"
          />
          <path
            fill="currentColor"
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
