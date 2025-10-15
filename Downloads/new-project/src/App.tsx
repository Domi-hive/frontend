import { HomePage } from './pages/HomePage';
import { AgentsPage } from './pages/AgentsPage';
import { DashboardPage } from './pages/DashboardPage';
import { MessagesPage } from './pages/MessagesPage';
import { RequestsPage } from './pages/RequestsPage';
import { MobileNav } from './components/MobileNav';
import { Home } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  // Client-side routing state
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Client-side navigation function
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Dashboard routes don't need the main navigation
  if (currentPath === '/dashboard') {
    return <DashboardPage />;
  }
  
  if (currentPath === '/dashboard/messages') {
    return <MessagesPage />;
  }
  
  if (currentPath === '/dashboard/requests') {
    return <RequestsPage />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation - Fixed across all pages */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D47A1]/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-[#90CAF9] to-[#1565C0] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-base md:text-lg text-white" style={{ fontWeight: 600 }}>DomiHive</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <button onClick={() => navigate('/')} className="text-blue-100 hover:text-white transition-colors duration-300">Property</button>
            <button onClick={() => navigate('/')} className="text-blue-100 hover:text-white transition-colors duration-300">Product</button>
            <button onClick={() => navigate('/')} className="text-blue-100 hover:text-white transition-colors duration-300">Services</button>
            <button onClick={() => navigate('/')} className="text-blue-100 hover:text-white transition-colors duration-300">About Us</button>
            <button onClick={() => navigate('/agents')} className="text-blue-100 hover:text-white transition-colors duration-300">For Agents</button>
          </div>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-blue-100 text-sm hover:text-white transition-colors duration-300"
            >
              Login
            </button>
            <button 
              className="bg-white text-[#1565C0] px-5 py-2 rounded-lg text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300" 
              style={{ fontWeight: 500 }}
            >
              Sign Up
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <MobileNav navigate={navigate} currentPath={currentPath} />
        </div>
      </nav>

      {/* Route-based page rendering */}
      {currentPath === '/agents' ? <AgentsPage /> : <HomePage />}
    </div>
  );
}
