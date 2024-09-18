import React from 'react'
import { useState } from 'react';
import SideBar from './component/sidebar'
import Home from './component/Home'
import Eduction from './component/Eduction';
import Skill from './component/skill';
import Experience from './component/experiance';
import Projects from './component/project';
import ContactMe from './component/contact';

const App = () => {
  const [selectedTab,setSelectedTab] = useState("Home");

  return (
  <div className="app_container">
    <div >
    <SideBar selectTab={selectedTab} setselectTab={setSelectedTab}></SideBar>
    </div>
    <main>
    <div>
      <Home></Home>
      <Eduction></Eduction>
      <Skill></Skill>
      <Experience></Experience>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
    </main>
    </div>
  )
}

export default App