import { Loader } from '@/components/ui/spinner';

export default function LoadingSpinner({
  message = 'Loading...',
}: {
  message?: string;
}) {
  return <Loader className="min-h-screen" label={message} />;
}
