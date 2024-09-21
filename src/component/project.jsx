import React, { useEffect } from 'react';
import { FaRegPlayCircle } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    const projectItems = document.querySelectorAll(".project-item");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-item-visible");
        } else {
          entry.target.classList.remove("project-item-visible");
        }
      });
    }, observerOptions);

    projectItems.forEach(item => observer.observe(item));

    return () => projectItems.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <section id="projects" className="projects-section p-4 bg-black text-white">
      <h2 className="text-5xl text-center mb-6">Projects</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        
        <div className="project-item bg-black text-white rounded-2xl m-1 p-4 pb-2">
          <img 
            src="https://th.bing.com/th/id/OIP.qNwnxdVwDlm4tIiwaC6uzAHaEc?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7/400x250" 
            alt="Project One"
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="text-2xl mt-2">Ekta Solutions website</h4>
          <p className="mt-2">
            Created an ecosystem where every startup gets legal and financial support from the very scratch.
            <br /> 
            • Technologies Used: HTML, CSS, JavaScript, React JS, Tailwind CSS, Next JS.
          </p>
          <a 
            href="https://www.ektasolutions.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 inline-block text-3xl"
          >
            <FaRegPlayCircle />
          </a>
        </div>

        <div className="project-item bg-black text-white rounded-2xl m-1 p-4 pb-2">
          <img 
            src="https://th.bing.com/th/id/OIP.6Ie9ureggQGy_2hRCmh-DAHaG-?w=196&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7/400x250" 
            alt="Project Two"
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="text-2xl mt-2">Todo-List</h4>
          <p className="mt-2">
            Created a task management app with CRUD functionalities, improving task management for users 
            <br />
            • Technologies: HTML, CSS, JavaScript, React JS
          </p>
          <a 
            href="https://todo-list-snowy-zeta.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 inline-block text-3xl"
          >
            <FaRegPlayCircle />
          </a>
        </div>

        <div className="project-item bg-black text-white rounded-2xl m-1 p-4 pb-2">
          <img 
            src="https://th.bing.com/th/id/OIP.jwvellTnQz3QudY7qrqODAHaD4?w=326&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7/400x250" 
            alt="Project Three"
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="text-2xl mt-2">Random Quote Generator</h4>
          <p className="mt-2">
            Developed a quote display app pulling quotes dynamically via API, improving user interaction through a responsive design. 
            <br />
            • Technologies: CSS, HTML, JavaScript, Fetch API
          </p>
          <a 
            href="https://nikitakumarisharma.github.io/Random_quote/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 inline-block text-3xl"
          >
            <FaRegPlayCircle />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
