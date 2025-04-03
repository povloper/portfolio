import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Josep Pou</h1>
        <div className={styles.subtitle}>Backend Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Me dedico al desarrollo de sistemas backend y arquitecturas complejas que gestionan 
              grandes volúmenes de datos y usuarios. Mi objetivo profesional es resolver retos técnicos 
              y diseñar soluciones eficientes y escalables con código limpio y bien estructurado.
            </p>
            <p className={styles.paragraph}>
              Considero importante investigar y evaluar nuevas tecnologías para 
              poder incorporarlas cuando sean adecuadas para resolver necesidades concretas.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experiencia</h2>
            <p className={styles.paragraph}>
              Actualmente trabajo en <span className={styles.highlight}>DSET SOLUTIONS</span> como
              Software Engineer desde septiembre de 2022, donde llevo casi 3 años 
              desarrollando y optimizando una plataforma que recibe y procesa datos de decenas 
              de miles de contadores y sensores.
            </p>
            <p className={styles.paragraph}>
              Me encargo de mejorar la eficiencia en la escritura y consulta de bases de datos, 
              así como de implementar microservicios para la lectura de dispositivos mediante protocolos 
              como IEC, Modbus, Sigfox, MQTT o HTTP. Cuento además con otros 2 años de 
              experiencia en otras empresas del sector.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Más allá del código</h2>
            <p className={styles.paragraph}>
              Fuera del ámbito profesional, dedico tiempo a otros intereses como la 
              electrónica, la mecánica y el bricolaje. Practico ejercicio físico de forma regular, 
              lo que me ayuda a mantener un equilibrio personal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
