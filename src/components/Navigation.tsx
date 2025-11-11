import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">D</span>
            </div>
            <span className="text-xl">DevCompany</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-slate-600 hover:text-slate-900">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-slate-600 hover:text-slate-900">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("team")} className="text-slate-600 hover:text-slate-900">
              Team
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-slate-600 hover:text-slate-900">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-slate-600 hover:text-slate-900">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left text-slate-600 hover:text-slate-900">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("team")} className="block w-full text-left text-slate-600 hover:text-slate-900">
              Team
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left text-slate-600 hover:text-slate-900">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
