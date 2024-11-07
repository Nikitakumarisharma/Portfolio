import { useState } from 'react';

const NavBar = ({ selectTab, setselectTab }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile navbar

  return (
    <div className="bg-black p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Profile and Brand */}
        <a href="/" className="flex items-center text-white">
          <img
            src={require('./dp.png')}
            alt="Profile"
            width="52"
            height="52"
            className="rounded-full"
          />
        </a>

        {/* Hamburger Button for Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)} // Toggle the mobile navbar visibility
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Links for Large Screens (Horizontal Navbar) */}
        <ul
          className={`hidden lg:flex lg:space-x-6 font-bold text-white`}
        >
          <li onClick={() => setselectTab("Home")}>
            <a
              href="#home"
              className={`text-white ${selectTab === "Home" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Home
            </a>
          </li>
          <li onClick={() => setselectTab("Education")}>
            <a
              href="#education"
              className={`text-white ${selectTab === "Education" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Education
            </a>
          </li>
          <li onClick={() => setselectTab("Skill")}>
            <a
              href="#skills"
              className={`text-white ${selectTab === "Skill" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Skill
            </a>
          </li>
          <li onClick={() => setselectTab("Experience")}>
            <a
              href="#experience"
              className={`text-white ${selectTab === "Experience" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Experience
            </a>
          </li>
          <li onClick={() => setselectTab("Project")}>
            <a
              href="#projects"
              className={`text-white ${selectTab === "Project" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Project
            </a>
          </li>
          <li onClick={() => setselectTab("Contact Me")}>
            <a
              href="#contact"
              className={`text-white ${selectTab === "Contact Me" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile View Navigation Links (Sidebar when Hamburger is clicked) */}
        <ul
          className={`lg:hidden ${isOpen ? 'flex flex-col absolute top-0 left-0 w-full bg-black p-4' : 'hidden'}`}
        >
          <li onClick={() => setselectTab("Home")}>
            <a
              href="#home"
            >
              Home
            </a>
          </li>
          <li onClick={() => setselectTab("Education")}>
            <a
              href="#education"
            >
              Education
            </a>
          </li>
          <li onClick={() => setselectTab("Skill")}>
            <a
              href="#skills"
              className={`text-white ${selectTab === "Skill" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Skill
            </a>
          </li>
          <li onClick={() => setselectTab("Experience")}>
            <a
              href="#experience"
              className={`text-white ${selectTab === "Experience" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Experience
            </a>
          </li>
          <li onClick={() => setselectTab("Project")}>
            <a
              href="#projects"
              className={`text-white ${selectTab === "Project" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Project
            </a>
          </li>
          <li onClick={() => setselectTab("Contact Me")}>
            <a
              href="#contact"
              className={`text-white ${selectTab === "Contact Me" ? "text-blue-500" : ""} hover:text-blue-600`}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
