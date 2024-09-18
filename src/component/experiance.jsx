import React from 'react';
import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".experience-item");

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      scrollElements.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("experience-item-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-black text-white">
      
      <section id="experience" className="experience-section pb-4">
      <h2 className="experience text-5xl text-center py-4 mt-8">Experience</h2>

      <div className="experience-item mb-4 bg-teal-500 text-white rounded-2xl lg:mx-4 mx-2 p-4 pb-2">
        <h4 className="text-2xl">Frontend Developer Intern <span className="text-teal-700 text-[15px] ml-2">(May 2024 – July 2024)</span></h4>
        <p className="text-teal-700">Code Alpha</p>
        <ul className="list-disc ml-5">
          <li>Developed web applications with an 80% user satisfaction rate.</li>
          <li>Executed three JavaScript projects, enhancing technical skills.</li>
        </ul>
      </div>

      <div className="experience-item mb-4 bg-teal-500 text-white rounded-2xl lg:mx-4 mx-2 p-4 pb-2">
        <h4 className="text-2xl">Software Development Intern<span className="text-teal-700 text-[15px] ml-2">(July 2023 - August 2023)</span></h4>
        <p className="text-teal-700">Ekta Solution</p>
        <ul className="list-disc ml-5">
          <li>Leading website development with a focus on responsive design.</li>
        </ul>
      </div>

      <div className="experience-item mb-4 bg-teal-500 text-white rounded-2xl lg:mx-4 mx-2 p-4 pb-2">
        <h4 className="text-xl">Open-Source Contributor <span className="text-teal-700 text-[15px] ml-2">(June 2024 - August 2024)</span></h4>
        <p className="text-teal-700">Girl Script Summer of Code (GSSOC)</p>
        <ul className="list-disc ml-5">
          <li>Contributed to open-source software projects, including multiple GitHub repositories.</li>
        </ul>
      </div>
    </section>

      <div className="image-section  lg:p-24 lg:mt-24">
        <img 
          src="https://www.euractiv.fr/wp-content/uploads/sites/3/2022/05/shutterstock_1386061847-800x450.jpg" // Replace with an appropriate image URL
          alt="Experience Background" 
          className="img-fluid rounded" 
        />
      </div>
    </div>
  );
};

export default Experience;
