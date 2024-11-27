import React, { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import musicSchool from "../asset/music.png"
import blog from "../asset/blog.png"

const ProjectList = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Ekta Solutions website",
      description:
        "Created an ecosystem where every startup gets legal and financial support from the very scratch.",
      tech: "HTML, CSS, JavaScript, React JS, Tailwind CSS, Next JS",
      imgSrc:
        "https://th.bing.com/th/id/OIP.qNwnxdVwDlm4tIiwaC6uzAHaEc?w=258&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7/400x250",
      link: "https://www.ektasolutions.in/",
    },
    {
      title: "Music School",
      description:
        "showcases my frontend development skills, focusing on functionality, performance, and seamless integration of features.",
      tech: "React JS, next Js, Tailwind CSS",
      imgSrc: musicSchool,
      link: "https://music-school-nikita.vercel.app/",
    },
    {
      title: "Todo-List",
      description:
        "Created a task management app with CRUD functionalities, improving task management for users.",
      tech: "HTML, CSS, JavaScript, React JS",
      imgSrc:
        "https://th.bing.com/th/id/OIP.6Ie9ureggQGy_2hRCmh-DAHaG-?w=196&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7/400x250",
      link: "https://todo-list-snowy-zeta.vercel.app/",
    },
    {
      title: "Random Quote Generator",
      description:
        "Developed a quote display app pulling quotes dynamically via API, improving user interaction through a responsive design.",
      tech: "CSS, HTML, JavaScript, Fetch API",
      imgSrc:
        "https://th.bing.com/th/id/OIP.jwvellTnQz3QudY7qrqODAHaD4?w=326&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7/400x250",
      link: "https://nikitakumarisharma.github.io/Random_quote/",
    },
    {
      title: "Blog Website",
      description:
        "Explore the hottest trending topics shaping conversations worldwide",
      tech: "HTML, CSS, JavaScript",
      imgSrc: blog,
      link: "https://nikitakumarisharma.github.io/CodeAlpha_BlogWebsite/#",
    },
   
  ];

  const handleToggle = () => setShowMore(!showMore);

  return (
    <div className="project-container p-4 bg-black">
      <h2 className="text-5xl text-center mb-6 text-white">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Show 3 projects by default or all projects when 'showMore' is true */}
        {projects
          .slice(0, showMore ? projects.length : 3)
          .map((project, index) => (
            <div
              key={index}
              className="project-card border p-4 rounded shadow-md text-white"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-bold mt-2">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
              <p className="text-xs text-white mt-1">
                <strong>Tech:</strong> {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 text-3xl mt-2 block"
              >
                <FaRegPlayCircle />
              </a>
            </div>
          ))}
      </div>

      {/* View More / Close Button */}
      <button
        onClick={handleToggle}
        className="mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-800 mx-auto block"
      >
        {showMore ? "Close" : "View More"}
      </button>
    </div>
  );
};

export default ProjectList;
