import { Home, Info, Mail, Wrench, Menu, X } from "lucide-react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import ChatWidget from "./ChatWidget";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", Icon: Home },
    { to: "/about", label: "About", Icon: Info },
    { to: "/contact", label: "Contact", Icon: Mail },
    { to: "/services", label: "Services", Icon: Wrench },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-10 flex items-center gap-12 justify-between">
        <nav className="bg-gradient-to-r from-green-950 via-green-900 to-green-800 w-full text-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo / Brand */}
            <div className="text-2xl font-bold tracking-wide">
              Summit Realty
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 transition-colors duration-300 ${
                      isActive
                        ? "text-red-400"
                        : "text-white hover:text-red-400"
                    }`
                  }
                >
                  {Icon && <Icon size={18} />}
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-green-950 px-6 pb-4 space-y-4">
              {navLinks.map(({ to, label, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 transition-colors duration-300 ${
                      isActive
                        ? "text-red-400"
                        : "text-white hover:text-red-400"
                    }`
                  }
                >
                  {Icon && <Icon size={18} />}
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>
      <ChatWidget />

      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Summit Realty
              </h2>
              <p className="text-sm text-gray-400 leading-6">
                Delivering premium real estate solutions with trust,
                transparency, and excellence. Your journey to finding the
                perfect property starts here.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h3>
              <p className="text-sm text-gray-400">
                Email: info@summitrealty.com
              </p>
              <p className="text-sm text-gray-400">Phone: +1 (123) 456-7890</p>
              <p className="text-sm text-gray-400">
                123 Summit Avenue, Business District
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Summit Realty. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
