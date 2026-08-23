import React from "react";
import {
   Mail,
   MapPin,
   Phone,
   ArrowRight,
} from "lucide-react";
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router";

const Footer = () => {
    const socialIcons =[
        { icon: (<SocialIcon url="https://www.facebook.com/" style={{ height: 38, width: 38 }}/>), label: "Facebook" },
        { icon: (<SocialIcon url="https://www.instagram.com/" style={{ height: 38, width: 38 }}/>), label: "Instagram" },            
        { icon: (<SocialIcon url="https://x.com/" style={{ height: 38, width: 38 }}/>), label: "Twitter" },
        { icon: (<SocialIcon url="https://www.linkedin.com/" style={{ height: 38, width: 38 }}/>), label: "LinkedIn" },
    ]

  return (
    <footer className="text-[#0F172A] bg-[#E2E8F090]">
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="text-2xl mb-5 font-bold font-montserrat tracking-tight text-[#00008B]">MediAid</div>
            <p className="text-sm leading-6 max-w-sm text-[#94A3B8]">
              Connecting people with medical camps and healthcare
              opportunities to build healthier and stronger communities.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialIcons.map(({icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="rounded-full flex items-center justify-center
                  transition-all duration-300 hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm transition-colors duration-200  text-[#94A3B8]">
                <li className="hover:text-[#00008B]"><Link to='/'>Home</Link></li>
                <li className="hover:text-[#00008B]"><Link t0='/allCamps'>Medical Camps</Link></li>
                <li className="hover:text-[#00008B]"><Link>About Us</Link></li>
                <li className="hover:text-[#00008B]"><Link>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5">
              Medical Camps
            </h3>

            <ul className="space-y-3">
              {[
                "Browse Camps",
                "Popular Camps",
                "Upcoming Camps",
                "Create a Camp",
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-[#00008B] text-[#94A3B8]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-5">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#0D9488]"
                />
                <p className="text-sm leading-5 text-[#94A3B8]">
                  Chattogram, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-[#0D9488]"
                />
                <a
                  href="mailto:armanalam2410@gmail.com"
                  className="text-sm text-[#94A3B8] hover:text-[#0D9488] transition-colors"
                >
                  hello@mediaid.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-[#0D9488]"
                />
                <a
                  href=""
                  className="text-sm text-[#94A3B8] hover:text-[#0D9488] transition-colors"
                >
                  +880 XXXXXXXXXX
                </a>
              </div>
            </div>

            <Link to='/allCamps'>
                <button className="bg-[#16A34A] mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5">
              Join a Medical Camp
                <ArrowRight size={16} />
                </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "#1E293B60" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#64748B]">
              © {new Date().getFullYear()} MediAid. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <p className="text-xs transition-colors hover:text-[#00008B] text-[#64748B]">Privacy Policy</p>
              <p className="text-xs text-[#64748B] transition-colors hover:text-[#00008B]">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;