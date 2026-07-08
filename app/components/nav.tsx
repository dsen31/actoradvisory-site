import Image from "next/image";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ04lpFXlAK8NdjoavYjAc0c8MYTmEjCz0RIF8TWSMmOXXiYAD_IwBkTTQIQFmZsibPYhiWI1Gxd";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="select-none">
          <Image
            src="https://ebwtcbfupujwmgmrnzwp.supabase.co/storage/v1/object/public/Assets/actor-advisory-logo.png"
            alt="aCTOr Advisory"
            width={150}
            height={75}
            className="w-[150px] h-auto"
          />
        </a>
        <a
          href={BOOKING_URL}
          className="hidden sm:inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors"
        >
          Book a Free Call
        </a>
      </div>
    </nav>
  );
}
