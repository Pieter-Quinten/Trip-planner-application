import { Link, useLocation } from "react-router-dom";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li>
      <Link
        to={href}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-accent-foreground hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
