"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";

const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ04lpFXlAK8NdjoavYjAc0c8MYTmEjCz0RIF8TWSMmOXXiYAD_IwBkTTQIQFmZsibPYhiWI1Gxd";

const whatWeDoServices = [
  {
    num: "01",
    title: "Technology Advisory",
    desc: "Vendor-neutral guidance that connects you with pre-vetted technology solutions, from fractional CTO leadership to cybersecurity and hands-on AI training — at no cost to your business.",
    image: {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      alt: "Technology advisors reviewing strategy together in a modern office",
    },
  },
  {
    num: "02",
    title: "Automation",
    desc: "Stop running your business on spreadsheets and manual data entry. We connect your software together so information flows automatically.",
    image: {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Interconnected systems representing automated technology workflows",
    },
  },
  {
    num: "03",
    title: "Website Development",
    desc: "A website built to bring in customers, not just look good.",
    image: {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      alt: "Laptop screen showing website code in an editor",
    },
  },
  {
    num: "04",
    title: "Tech Support",
    desc: "Reliable, responsive support so your team never gets stuck waiting on IT.",
    image: {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      alt: "IT support specialist wearing a headset at a desk",
    },
  },
  {
    num: "05",
    title: "Lead Generation",
    subtitle: "SEO, Paid Ads, AI Search Visibility, Geo-Fencing",
    desc: "SEO, paid ads, AI search visibility, and geo-fencing working together so the right customers actually find you — not just a good-looking website.",
    image: {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      alt: "Marketing analytics dashboard showing website growth",
    },
  },
];

const howWeWorkSteps = [
  {
    num: "01",
    title: "Understand the Business",
    desc: "We start by learning how your business actually runs day to day.",
    image: {
      src: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1200&q=80",
      alt: "Advisor and business owner in a discovery conversation",
    },
  },
  {
    num: "02",
    title: "Identify Priorities",
    desc: "We figure out what matters most and what's holding you back.",
    image: {
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      alt: "Team mapping out priorities on a whiteboard",
    },
  },
  {
    num: "03",
    title: "Build the Plan",
    desc: "We map out a clear, practical plan you can act on.",
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      alt: "Planning documents and charts laid out on a desk",
    },
  },
  {
    num: "04",
    title: "Execute & Support",
    desc: "We help implement it and stay involved as needed.",
    image: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
      alt: "Team collaborating together during implementation",
    },
  },
];

function useScrollSpy(count: number) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(index)) setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [count]);

  return { active, itemRefs };
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-green-400" />
      <span className="text-xs font-semibold tracking-[0.2em] text-green-400 uppercase">
        {children}
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-slate-950 pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Fractional CTO &amp; Technology Leadership</Eyebrow>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Your technology strategy shouldn&apos;t be a guessing game.
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg">
              Technology advisory and AI training for growing businesses.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-md transition-colors"
              >
                Talk With an Advisor
              </a>
              <a
                href="#how-we-work"
                className="inline-flex items-center px-6 py-3 border border-slate-700 hover:border-green-500/50 text-white font-semibold rounded-md transition-colors"
              >
                See How We Work
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
              alt="Rows of illuminated server racks in a dark data center"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-950/25" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-950" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStatBar() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Technology advisors reviewing strategy together in a modern office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="block w-10 h-1 bg-green-400 rounded-full mb-6" />
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              A career in both technology development and go-to-market to
              understand procurement desires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutWhy() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24 border-t border-slate-900" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <Eyebrow>About Us</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technology Complexity Needs Clear Leadership
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            aCTOr Advisory was built on a career at the intersection of
            channel sales, technology partnerships, and OT/ICS cybersecurity.
            We cut through vendor noise, ask the right questions, and help
            you make technology decisions you can stand behind.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.076-.163-3.02-.463L3 20l1.5-4.5C3.55 14.28 3 12.968 3 11.5 3 6.806 7.03 3 12 3s9 3.806 9 8.5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Straightforward Technology Guidance
            </h3>
            <p className="text-slate-400 leading-relaxed">
              No jargon, no sales pitch — just clear, honest advice that
              helps non-technical founders make confident technology
              decisions.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Systems Built to Scale With You
            </h3>
            <p className="text-slate-400 leading-relaxed">
              We build the right technology foundation today so it keeps
              working as your business grows, instead of something you
              outgrow in a year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  const { active, itemRefs } = useScrollSpy(whatWeDoServices.length);

  return (
    <section className="bg-slate-950 py-16 sm:py-24 border-t border-slate-900" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The Right Level of Technology Support for What&apos;s Next
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="divide-y divide-slate-900 lg:divide-y-0">
            {whatWeDoServices.map((service, i) => (
              <div
                key={service.num}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                data-index={i}
                className={`py-10 lg:py-16 first:pt-0 last:pb-0 transition-opacity duration-300 ${
                  i === active ? "lg:opacity-100" : "lg:opacity-40"
                }`}
              >
                <div className="lg:hidden relative aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                  <span className="shrink-0 text-4xl sm:text-5xl font-bold text-green-400 leading-none w-16 sm:w-20">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-sm text-slate-500 font-medium mb-3">
                        {service.subtitle}
                      </p>
                    )}
                    <p className="text-slate-400 leading-relaxed max-w-2xl">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-24 relative aspect-[4/3] rounded-2xl overflow-hidden">
              {whatWeDoServices.map((service, i) => (
                <Image
                  key={service.num}
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="50vw"
                  className={`object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const { active, itemRefs } = useScrollSpy(howWeWorkSteps.length);

  return (
    <section
      className="bg-slate-950 py-16 sm:py-24 border-t border-slate-900"
      id="how-we-work"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            From Scattered Systems to Clear Direction
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            A clear, repeatable process that turns scattered systems into a
            plan your team can actually execute.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="divide-y divide-slate-900 lg:divide-y-0">
            {howWeWorkSteps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                data-index={i}
                className={`py-10 lg:py-16 first:pt-0 last:pb-0 transition-opacity duration-300 ${
                  i === active ? "lg:opacity-100" : "lg:opacity-40"
                }`}
              >
                <div className="lg:hidden relative aspect-video rounded-xl overflow-hidden mb-6">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] text-green-400 uppercase">
                  Step {step.num}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-24 relative aspect-[4/3] rounded-2xl overflow-hidden">
              {howWeWorkSteps.map((step, i) => (
                <Image
                  key={step.num}
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="50vw"
                  className={`object-cover transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-slate-950 py-20 sm:py-28 border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to make smarter technology decisions?
        </h2>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Book a free 30-minute discovery call. No pressure, no pitch — just a
          conversation about where you are and where you want to go.
        </p>
        <a
          href={BOOKING_URL}
          className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-slate-950 font-bold text-lg rounded-md transition-colors"
        >
          Book a Free Discovery Call
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStatBar />
        <AboutWhy />
        <WhatWeDo />
        <HowWeWork />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
