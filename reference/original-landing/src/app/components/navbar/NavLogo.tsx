import Link from 'next/link';
import Image from 'next/image';

interface NavLogoProps {
  darkMode?: boolean;
}

export default function NavLogo({ darkMode = false }: NavLogoProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link href="/">
        <Image
          src={darkMode ? '/logo.svg' : '/logo.svg'}
          alt="WhatsEase Logo"
          height={180}
          width={180}
          className="h-auto w-[120px] sm:w-[150px] md:w-[180px]"
          priority
        />
      </Link>
    </div>
  );
}
