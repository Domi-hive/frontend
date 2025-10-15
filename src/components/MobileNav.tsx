import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';

interface MobileNavProps {
  navigate: (path: string) => void;
  currentPath: string;
}

export function MobileNav({ navigate, currentPath }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };
  
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="fixed top-[72px] left-0 right-0 bg-[#0D47A1] z-40 lg:hidden animate-slideDown">
            <div className="container mx-auto px-4 py-6 space-y-2">
              <button
                onClick={() => handleNavigate('/')}
                className="w-full text-left px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Property
              </button>
              <button
                onClick={() => handleNavigate('/')}
                className="w-full text-left px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Product
              </button>
              <button
                onClick={() => handleNavigate('/')}
                className="w-full text-left px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigate('/')}
                className="w-full text-left px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate('/agents')}
                className="w-full text-left px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                For Agents
              </button>
              
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => handleNavigate('/dashboard')}
                  className="w-full px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-center"
                >
                  Login
                </button>
                <button
                  className="w-full px-4 py-3 bg-white text-[#1565C0] rounded-lg hover:shadow-lg transition-all text-center"
                  style={{ fontWeight: 500 }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
