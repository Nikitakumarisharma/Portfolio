import React from 'react'
import { useState } from 'react';
import NavBar from './component/navbar'
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
      <NavBar selectTab={selectedTab} setselectTab={setSelectedTab}></NavBar>
      <Home></Home>
      <Eduction></Eduction>
      <Skill></Skill>
      <Experience></Experience>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  )
}

export default App