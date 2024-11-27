import React from 'react';

const Home = () => {
  return (
    <section id="home" className="home-section flex flex-col justify-center items-center p-5 text-center bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
      <h1 className="lg:text-3xl md:text-xl text-[15px] font-bold typing-effect">
      Hi, I'm <span className="text-teal-400 ">Nikita Kumari</span>
    </h1>


        <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
          A passionate Frontend Developer with expertise in creating dynamic, responsive, and user-friendly websites.
          I specialize in building modern web applications using technologies like React, Tailwind CSS, and Bootstrap.
          My goal is to deliver seamless user experiences through intuitive design and efficient code.
          Whether it's transforming a design into a functional website or optimizing an existing project for performance,
          I bring creativity and precision to every line of code. Let's connect and create something amazing together!
        </p>
        <div className="contact-links mt-5 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:niku2003kumari@gmail.com" className="btn btn-primary py-2 px-4 rounded-md text-white bg-blue-500 hover:bg-blue-900 transition">Email Me</a>
          <a href="https://www.linkedin.com/in/nikita-kumari-312495234/" className="btn btn-secondary py-2 px-4 rounded-md text-white bg-gray-500 hover:bg-gray-900 transition">LinkedIn</a>
          <a href="https://github.com/Nikitakumarisharma/" className="btn btn-outline-light py-2 px-4 rounded-md border border-gray-300 text-gray-300 hover:bg-gray-700 transition">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
