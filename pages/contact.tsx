import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contáctame</h1>
      <p className={styles.pageSubtitle}>
        Siéntete libre de contactarme a través de cualquiera de las plataformas sociales a continuación.
        Siempre estoy abierto a nuevas oportunidades y conexiones.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contacto' },
  };
}

export default ContactPage;
