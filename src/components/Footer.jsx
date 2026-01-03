import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: "linear-gradient(rgba(255,138,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,138,0,0.1) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
           }} 
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/billboard-01-logo-png-transparent.png"
                alt="Billboard Logo"
                className="h-10 w-auto"
              />
              <h3 className="text-2xl font-bold text-[#111827]">
                Billboard
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Experience the impact of our creative vision and discover how DOOH can elevate your brand presence across cities.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-orange-400 hover:text-white transition-all duration-300 group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-orange-400 hover:text-white transition-all duration-300 group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-orange-400 hover:text-white transition-all duration-300 group">
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-100 hover:bg-orange-400 hover:text-white transition-all duration-300 group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#111827] font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Digital Billboards",
                "Metro Advertising", 
                "Mall Displays",
                "Airport Branding",
                "LED Screens",
                "Transit Advertising"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#111827] font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Our Solutions", 
                "Case Studies",
                "Industries",
                "Partners",
                "Careers"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-orange-400 transition-colors duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#111827] font-semibold text-lg mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm">
                    123 Business District<br />
                    Thrissur, Kerala 680001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-600 hover:text-orange-400 transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400 flex-shrink-0" />
                <a href="mailto:hello@billboard.in" className="text-gray-600 hover:text-orange-400 transition-colors text-sm">
                  hello@billboard.in
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button className="px-6 py-3 rounded-full border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm font-medium">
                Start Your Campaign
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Billboard Advertising. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}