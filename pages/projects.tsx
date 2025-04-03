import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Project, projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Mis Proyectos</h1>
      <p className={styles.pageSubtitle}>
        Aquí hay una colección de mi trabajo personal reciente. Estos proyectos muestran mis
        habilidades en desarrollo web, diseño y resolución de problemas.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <div key={project.slug} onClick={() => handleProjectClick(project)}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Proyectos' },
  };
}

export default ProjectsPage;
