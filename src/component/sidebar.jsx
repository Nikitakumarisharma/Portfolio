const SideBar = ({selectTab, setselectTab }) => {
  return( 
  <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"   style={{ width: '110px' }}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <div>
      <a href="#" className="d-flex align-items-center text-white text-decoration-none " aria-expanded="false">
      <img src={require('./dp.png')} alt="" width="32" height="32" className="rounded-circle me-2" />
      <strong>Nikita Kumari</strong>
      </a>
    </div>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item" onClick={()=>{setselectTab("Home")}}>
    <a
    href="#home"
    style={{
      textDecoration: selectTab === "Home" ? "underline" : "none"
    }}
  >
    <svg className="bi pe-nosne me-2" width="16" height="16"><use  xlinkHref="#home"></use></svg>
    Home
  </a>

      </li>

      <li onClick={()=>{setselectTab("Eduction")}}>
          <a
            href="#education"
            style={{
              textDecoration: selectTab === "Eduction" ? "underline" : "none"
            }}
            
          >
          <svg className="bi pe-none me-2" width="16" height="30"><use  xlinkHref="#table"></use></svg>
          Education
        </a>
      </li>
      <li onClick={()=>{setselectTab("Skill")}}>
          <a
            href="#skills"
            style={{
              textDecoration: selectTab === "Skill" ? "underline" : "none"
            }}
          >
          <svg className="bi pe-none me-2" width="16" height="30"><use  xlinkHref="#grid"></use></svg>
          Skill
        </a>
      </li>
      <li onClick={()=>{setselectTab("Experience")}}>
          <a
            href="#experience"
            style={{
              textDecoration: selectTab === "Experience" ? "underline" : "none"
            }}
          >
          <svg className="bi pe-none me-2" width="16" height="30"><use  xlinkHref="#people-circle"></use></svg>
          Experience
        </a>
      </li>
      <li onClick={()=>{setselectTab("Project")}}>
          <a
            href="#projects"
            style={{
              textDecoration: selectTab === "Project" ? "underline" : "none"
            }}
          >
          <svg className="bi pe-none me-2" width="16" height="30"><use  xlinkHref="#people-circle"></use></svg>
          Project
        </a>
      </li>
      <li onClick={()=>{setselectTab("Contact Me")}}>
          <a
            href="#contact"
            style={{
              textDecoration: selectTab === "Contact Me" ? "underline" : "none"
            }}
          >
          <svg className="bi pe-none me-2" width="16" height="30"><use  xlinkHref="#people-circle"></use></svg>
          Hire Me
        </a>
      </li>
    </ul>
    <hr/>
   
  </div>
  );
};

export default SideBar;
