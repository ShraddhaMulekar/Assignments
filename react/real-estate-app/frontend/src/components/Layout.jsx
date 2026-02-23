import React from "react";
import { Home, Info, Mail, Wrench } from "lucide-react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const navLinks = [
    { name: "Home", to: "/", icon: Home },
    { name: "About", to: "/about", icon: Info },
    { name: "Contact", to: "/contact", icon: Mail },
    { name: "Services", to: "/services", icon: Wrench },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-12 px-8 py-4 border-b bg-green-300 text-white backdrop-blur border-slate-300">
        <h2>Summit Realty</h2>
        <nav className="flex items-center gap-20">
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              key={link.name}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800"
                  : "text-slate-600 hover:text-blue-800 hover:cursor-pointer"
              }
            >
                <div className="flex items-center gap-2">
              <link.icon className="size-4" />
              <span className="text-sm font-bold">{link.name}</span>
              </div>
            </NavLink>
          ))}
        </nav>
      </div>

      <main className="flex-1">{children}</main>

      <footer className="bg-slate-900 text-white p-10">
        <h5>summit realty</h5>
        <button>
          FAQ
          <button>Conotact us</button>
        </button>
      </footer>

    </div>
  );
};

export default Layout;
