
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

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

  const navLinks = [
    { name: 'Products & Features', path: '/products-features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'nav-link transition-colors',
                isActive(link.path) ? 'nav-link-active' : ''
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button href="/login" variant="outline" size="sm">
            Login
          </Button>
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-xl font-medium',
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-800'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 w-full space-y-4">
              <Button href="/login" variant="outline" className="w-full">
                Login
              </Button>
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
