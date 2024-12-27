import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: 'about', label: 'About' },
    { href: 'experience', label: 'Experience' },
    { href: 'skills', label: 'Skills' },
    { href: 'project', label: 'Projects' },
    { href: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 p-6 ${isScrolled ? 'bg-white shadow-md ' : 'bg-white'}`}>
      <div className="max-w-2xl md:max-w-6xl mx-auto flex flex-row justify-between items-center px-6">
      <Link
        className="text-2xl font-semibold"
        href="#"
        onClick={handleScrollToTop}
      >
        Felix.
      </Link>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
        )}

        <nav
          ref={navRef}
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-black transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 md:transform-none md:static md:flex md:flex-row md:w-auto md:bg-transparent`}
        >
          <div className="flex flex-col h-full">
            <button
              className="self-end p-4 text-2xl text-white block md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="flex flex-col space-y-6 p-6 md:flex-row md:space-y-0 md:space-x-6 md:p-0 h-full">
              {navLinks.map((link) => (
                <li key={link.href} className="text-center md:text-left text-white md:text-black">
                  <a
                    href={`#${link.href}`}
                    className="font-semibold text-md text-white md:text-black navbar-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="text-center md:text-left text-white md:text-black block md:hidden">
                <Link
                  href="https://docs.google.com/document/d/1GK-hlW9LKLLZci1aUJ8tXcYtb4ATqmaDt4yAZM_od7Y/edit?usp=sharing"
                  className="inline-block px-4 py-2 text-md font-semibold text-white bg-black rounded hover:bg-transparent hover:border-black hover:text-black border-2 border-transparent"
                  onClick={() => setIsMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <FontAwesomeIcon icon={faDownload} className="ml-2" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hidden md:block">
          <Link
            href="https://docs.google.com/document/d/1GK-hlW9LKLLZci1aUJ8tXcYtb4ATqmaDt4yAZM_od7Y/edit?usp=sharing"
            className="inline-block px-4 py-2 text-md font-semibold text-white bg-black rounded hover:bg-transparent hover:border-black hover:text-black border-2 border-transparent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}