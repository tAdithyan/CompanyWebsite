import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`${
          isScrolled
            ? "fixed backdrop-blur-xl shadow-lg"
            : "absolute bg-transparent"
        } top-0 left-0 right-0 z-50 transition-all duration-500 px-2 sm:px-4 lg:px-6 py-2`}
      >
        {/* INNER WRAPPER */}
        <div
          className={`max-w-7xl mx-auto rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 transition-all duration-500
            ${
              isScrolled
                ? "h-18 sm:h-20 bg-white/90 sm:bg-white/15 md:bg-transparent border border-white/30 md:border-0 shadow-xl md:shadow-none backdrop-blur-md md:backdrop-blur-none"
                : "h-22 sm:h-24 md:h-28 bg-transparent border-0 shadow-none"
            }`}
        >
          {/* MAIN ROW */}
          <div className="flex items-center justify-between h-full">
            {/* LOGO */}
            <div className="flex items-center gap-2 sm:gap-3 group">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/billboard-01-logo-png-transparent.png"
                alt="Logo"
                className={`transition-all duration-500 group-hover:scale-110 ${
                  isScrolled
                    ? "h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18"
                    : "h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24 drop-shadow-lg"
                } w-auto`}
              />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm font-medium">
              {[
                "Home",
                "About",
                "Services",
                "Solutions",
                "Career",
                "Industries",
                "Partners",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`relative group text-lg xl:text-xl transition-all duration-300 hover:text-orange-400 ${
                    item === "Home" ? "font-semibold text-orange-400" : "text-[#111827]"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* CTA - Hidden on small screens, visible on medium+ */}
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition hidden md:block">
                Get In Touch
              </button>

              {/* MOBILE TOGGLE */}
              <button
                className={`lg:hidden p-2 hover:scale-110 transition-all duration-300 z-50 text-2xl ${
                  isScrolled ? "text-black hover:text-orange-400" : "text-black hover:text-orange-400"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 z-40 lg:hidden ${
          isMenuOpen
            ? "bg-opacity-60 backdrop-blur-sm"
            : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className=" p-4 sm:p-6 flex justify-between items-center">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/billboard-01-logo-png-transparent.png"
            alt="Logo"
            className="h-[4rem] sm:h-12 w-auto"
          />
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            ✕
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
          {[
            "Home",
            "About",
            "Services",
            "Solutions",
            "Career",
            "Industries",
            "Partners",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-lg sm:text-xl py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 ${
                item === "Home" ? "font-semibold text-orange-500 bg-orange-50" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          
          {/* Mobile CTA Button */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <button 
              className="w-full px-6 py-3 rounded-full border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Get In Touch
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}