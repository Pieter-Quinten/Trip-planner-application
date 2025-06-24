import Link from "../Link";

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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register" IsSolid>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
