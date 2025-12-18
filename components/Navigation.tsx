"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/content/site";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-surface/80 hover:text-deep ${
        active ? "bg-primary text-base" : "text-deep/80"
      }`}
    >
      {label}
    </Link>
  );
};

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-deep/10 bg-base/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-deep hover:text-primary">
          {siteConfig.title}
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {siteConfig.navigation.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
