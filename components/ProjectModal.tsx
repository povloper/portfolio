import { Project } from '@/data/projects';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/ProjectModal.module.css';
import { IoMdClose } from 'react-icons/io';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedImageIndex !== null) {
          setSelectedImageIndex(null);
        } else {
          onClose();
        }
      }
    };

    const handleArrowKeys = (event: KeyboardEvent) => {
      if (selectedImageIndex === null || !project?.images) return;
      
      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex(prev => 
          prev !== null && prev > 0 ? prev - 1 : prev
        );
      } else if (event.key === 'ArrowRight') {
        setSelectedImageIndex(prev => 
          prev !== null && prev < (project.images?.length || 0) - 1 ? prev + 1 : prev
        );
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('keydown', handleArrowKeys);
    
    // Lock body scroll when image is enlarged
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('keydown', handleArrowKeys);
      document.body.style.overflow = '';
    };
  }, [onClose, selectedImageIndex, project]);

  if (!project) return null;
  
  const hasTitle = project.title && project.title.trim() !== '';
  const hasImages = project.images && project.images.length > 0;
  const hasLink = project.link && project.link !== '#';

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeEnlargedImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar la propagación del evento
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation(); // Evitar la propagación del evento
    
    if (!project.images) return;
    
    if (direction === 'prev' && selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else if (direction === 'next' && selectedImageIndex !== null && selectedImageIndex < project.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          {hasTitle ? (
            <h2 className={styles.modalTitle}>{project.title}</h2>
          ) : (
            <div className={styles.modalLogo}>
              <Image
                src={project.logo}
                alt="Logo del proyecto"
                width={150}
                height={50}
                className={styles.titleLogo}
              />
            </div>
          )}
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.modalBody}>
          {project.association && (
            <div className={styles.association}>
              <span>Asociado con: {project.association}</span>
            </div>
          )}
          {project.date && (
            <div className={styles.date}>
              <span>{project.date}</span>
            </div>
          )}
          <div className={styles.description}>
            {project.longDescription ? (
              <p dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br/>') }} />
            ) : (
              <p>{project.description}</p>
            )}
          </div>
          
          {project.skills && project.skills.length > 0 && (
            <div className={styles.skills}>
              <h3>Habilidades:</h3>
              <div className={styles.skillTags}>
                {project.skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          )}
          
          <div className={styles.bottomSection}>
            {hasImages ? (
              <div className={styles.images}>
                <h3>Imágenes:</h3>
                <div className={styles.imageGrid}>
                  {project.images?.map((img, index) => (
                    <img 
                      key={index} 
                      src={img} 
                      alt={`${project.title || 'Proyecto'} - imagen ${index + 1}`} 
                      onClick={() => handleImageClick(index)}
                      className={styles.imageCursor}
                      title="Click para ampliar"
                    />
                  ))}
                </div>
              </div>
            ) : null}
            
            {hasLink && (
              <div className={styles.projectLink}>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.viewProjectButton}
                >
                  Ver proyecto
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && project.images && (
        <div className={styles.imageOverlay} onClick={(e) => {
          e.stopPropagation();  // Evitar que el clic se propague al modalOverlay
          closeEnlargedImage(e);
        }}>
          <img 
            src={project.images[selectedImageIndex]} 
            alt={`${project.title || 'Proyecto'} - imagen ampliada`}
            className={styles.enlargedImage}
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className={styles.closeEnlarged} 
            onClick={(e) => closeEnlargedImage(e)}
          >
            <IoMdClose size={24} />
          </button>
          
          <div className={styles.imageCount}>
            {selectedImageIndex + 1} / {project.images.length}
          </div>
          
          <div className={styles.enlargedNavButtons} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.navButton} 
              onClick={(e) => navigateImage('prev', e)}
              disabled={selectedImageIndex === 0}
              aria-label="Imagen anterior"
            >
              <IoChevronBackOutline size={20} />
            </button>
            <button 
              className={styles.navButton} 
              onClick={(e) => navigateImage('next', e)}
              disabled={selectedImageIndex === project.images.length - 1}
              aria-label="Imagen siguiente"
            >
              <IoChevronForwardOutline size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
