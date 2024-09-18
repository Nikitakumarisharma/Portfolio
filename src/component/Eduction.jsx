import { useEffect } from "react";
const Eduction = () => {
    useEffect(() => {
      const scrollElements = document.querySelectorAll(".education-item");
  
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
            el.classList.add("education-item-visible");
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-black text-white">
       <div className="image-section mb-4 mt-24">
        <img 
          src="https://c.mql5.com/2/50/Recipes_Services_1200x628.jpg" 
          alt="Education Background" 
          className="img-fluid rounded" 
        />
      </div>


      <section id="education" className="education-section pb-4">
      <h2 className="eduction text-5xl mt-16">Education</h2>

      <div className="education-item mb-4 bg-teal-500 text-white rounded-2xl mt-1 mx-8 p-4 pb-2">
        <span className="text-teal-700 text-xl">
          2021-2025 <button className="bg-white p-1 ml-2 rounded-2xl">Present</button>
        </span>
        <h4>B.tech (Computer Science)</h4>
        <p>Guru Jambheshwar University Of Science And Technology</p>
      </div>

      <div className="education-item mb-4 bg-teal-500 text-white rounded-2xl mt-1 mx-8 p-4 pb-2">
        <span className="text-teal-700 text-xl">2020</span>
        <h4>Higher Secondary</h4>
        <p>Kishori Sinha Mahila College</p>
      </div>

      <div className="education-item mb-4 bg-teal-500 text-white rounded-2xl mt-1 mx-8 p-4 pb-2">
        <span className="text-teal-700 text-xl">2018</span>
        <h4>Schooing</h4>
        <p>High School Basdiha Kala</p>
      </div>
    </section>

    </div>
  );
};
export default Eduction;
