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

  const baseClasses = IsSolid
    ? "rounded-md p-4 font-bold hover:bg-transparent hover:text-foreground transition-colors duration-200 border border-primary"
    : "rounded-md px-2 py-4 border border-transparent ";

  const activeClasses = IsSolid
    ? "text-primary-foreground bg-primary"
    : "text-primary";

  const inactiveClasses = IsSolid
    ? "bg-primary text-primary-foreground" 
    : "text-muted-foreground hover:text-primary";
  return (
    <RouterLink
      to={href}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </RouterLink>
  );
}
