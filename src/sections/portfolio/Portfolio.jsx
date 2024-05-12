import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import './portfolio.css'
import { useState } from 'react'
import data from './data'

function Portfolio() {
  const [projects, setProjects] = useState(data)

  const category = data.map(item => item.category)
  const uniqueCategories = ['all', ...new Set(category)];

  const filterProjectsHandler = (category) => {
    if(category == "all"){
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects} />
      </div>
    </section>)
}

export default Portfolio
