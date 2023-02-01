import React from 'react'
import PersonalInfo from './PersonalInfo'
import SideBar from './SideBar'
// import ResumeBuild from './ResumeBuild';
// import SideBar from './SideBar';
// import PersonalInfo from './PersonalInfo';
import { Routes,Route} from "react-router-dom";  
function ResumeBuild() {
  return (
    <div>
        <SideBar/>
        <PersonalInfo/>
       <Routes>
       <Route exact path="/resumebuild" element={<ResumeBuild/>}/>
        <Route exact path="/resumebuild/sidebar" element={<SideBar/>}/>
        <Route exact path="/resumebuild/personalinfo" element={<PersonalInfo/>}/>
        </Routes>
        {/* <PersonalInfo/> */}
    </div>
  )
}

export default ResumeBuild