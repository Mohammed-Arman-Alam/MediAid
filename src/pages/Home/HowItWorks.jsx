import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Search,
  FileText,
  CalendarCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore upcoming medical camps and find the right one based on your location and needs.",
    icon: Search,
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    number: "02",
    title: "View Details",
    description:
      "Check camp details, services, date, location, organizer information, and available facilities.",
    icon: FileText,
    color: "#0D9488",
    bg: "#F0FDFA",
  },
  {
    number: "03",
    title: "Join",
    description:
      "Register for your chosen medical camp and secure your spot with just a few simple steps.",
    icon: CalendarCheck,
    color: "#16A34A",
    bg: "#F0FDF4",
  },
  {
    number: "04",
    title: "Make a Difference",
    description:
      "Attend the camp, connect with healthcare initiatives, and contribute to a healthier community.",
    icon: HeartHandshake,
    color: "#2563EB",
    bg: "#EFF6FF",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <section className="py-17 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins tracking-tight text-[#0F172A]">How MediAid Works</h2>
          <p className="mt-2 text-base md:text-lg leading-relaxed text-[#64748B]">
            Finding and joining a medical camp is simple. Follow these four steps and take the first step toward better healthcare.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-17 left-[12%] right-[12%] h-0.5"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
                {steps.map((step, index) => {
                const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className="group relative h-full bg-white rounded-2xl p-7 border border-slate-100
                    transition-all duration-300 hover:-translate-y-2
                    hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-sm font-bold rounded-2xl p-1"
                        style={{ color: step.color ,background: `color-mix(in srgb, ${step.color} 20%, transparent)`}}
                      >
                        {step.number}
                      </span>
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: step.bg,
                        color: step.color,
                      }}
                    >
                      <Icon size={27} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#0F172A]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#64748B]">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div
                        className="hidden lg:flex absolute -right-5 top-14.5 z-10
                        w-10 h-10 rounded-full items-center justify-center
                        border-4 border-[#F8FAFC] bg-white"
                        style={{ color: step.color }}
                      >
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="mt-14 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-sm text-[#64748B]">
            Ready to find a medical camp near you?
          </p>
          <Link to='/allCamps'>
            <button
            className="mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#16A34A]">
            Explore Medical Camps <ArrowRight size={17} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;