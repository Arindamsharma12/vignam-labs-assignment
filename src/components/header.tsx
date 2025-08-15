import { MapPin, Star } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-serif">Forge</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Canada, Montreal</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Manufacture
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Tool library
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-2 text-sm">
              <span>Eng</span>
              <span>/</span>
              <span>Fra</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
