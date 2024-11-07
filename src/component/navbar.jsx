import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img 
          src={require('./dp.png')}
          alt="Profile"
          width="52"
          height="52"
          className="rounded-full lg:ml-24"
        />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:text-white font-bold">Home</a>
          <a href="#education" className="hover:text-white font-bold">Education</a>
          <a href="#skill" className="hover:text-white font-bold">Skill</a>
          <a href="#experience" className="hover:text-white font-bold">Experience</a>
          <a href="#project" className="hover:text-white font-bold">Project</a>
          <a href="#contact" className="hover:text-white font-bold pr-24">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-4 text-white`}>
        <a href="#home" className="block hover:text-white font-bold">Home</a>
        <a href="#education" className="block hover:text-white font-bold">Education</a>
        <a href="#contact" className="block hover:text-white font-bold">Contact</a>
        <a href="#skill" className="block hover:text-white font-bold">Skill</a>
        <a href="#experience" className="block hover:text-white font-bold">Experience</a>
        <a href="#project" className="block hover:text-white font-bold">Project</a>
      </div>
    </nav>
  );
};

export default Navbar;
