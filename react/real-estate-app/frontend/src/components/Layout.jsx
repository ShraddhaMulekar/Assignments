import React from 'react'
import { Home, Icon, Info, Mail, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout = () => {
    const navLinks = [
        { name: 'Home', to: '/', icon: Home },
        { name: 'About', to: '/about', icon: Info },
        { name: 'Contact', to: '/contact', icon: Mail },
        { name: 'Services', to: '/services', icon: Wrench },
    ];
  return (
    <div>
        <nav>
            {navLinks.map(link => (
                <Link to={link.to} key={link.name} className="nav-link">
                    <link.icon className="nav-icon" />
                    {link.name}
                </Link>
            ))}
        </nav>
    </div>
  )
}

export default Layout