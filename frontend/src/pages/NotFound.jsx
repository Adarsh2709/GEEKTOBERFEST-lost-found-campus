import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 py-12 text-center">
      <div className="max-w-md">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
          Error 404
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, renamed, or never existed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Back to Home
          </Link>
          <Link
            to="/items"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >
            Browse Items
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
