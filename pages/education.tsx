import styles from '@/styles/ArticlesPage.module.css';

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  skills?: string[]; // Ahora es opcional
  logo?: string;
}

interface Course {
  id: number;
  title: string;
  platform: string;
  date: string;
  completed: boolean;
  certificate?: string;
}

interface EducationPageProps {
  education: Education[];
  courses: Course[];
}

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{education.institution}</h3>
        <p className={styles.cardDescription}>{education.degree}</p>
        <p className={styles.cardPeriod}>{education.period}</p>
        <p>{education.description}</p>
        {/* Se ha eliminado la sección de skills */}
      </div>
    </div>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className={styles.card} style={{ marginBottom: '20px' }}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardDescription}>{course.platform}</p>
        <p className={styles.cardPeriod}>{course.date}</p>
        {course.completed ? (
          <span className={styles.completedBadge}>Completado</span>
        ) : (
          <span className={styles.inProgressBadge}>En progreso</span>
        )}
        {course.certificate && (
          <a 
            href={course.certificate} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.certificateLink}
            style={{ color: '#9f61e6', fontWeight: 'bold', textDecoration: 'underline', display: 'block', marginTop: '10px' }}
          >
            Ver certificado
          </a>
        )}
      </div>
    </div>
  );
};

const EducationPage = ({ education, courses }: EducationPageProps) => {
  return (
    <div className={styles.layout} style={{ fontFamily: 'var(--font-primary)' }}>
      <h1 className={styles.pageTitle}>Mi Educación</h1>
      <p className={styles.pageSubtitle}>
        Mi formación académica y cursos de desarrollo profesional
      </p>

      <h2 className={styles.sectionTitle}>Formación Académica</h2>
      <div className={styles.container}>
        {education.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>

      <h2 className={styles.sectionTitle} style={{ marginTop: '40px' }}>Cursos y Certificaciones</h2>
      <div className={styles.container} style={{ gap: '24px' }}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Datos de educación formal
  const education = [
    {
      id: 1,
      institution: "Universitat de Girona",
      degree: "Ingeniería Informática",
      period: "2020 - 2024",
      description: "",
      skills: ["Spring Boot", "Java", "HTML5", "JavaScript", "Linux", "MySQL", "CSS"]
    },
    {
      id: 2,
      institution: "INS Cirviànum",
      degree: "Grado Superior, Desarrollo de Aplicaciones Web",
      period: "2018 - 2020",
      description: "Graduado con excelencia académica",
      skills: ["HTML5", "Front-end", "jQuery", "JavaScript", "Back-End", "PHP", "MySQL", "Laravel", "CSS"]
    },
    {
      id: 3,
      institution: "INS Cirviànum",
      degree: "Grado Medio, Sistemas Microinformáticos y Redes",
      period: "2016 - 2018",
      description: "",
      skills: ["Redes", "Sistemas Operativos", "Hardware"]
    }
  ];

  // Datos de cursos actualizados
  const courses = [
    {
      id: 1,
      title: "Apache Kafka con Java, Spring framework y AWS",
      platform: "Udemy",
      date: "2025 - Actualidad",
      completed: false
    },
    {
      id: 2,
      title: "Spring Framework 6 & Spring Boot 3 desde cero a experto 2024",
      platform: "Udemy",
      date: "Abril 2024",
      completed: true,
      certificate: "https://www.udemy.com/certificate/UC-5a41d8b2-3904-42be-843e-6f42598777c8/"
    },
    {
      id: 3,
      title: "Docker - Guía práctica de uso para desarrolladores",
      platform: "Udemy",
      date: "Enero 2023",
      completed: true,
      certificate: "https://www.udemy.com/certificate/UC-3c1cf714-b268-4d55-a2da-c8ee3d620179/"
    },
    {
      id: 4,
      title: "Angular: De cero a experto creando aplicaciones (Angular 9+)",
      platform: "Udemy",
      date: "Junio 2020",
      completed: true,
      certificate: "https://www.udemy.com/certificate/UC-84835c03-154b-4acf-b0fb-45c226f634a6/"
    },
    {
      id: 5,
      title: "Desarrollo Seguro",
      platform: "OpenWebinars",
      date: "Diciembre 2019",
      completed: true,
      certificate: "https://openwebinars.net/cert/RnJP9"
    }
  ];

  return {
    props: { 
      title: 'Educación', 
      education,
      courses
    }
  };
}

export default EducationPage;
