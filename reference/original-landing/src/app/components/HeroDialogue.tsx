import Link from 'next/link';
import { HeroVideoDialog } from './ui/hero-video-dialogue';

export function HeroVideoDialogDemo() {
  return (
    <div className="relative flex max-w-6xl flex-col items-center justify-center gap-10 px-10 py-10 md:px-20 md:py-20">
      <h1 className="text-center text-xl font-semibold text-black dark:text-white md:text-5xl">
        Efficient communication for better <br /> retention and increased
        revenue
      </h1>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 md:text-xl">
        Boost collaboration, streamline workflows, and organize communication.
        Foster customer loyalty, <br /> drive revenue, and achieve sustainable
        growth effortlessly.
      </p>
      <Link
        href="/signup"
        className="whitespace-nowrap rounded-xl border border-[#04b851]/[0.5] bg-[#04b851] px-3 py-1.5 text-xs font-semibold text-white shadow-inner shadow-white/[0.3] transition-all duration-300 hover:scale-95 sm:px-4 sm:py-2 sm:text-sm"
      >
        Try for free
      </Link>
      {/* Show only the YouTube video thumbnail as preview */}
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/xSGkQIxcllw?si=MgU64517H7YNXkDi"
        thumbnailSrc="https://img.youtube.com/vi/xSGkQIxcllw/maxresdefault.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
