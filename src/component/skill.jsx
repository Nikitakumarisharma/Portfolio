import React from 'react';

const Skill = () => {
  return (
    <section id="skills" className="p-4 bg-black text-white">
      <h2 className="text-5xl mb-6 text-center text-teal-400 mt-24">Skills</h2>
      
      <div className="skills-category mb-6 ">
        <h3 className="text-2xl text-teal-400 mb-3">Programming Languages</h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">C++</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Data Structure and Algorithms with C++</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Object-Oriented Programming</h4>
          </div>
        </div>
      </div>

      <div className="skills-category mb-6">
        <h3 className="text-2xl text-teal-400 mb-3">Web Development</h3>
        <div className="grid lg:grid-cols-10 grid-cols-2 gap-4">
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">HTML</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">CSS</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl ">Java Script</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">React JS</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Redux</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="lg:text-[15px] text-[15px]">Bootstrap</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="lg:text-xl text-[15px]">Tailwind CSS</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">SQL</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Php</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Node JS</h4>
          </div>
        </div>
      </div>

      <div className="skills-category mb-6">
        <h3 className="text-2xl text-teal-400 mb-3">Tools</h3>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Git & GitHub</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Linux</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">VS Code</h4>
          </div>
          <div className="skill-item bg-black text-white rounded p-4 text-center">
            <h4 className="text-xl">Vercel</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
