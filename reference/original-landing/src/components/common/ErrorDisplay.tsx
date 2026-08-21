export default function ErrorDisplay({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <div className="max-w-md text-center">
        <div className="mb-6 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="mb-4 font-figtreeSemibold text-2xl font-bold text-gray-900">
          Unable to load pricing
        </h2>
        <p className="mb-8 text-gray-600">{error}</p>
        <button
          onClick={onRetry}
          className="rounded-lg border-primary/[0.1] bg-[#04b851] px-6 py-3 font-figtreeNormal text-white shadow-inner-and-outer shadow-white/[.5] transition-all hover:bg-[#039c43]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
