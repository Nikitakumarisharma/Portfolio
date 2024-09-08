import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";


const Projects = () => {
  return (
    <section id="projects" className="projects-section p-4 bg-black text-white">
      <h2 className="text-5xl text-center mb-6">Projects</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        
        <div className="project-item bg-black text-white rounded-2xl m-1 p-4 pb-2">
          <img 
            src="https://via.placeholder.com/400x250" 
            alt="Project One"
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="text-2xl mt-2">Project One</h4>
          <p className="mt-2">
            This is a brief description of Project One. It includes the key features and technology used.
          </p>
          <a 
            href="https://projectone.example.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 inline-block text-3xl"
          >
<FaRegPlayCircle />
</a>
        </div>

        <div className="project-item bg-black text-white rounded-2xl m-1 p-4 pb-2">
          <img 
            src="https://via.placeholder.com/400x250" 
            alt="Project Two"
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="text-2xl mt-2">Project Two</h4>
          <p className="mt-2">
            This is a brief description of Project Two. It includes the key features and technology used.
          </p>
          <a 
            href="https://projecttwo.example.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 inline-block text-2xl"
            >
  <FaRegPlayCircle />
          </a>
        </div>

        <div className="project-item bg-black text-white rounded-2xl m-1 p-4 pb-2">
          <img 
            src="https://via.placeholder.com/400x250" 
            alt="Project Three"
            className="w-full h-40 object-cover rounded"
          />
          <h4 className="text-2xl mt-2">Project Three</h4>
          <p className="mt-2">
            This is a brief description of Project Three. It includes the key features and technology used.
          </p>
          <a 
            href="https://projectthree.example.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-400 inline-block text-2xl"
            >
  <FaRegPlayCircle />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
