import React from 'react';
import Main from './pages/Main';
import TopBar from './components/TopBar';
import Resume from './components/Resume';
import SubTitle from './components/SubTitle';
import Wave from './components/Wave';
import SkillSet from './components/SkillSet';
import Contact from './components/Contact';
import ProjectList from './components/ProjectList';


function App() {
  return (
    <div>
      <TopBar />
      <div className="w-full" style={{ height: "90vh" }}>
        <div className="h-1/6 -mt-16"></div>
        <Main />
      </div>


      <Wave inverted={false} />


      <div className="w-full bg-gray-100 py-10 ">
        <div className='h-10'></div>
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Resume (last updated 9/9/2023)</SubTitle>
          <Resume />
        </div>
      </div>

      <Wave inverted={true} />

      <div className="w-full py-10 -mb-10">
        <div className='h-10'></div>
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Skill Set</SubTitle>
          <SkillSet />
        </div>
      </div>

      <Wave inverted={false} />


      <div className="w-full bg-gray-100 py-10 ">
        <div className='h-10'></div>
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Projects</SubTitle>
          <ProjectList />
        </div>
      </div>

      <Wave inverted={true} />


      <div className="w-full py-10 ">
        <div className='h-10'></div>
        <div className="w-11/12 sm:w-8/12 m-auto">
          <SubTitle>Contact</SubTitle>
          <Contact />
        </div>
      </div>


      {/* <TableOfContents />
      <Hotbar />
      <Waffle />
      <div className="h-screen mb-4 ">
        <div className="h-1/6 sm:h-2/6 -mt-4"></div>
        <AboutMeCard />
        <div className="text-center">
          <Button />
        </div>
      </div>
      <Wave inverted={false} />
      <div className="w-full bg-gray-100 py-10">
        <div className="w-11/12 sm:w-8/12 m-auto">
          <Header id="projects">Projects</Header>
          <ProjectManager />
          <Header id="skill-set">Skill Set</Header>
          <SkillManager />
        </div>
      </div>
      <Wave inverted={true} />
      <div className="w-8/12 m-auto pb-20 pt-20">
        <Header id="contact">Contact</Header>
        <Contact />
      </div>
  */ }
    </div >
  );
}

export default App;
