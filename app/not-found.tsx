import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center">
      <div className="space-y-4 max-w-md">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500">
          404
        </h1>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
