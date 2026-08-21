import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="mx-auto flex max-w-4xl items-center justify-center overflow-hidden rounded-2xl bg-[#04b851]/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Ready to transform your WhatsApp business?
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="space-y-3">
                <Link
                  href="/signup"
                  className="block rounded-lg bg-[#04b851] px-5 py-3 text-center font-medium text-white shadow-sm transition-all hover:bg-[#039c43]"
                >
                  Get started for free
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-lg border border-gray-300 bg-white px-5 py-3 text-center font-medium text-gray-900 shadow-sm transition-all hover:bg-gray-50"
                >
                  Contact sales
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dcbwwlztk/image/upload/v1720678845/whatsease/whatsapp-business_fqzwih.jpg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
