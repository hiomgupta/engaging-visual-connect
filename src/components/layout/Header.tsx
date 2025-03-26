
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import NavDropdown from './NavDropdown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const productsDropdownSections = [
    {
      title: "PLATFORM",
      items: [
        { title: "Platform Overview", path: "/products-features/platform" },
        { title: "Content Center", path: "/products-features/content-center" },
      ]
    },
    {
      title: "CREATE",
      items: [
        { title: "XPRESSO - Effortless Video Creation", path: "/products-features/xpresso" },
        { title: "KOEL - AI Voice Personalization", path: "/products-features/koel" },
      ]
    },
    {
      title: "ENGAGE",
      items: [
        { title: "PLAY - Interactive Experiences", path: "/products-features/play" },
        { title: "FAB - Social Video Boosters", path: "/products-features/fab" },
      ]
    },
    {
      title: "ANALYZE",
      items: [
        { title: "TUBE - Hosting & Analytics", path: "/products-features/tube" },
      ]
    }
  ];

  const resourcesDropdownSections = [
    {
      title: "ABOUT KPOINT",
      items: [
        { title: "KPoint Mission", path: "/resources/mission" },
        { title: "About Us", path: "/resources/about" },
        { title: "Join Our Team", path: "/resources/careers" },
      ]
    },
    {
      title: "CASE STUDIES",
      items: [
        { title: "30% Reduction in Ticket Resolution", path: "/resources/casestudy/30-percent-reduction" },
        { title: "50% Increase in Accessibility", path: "/resources/casestudy/50-percent-increase" },
        { title: "93 Days Saved", path: "/resources/casestudy/93-days-saved" },
        { title: "40% Fewer Support Calls", path: "/resources/casestudy/40-less-support" },
      ]
    },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled || isMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <h1 className="text-2xl font-bold text-slate-900">
            K<span className="text-blue-600">Point</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavDropdown 
            label="Products & Features" 
            sections={productsDropdownSections}
            isActive={isActive('/products-features')}
          />
          <Link
            to="/pricing"
            className={cn(
              'nav-link transition-colors',
              isActive('/pricing') ? 'nav-link-active' : ''
            )}
          >
            Pricing
          </Link>
          <NavDropdown 
            label="Resources" 
            sections={resourcesDropdownSections}
            isActive={isActive('/resources')}
          />
        </nav>

        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center">
          <Button href="/demo" size="sm">
            Get a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center z-20 text-slate-900"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white flex flex-col p-6 transition-transform duration-300 ease-in-out z-10 md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="mt-16 flex flex-col space-y-8 items-center">
            <div className="w-full">
              <h3 className="text-lg font-medium mb-2 text-slate-900">Products & Features</h3>
              <div className="space-y-2">
                <Link to="/products-features/platform" className="block text-sm text-slate-700 py-1 mt-4">Platform Overview</Link>
                <Link to="/products-features/content-center" className="block text-sm text-slate-700 py-1">Content Center</Link>
                
                <h4 className="text-sm font-medium text-slate-700 mt-4">CREATE</h4>
                <Link to="/products-features/xpresso" className="block text-sm text-slate-600 py-1">XPRESSO - Video Creation</Link>
                <Link to="/products-features/koel" className="block text-sm text-slate-600 py-1">KOEL - AI Voice</Link>
                
                <h4 className="text-sm font-medium text-slate-700 mt-4">ENGAGE</h4>
                <Link to="/products-features/play" className="block text-sm text-slate-600 py-1">PLAY - Interactive Videos</Link>
                <Link to="/products-features/fab" className="block text-sm text-slate-600 py-1">FAB - Social Videos</Link>
                
                <h4 className="text-sm font-medium text-slate-700 mt-4">ANALYZE</h4>
                <Link to="/products-features/tube" className="block text-sm text-slate-600 py-1">TUBE - Analytics</Link>
              </div>
            </div>
            
            <Link
              to="/pricing"
              className="text-xl font-medium text-slate-800"
            >
              Pricing
            </Link>
            
            <div className="w-full">
              <h3 className="text-lg font-medium mb-2 text-slate-900">Resources</h3>
              <div className="space-y-2">
                <Link to="/resources/mission" className="block text-sm text-slate-600 py-1">KPoint Mission</Link>
                <Link to="/resources/about" className="block text-sm text-slate-600 py-1">About Us</Link>
                <Link to="/resources/careers" className="block text-sm text-slate-600 py-1">Join Our Team</Link>
                <Link to="/resources/case-studies" className="block text-sm text-slate-600 py-1">Case Studies</Link>
              </div>
            </div>
            
            <div className="pt-6 w-full">
              <Button href="/demo" className="w-full">
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
