
const SideBar = ({selectTab, setselectTab }) => {
  return( 
  <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"   style={{ width: '180px' }}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <div>
      <a href="#" className="d-flex align-items-center text-white text-decoration-none " aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Nikita Kumari</strong>
      </a>
    </div>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item" onClick={()=>{setselectTab("Home")}}>
          <a
            href="#home"
            className={`nav-link text-white ${
              selectTab === "Home" && "active"
            }`}
            aria-current="page"
          >

          <svg className="bi pe-none me-2" width="16" height="16"><use  xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>

      <li onClick={()=>{setselectTab("Eduction")}}>
          <a
            href="#education"
            className={`nav-link text-white ${
              selectTab === "Eduction" && "active"
            }`}
          >
          <svg className="bi pe-none me-2" width="16" height="16"><use  xlinkHref="#table"></use></svg>
          Education
        </a>
      </li>
      <li onClick={()=>{setselectTab("Skill")}}>
          <a
            href="#skills"
            className={`nav-link text-white ${
              selectTab === "Skill" && "active"
            }`}
          >
          <svg className="bi pe-none me-2" width="16" height="16"><use  xlinkHref="#grid"></use></svg>
          Skill
        </a>
      </li>
      <li onClick={()=>{setselectTab("Experience")}}>
          <a
            href="#experience"
            className={`nav-link text-white ${
              selectTab === "Experience" && "active"
            }`}
          >
          <svg className="bi pe-none me-2" width="16" height="16"><use  xlinkHref="#people-circle"></use></svg>
          Experience
        </a>
      </li>
      <li onClick={()=>{setselectTab("Project")}}>
          <a
            href="#projects"
            className={`nav-link text-white ${
              selectTab === "Project" && "active"
            }`}
          >
          <svg className="bi pe-none me-2" width="16" height="16"><use  xlinkHref="#people-circle"></use></svg>
          Project
        </a>
      </li>
      <li onClick={()=>{setselectTab("Contact Me")}}>
          <a
            href="#contact"
            className={`nav-link text-white ${
              selectTab === "Contact Me" && "active"
            }`}
          >
          <svg className="bi pe-none me-2" width="16" height="16"><use  xlinkHref="#people-circle"></use></svg>
          Contact Me
        </a>
      </li>
    </ul>
    <hr/>
   
  </div>
  );
};

export default SideBar;
