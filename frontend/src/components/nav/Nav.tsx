import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-foreground text-xl font-bold">
            Trip Planner
          </span>
          <div className="ml-10">
            <ul className="flex space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
