'use client';
import { SVGProps, useState, useEffect } from 'react';
import Link from 'next/link';

type SafariMode = 'default' | 'simple';

export interface SafariProps extends SVGProps<SVGSVGElement> {
  url?: string;
  imageSrc?: string;
  videoSrc?: string;
  width?: number;
  height?: number;
  mode?: SafariMode;
  className?: string;
  screenshotApiKey?: string;
}

export function Safari({
  imageSrc,
  videoSrc,
  url = 'https://developers.facebook.com/docs/whatsapp/cloud-api',
  width = 1203,
  height = 753,
  mode = 'default',
  className,
  screenshotApiKey = 'YOUR_API_KEY', // Replace with your actual API key
  ...props
}: SafariProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [screenshotUrl, setScreenshotUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  // You can replace this with any screenshot service API
  const generateScreenshotUrl = () => {
    // Use a real screenshot service API
    return `https://api.screenshotmachine.com/?key=${screenshotApiKey}&url=${encodeURIComponent(url)}&dimension=1200x800&device=desktop&format=png&cacheLimit=14&delay=2000`;

    // Alternative: Use a placeholder service if you don't have a screenshot API
    // return `https://placehold.co/1200x800/2a2a2a/white?text=${encodeURIComponent(url)}`;
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (url) {
      try {
        const screenshotUrl = generateScreenshotUrl();
        setScreenshotUrl(screenshotUrl);
      } catch (err) {
        console.error('Failed to generate screenshot URL:', err);
        setError('Failed to load screenshot');
      } finally {
        setIsLoading(false);
      }
    }
  }, [url]);

  const handleClick = () => {
    // Open the URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{
        width: '100%',
        maxWidth: width,
        height: '100%',
        maxHeight: height,
      }}
    >
      {/* Browser chrome header */}
      <div className="relative h-[52px] w-full rounded-t-xl border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-[#262626]">
        {/* Traffic lights */}
        <div className="absolute left-4 top-[50%] flex -translate-y-1/2 items-center space-x-2">
          <div className="h-3 w-3 rounded-full border border-[#E14640] bg-[#FF5F57] dark:opacity-70"></div>
          <div className="h-3 w-3 rounded-full border border-[#E0A92A] bg-[#FEBC2E] dark:opacity-70"></div>
          <div className="h-3 w-3 rounded-full border border-[#17B230] bg-[#28C840] dark:opacity-70"></div>
        </div>

        {/* URL bar */}
        <div className="absolute left-[50%] top-[50%] flex w-[660px] max-w-[80%] -translate-x-1/2 -translate-y-1/2 items-center rounded-md bg-[#E5E5E5] px-3 py-1.5 dark:bg-[#404040]">
          <div className="mr-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z" />
            </svg>
          </div>
          <span className="truncate text-sm text-gray-500">{url}</span>
        </div>

        {mode === 'default' && (
          <div className="absolute right-4 top-[50%] flex -translate-y-1/2 items-center space-x-4">
            <svg
              className="h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M14.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 8.586l3.293-3.293z" />
            </svg>
            <svg
              className="h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="h-4 w-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Browser content */}
      <div
        className="h-[calc(100%-52px)] w-full overflow-hidden rounded-b-xl bg-[#E5E5E5] dark:bg-[#404040]"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Loading preview...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
              <p className="mb-2 text-red-500">{error}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Click to visit the website directly
              </p>
            </div>
          </div>
        ) : screenshotUrl ? (
          <div className="group relative h-full w-full">
            <img
              src={screenshotUrl}
              alt={`Screenshot of ${url}`}
              className="h-full w-full object-cover"
              onError={() => setError('Failed to load screenshot')}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20">
              <div className="translate-y-4 transform rounded-full bg-white bg-opacity-90 px-4 py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-medium text-gray-700">
                  Click to open website
                </span>
              </div>
            </div>
          </div>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Safari content"
            className="h-full w-full object-cover"
          />
        ) : videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">
              No content provided
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
