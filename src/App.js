import './App.css';
import {Routes,Route} from "react-router-dom";
import LandingPage from "./My_componentes/LandingPage";
// import Resume2 from './My_componentes/Resume2'
import PersonalInfo from './My_componentes/PersonalInfo';
import SideBar from './My_componentes/SideBar';
import Herder from './My_componentes/Herder';
import ResumeBuild from './My_componentes/ResumeBuild';



function App() {
  return (
    <div >
      <div>
        <Herder/>
      </div>
      {/* <div>
        <PersonalInfo/>
      </div> */}
   
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/resumebuild" element={<ResumeBuild/>}/>
        <Route exact path="/resumebuild/sidebar" element={<SideBar/>}/>
        <Route exact path="/resumebuild/personalinfo" element={<PersonalInfo/>}/>
      </Routes>
     


    </div>
  );
}

export default App;





//  {/* <Routes>
//       <Route
//             exact
//             path="/Resume"
//             element={
              
//             }
//             />
//       </Routes> */}
//             {/* <Resume2/> */}
//    {/* <LandingPage/> */}
//    {/* <ResumeBuilder/> */}
