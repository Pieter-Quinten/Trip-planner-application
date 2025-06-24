import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Link({
  href,
  children,
  IsSolid = false,
}: {
  href: string;
  children: React.ReactNode;
  IsSolid?: boolean;
}) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <RouterLink
      to={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? "text-primary-foreground bg-primary"
          : "text-accent-foreground hover:bg-primary hover:text-primary-foreground"
      } ${IsSolid ? "bg-primary text-primary-foreground" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </RouterLink>
  );
}
