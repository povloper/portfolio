export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  longDescription?: string;
  images?: string[];
  skills?: string[];
  date?: string;
  association?: string;
}

export const projects: Project[] = [
  {
    title: '',
    description: 'Desarrollo de una plataforma web para la creación de vídeos inmobiliarios profesionales a partir de imágenes',
    longDescription: 'He desarrollado animmo.pro, una plataforma web que transforma imágenes en vídeos animados para el sector inmobiliario. A continuación, destaco los aspectos técnicos del proyecto:\n\n✅ Framework: Desarrollado con Next.js, que permite una renderización eficiente del lado del servidor y una experiencia de usuario optimizada.\n✅ Diseño: Implementación de Tailwind CSS para estilos consistentes y un diseño responsivo adaptable a múltiples dispositivos.\n✅ Backend y Base de Datos: Uso de Supabase para gestionar la base de datos y la autenticación de usuarios, garantizando seguridad y escalabilidad.\n✅ Control de Versiones: Gestión del código fuente mediante Git, facilitando la colaboración y el seguimiento de cambios.\n✅ Despliegue: Implementación continua (CI/CD) y despliegue automatizado con Coolify, asegurando actualizaciones rápidas y fiables.\n\nEste proyecto combina herramientas modernas para ofrecer una solución eficiente y escalable en la creación de contenido visual inmobiliario. 🚀',
    logo: '/logos/logo_animmo.webp',
    link: 'https://animmo.pro',
    slug: 'animmo-pro',
    images: [],
    skills: ['Next.js', 'Tailwind CSS', 'Supabase', 'Coolify', 'Docker', 'Shadcn'],
    date: 'feb. 2025 - actualidad'
  },
  {
    title: '',
    description: 'Desarrollo de un algoritmo para la generación y gestión de 200 millones de palabras clave de Google en español',
    longDescription: 'Para mi Trabajo de Fin de Grado, he creado un sistema capaz de encontrar todas las palabras clave de Google en español y gestionarlas de manera eficiente.\n\n✅ Algoritmo inteligente para obtener y organizar palabras clave.\n✅ Almacenamiento optimizado en una base de datos PostgreSQL.\n✅ Aplicación web funcional para acceder y buscar palabras clave de forma rápida y eficiente.\n✅ Sistema de búsqueda avanzada, incluyendo sugerencias de palabras similares.\n\nUn proyecto que combina data engineering, algoritmos de optimización y desarrollo web. ¡Un reto muy interesante y con muchas aplicaciones! 🚀',
    logo: '/logos/light-logo.svg',
    link: '#',
    slug: 'keypow',
    images: [
      '/projects/1741113457468.jpg',
      '/projects/1741113489536.jpg',
      '/projects/1741113500817.jpg',
      '/projects/1741113515096.jpg',
      '/projects/1741113522824.jpg',
      '/projects/1741113538684.jpg',
      '/projects/1741113545931.jpg',
      '/projects/1741113553184.jpg',
    ],
    skills: ['Angular2', 'Spring Boot', 'Java', 'Docker', 'PostgreSQL'],
    date: 'abr. 2024 - jul. 2024',
    association: 'Universitat de Girona'
  },
  {
    title: '',
    description: 'Plataforma web integral para la gestión del Fòrum Industrial universitario',
    longDescription: 'Diseñé y desarrollé una plataforma web integral para gestionar el Fòrum Industrial en la universidad, donde diversas empresas presentaron stands para interactuar con los estudiantes. El sitio web facilita la administración completa del fórum, incluyendo el control de empresas, miembros y actividades a través de un panel de administración. Adicionalmente, implementé un sistema seguro de reconocimiento de créditos universitarios utilizando códigos QR, permitiendo a las empresas registrar la participación de los estudiantes interesados en sus stands.',
    logo: '/logos/logo_white.png',
    link: 'https://forum.udg.edu',
    slug: 'forum-industrial',
    images: [],
    skills: ['Laravel', 'TypeScript', 'Angular2', 'Docker'],
    date: 'mar. 2021 - may. 2024',
    association: 'Fòrum Industrial'
  }
];
