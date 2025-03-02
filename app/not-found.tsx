import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-500 px-5 py-3 text-white shadow-md transition hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
}
