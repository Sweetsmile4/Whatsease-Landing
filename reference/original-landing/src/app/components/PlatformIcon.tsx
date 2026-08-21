'use client';

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
  FaEnvelope,
  FaQuestion,
} from 'react-icons/fa';
import { cn } from '@/app/lib/utils';
import { SiGmail } from 'react-icons/si';

interface PlatformIconProps {
  platform: string;
  className?: string;
  size?: number;
  color?: string;
}

const BRAND_COLORS: Record<string, string> = {
  whatsapp: '#25D366',
  instagram: '#E1306C',
  linkedin: '#0A66C2',
  facebook: '#1877F2',
  telegram: '#0088cc',
  gmail: '#EA4335',
  email: '#EA4335',
};

export const PlatformIcon = ({
  platform,
  className,
  size = 24,
  color,
}: PlatformIconProps) => {
  const iconProps = {
    className: cn('shrink-0', className),
    size,
    color,
  };

  if (!platform) return <FaQuestion {...iconProps} />;

  const normalized = platform.toLowerCase();

  switch (normalized) {
    case 'whatsapp':
      return (
        <FaWhatsapp
          {...iconProps}
          style={{ color: color || BRAND_COLORS.whatsapp }}
        />
      );
    case 'instagram':
      return (
        <FaInstagram
          {...iconProps}
          style={{ color: color || BRAND_COLORS.instagram }}
        />
      );
    case 'linkedin':
      return (
        <FaLinkedin
          {...iconProps}
          style={{ color: color || BRAND_COLORS.linkedin }}
        />
      );
    case 'facebook':
      return (
        <FaFacebook
          {...iconProps}
          style={{ color: color || BRAND_COLORS.facebook }}
        />
      );
    case 'telegram':
    case 'telegram_plane':
      return (
        <FaTelegram
          {...iconProps}
          style={{ color: color || BRAND_COLORS.telegram }}
        />
      );
    case 'gmail':
      return (
        <SiGmail
          {...iconProps}
          style={{ color: color || BRAND_COLORS.gmail }}
        />
      );
    case 'email':
      return (
        <FaEnvelope
          {...iconProps}
          style={{ color: color || BRAND_COLORS.email }}
        />
      );
    default:
      return <FaQuestion {...iconProps} />;
  }
};
