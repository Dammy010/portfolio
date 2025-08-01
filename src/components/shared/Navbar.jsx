import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">AgeTimeApp</Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/faq" className="hover:text-blue-600">FAQ</Link>
        </div>

        <button
          className="md:hidden focus:outline-none text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-inner">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block py-1 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block py-1 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsOpen(false)}
            className="block py-1 hover:text-blue-600"
          >
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
}
