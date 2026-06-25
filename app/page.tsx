const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ04lpFXlAK8NdjoavYjAc0c8MYTmEjCz0RIF8TWSMmOXXiYAD_IwBkTTQIQFmZsibPYhiWI1Gxd";

const techServices = [
  {
    title: "Fractional CTO / CIO / CISO",
    desc: "Executive-level technology leadership on a flexible, as-needed basis.",
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "CMMC, NIST, and SOC 2 frameworks tailored to your industry and risk profile.",
  },
  {
    title: "Telecom Audits",
    desc: "Average client savings of $2,400+ per employee per year on telecom spend.",
  },
  {
    title: "IT Cost Audits",
    desc: "Identify waste, renegotiate contracts, and optimize your vendor portfolio.",
  },
  {
    title: "Software Vetting & Implementation",
    desc: "CRM, ERP, and custom software — independently vetted and implemented right.",
  },
  {
    title: "Cloud Migration & Support",
    desc: "Seamless cloud migrations with 24/7 monitoring and ongoing support.",
  },
  {
    title: "PEO / HR / Staffing",
    desc: "Connect with top-tier HR, PEO, and staffing solutions for your workforce.",
  },
  {
    title: "Clean Energy & Physical Security",
    desc: "Sustainable energy programs and comprehensive physical security assessments.",
  },
];

const pricingTiers = [
  {
    title: "Individual Coaching",
    price: "$75–$125",
    unit: "/hour",
    features: [
      "1-on-1 personalized sessions",
      "Learn at your own pace",
      "ChatGPT, Claude & more",
    ],
    highlight: false,
  },
  {
    title: "Half-Day Workshop",
    price: "$500–$750",
    unit: "",
    features: [
      "Up to 5 participants",
      "4-hour hands-on session",
      "Role-specific exercises",
    ],
    highlight: false,
  },
  {
    title: "Full-Day Workshop",
    price: "$1,000–$1,500",
    unit: "",
    features: [
      "Up to 10 participants",
      "Full-day deep dive",
      "Custom workflow integration",
    ],
    highlight: true,
  },
  {
    title: "Multi-Week Program",
    price: "$1,250",
    unit: "/person",
    features: [
      "4–6 week program",
      "Ongoing accountability",
      "Team-wide transformation",
    ],
    highlight: false,
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-500 mt-0.5 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-tight select-none">
          a<span className="text-blue-400">CTO</span>r Advisory
        </span>
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

function Hero() {
  return (
    <section className="bg-slate-900 text-white py-28 sm:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Your technology strategy
          <br className="hidden sm:block" /> shouldn&apos;t be a guessing game.
        </h1>
        <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Technology advisory and AI training for growing businesses.
        </p>
        <div className="mt-10">
          <a
            href={BOOKING_URL}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-md transition-colors"
          >
            Book a Free 15-Minute Call
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="bg-white py-16 sm:py-24" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Two ways we help your business
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Expert technology guidance or hands-on AI training — or both.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Technology Advisory
            </h3>
            <p className="text-sm text-blue-600 font-semibold mb-4">
              Powered by ConnectivTech
            </p>
            <p className="text-slate-600 mb-6">
              Vendor-neutral guidance that connects you with pre-vetted
              technology solutions. We do the vetting — at no cost to your
              business.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Fractional CTO / CIO / CISO",
                "Cybersecurity & compliance",
                "Telecom & IT cost audits",
                "Cloud, software & more",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Free to your business
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              AI Training for Teams
            </h3>
            <p className="text-slate-600 mb-6">
              Hands-on training that turns AI buzz into real productivity.
              Workshops and coaching for individuals and teams of all sizes.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Individual 1-on-1 coaching",
                "Half-day and full-day workshops",
                "Multi-week training programs",
                "ChatGPT, Claude & beyond",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              Starting at $75/hour
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechAdvisoryDetail() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24" id="tech-advisory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Technology Advisory
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Your outsourced technology team
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Through our partnership with ConnectivTech, we connect you with
            pre-vetted vendors across every technology category. You get expert
            guidance and vendor access — ConnectivTech earns from the vendor
            side, so there&apos;s no cost to you.
          </p>
          <div className="mt-6 flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-xl">
            <svg
              className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm text-blue-800 font-medium">
              Free to you. We do the vendor vetting so you don&apos;t have to.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techServices.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-5 border border-slate-200"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mb-3">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={BOOKING_URL}
            className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md transition-colors"
          >
            Talk to an advisor &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function AITrainingDetail() {
  return (
    <section className="bg-white py-16 sm:py-24" id="ai-training">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            AI Training
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Turn AI buzz into real results
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            78% of employees already use AI at work — with no training. We
            close that gap with practical, role-specific coaching that sticks.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative rounded-xl p-6 border-2 flex flex-col ${
                tier.highlight
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="font-bold text-slate-900 text-base mb-1">
                {tier.title}
              </h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-slate-900">
                  {tier.price}
                </span>
                <span className="text-slate-500 text-sm">{tier.unit}</span>
              </div>
              <ul className="space-y-2 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={BOOKING_URL}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors"
          >
            Schedule a training session &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              About aCTOr Advisory
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              aCTOr Advisory was built by a team who has spent a career at the
              intersection of channel sales, technology partnerships, and
              OT/ICS cybersecurity. That experience shapes how we work: cutting
              through vendor noise, asking the right questions, and helping
              businesses make technology decisions they can stand behind.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors"
              >
                Book a call
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-slate-900 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to make smarter technology decisions?
        </h2>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
          Book a free 15-minute discovery call. No pressure, no pitch — just a
          conversation about where you are and where you want to go.
        </p>
        <a
          href={BOOKING_URL}
          className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg rounded-md transition-colors"
        >
          Book a Free Discovery Call
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-300 font-bold text-lg tracking-tight">
            a<span className="text-blue-400">CTO</span>r Advisory
          </span>
          <p className="text-slate-500 text-sm">
            &copy; 2026 aCTOr Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ServicesOverview />
        <TechAdvisoryDetail />
        <AITrainingDetail />
        <About />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
