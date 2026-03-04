import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
};

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-border">
      <div className="font-mono text-lg">deep.desai</div>
      <div className="flex gap-6 text-sm">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="font-semibold hover:text-muted"
            >
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
