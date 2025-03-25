
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavDropdownItem {
  title: string;
  path: string;
}

interface NavDropdownSection {
  title: string;
  items: NavDropdownItem[];
}

interface NavDropdownProps {
  label: string;
  sections: NavDropdownSection[];
  isActive?: boolean;
}

const NavDropdown = ({ label, sections, isActive }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={cn(
          'nav-link inline-flex items-center gap-1 transition-colors',
          isActive ? 'nav-link-active' : ''
        )}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-md shadow-lg p-6 z-50 grid grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-sm text-slate-600 hover:text-blue-600 block py-1 transition-colors"
                      onClick={closeDropdown}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
