import Image from 'next/image';
import { Project } from '@/data/projects';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasTitle = project.title.trim() !== '';

  return (
    <div className={styles.card}>
      {hasTitle ? (
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderLeft}>
            <Image
              src={project.logo}
              alt={project.title || 'Logo del proyecto'}
              width={32}
              height={32}
            />
          </div>
          <div className={styles.cardHeaderRight}>
            <div className={styles.cardTitle}>{project.title}</div>
          </div>
        </div>
      ) : (
        <div className={styles.fullLogoContainer}>
          <Image
            src={project.logo}
            alt="Logo del proyecto"
            width={300}
            height={150}
            className={styles.fullLogo}
          />
        </div>
      )}
      <div className={styles.cardBody}>
        <div className={styles.cardDescription}>{project.description}</div>
      </div>
      <div className={styles.clickPrompt}>Click para más detalles</div>
    </div>
  );
};

export default ProjectCard;
