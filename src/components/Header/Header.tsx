import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-4 items-center py-3">
          <Link
            href="/blog"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            About
          </Link>
          <Link
            href="/blog/post"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Post
          </Link>
          <Link
            href="/playground/find-play"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Find &amp; Play
          </Link>
          <Link
            href="/help"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            FAQ
          </Link>
          <Link
            href="/users-client-ver"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Users-Client
          </Link>
          <Link
            href="/users-server-ver"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Users-Server
          </Link>
          <Link
            href="/products-client-ver"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Product-Client
          </Link>
          <Link
            href="/products-server-ver"
            className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-150 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Product-Server
          </Link>
        </nav>
          <ThemeToggle />
      </div>
    </header>
  );
}
