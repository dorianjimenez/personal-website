import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Main from './pages/Main';
import TopBar from './components/TopBar';
import Resume from './components/Resume';
import SubTitle from './components/SubTitle';
import Wave from './components/Wave';
import SkillSet from './components/SkillSet';
import Contact from './components/Contact';
import ProjectList from './components/ProjectList';
import SmallTopBar from './components/SmallTopBar';


function App() {

  const isSmallScreen = useMediaQuery({ maxWidth: 1024 });

  return (
    <div>

      {isSmallScreen ? (
        <SmallTopBar />
      ) : (
        <TopBar />
      )}


      <div className="w-full h-5/6 mt-[10%] mb-[3%] pt-2 sm:pt-0">
        <div className="h-1/6 -mt-16"></div>
        <Main />
      </div>


      <Wave inverted={false} isSmallScreen={isSmallScreen} />


      <div className="w-full bg-gray-100 py-10 ">
        {!isSmallScreen && <div className="h-10"></div>}
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Resume (last updated 9/9/2023)</SubTitle>
          <Resume isSmallScreen={isSmallScreen} />
        </div>
      </div>

      <Wave inverted={true} isSmallScreen={isSmallScreen} />

      <div className="w-full py-10 -mb-10">
        {!isSmallScreen && <div className="h-10"></div>}
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Skill Set</SubTitle>
          <SkillSet />
        </div>
      </div>

      <Wave inverted={false} isSmallScreen={isSmallScreen} />


      <div className="w-full bg-gray-100 py-10 ">
        {!isSmallScreen && <div className="h-10"></div>}
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Projects</SubTitle>
          <ProjectList />
        </div>
      </div>

      <Wave inverted={true} isSmallScreen={isSmallScreen} />


      <div className="w-full py-10 ">
        {!isSmallScreen && <div className="h-10"></div>}
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Contact</SubTitle>
          <Contact />
        </div>
      </div>



    </div >
  );
}

export default App;
