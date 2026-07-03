export default {
  global: {
    Name: 'Estrategias de <em>marketing</em> y valor agregado',
    Description:
      'Este componente aborda la aplicación de estrategias de <em>marketing online</em> y el diseño de valor agregado en productos y servicios digitales, permitiendo mejorar la captación de clientes, incrementar las ventas y fortalecer la competitividad del negocio electrónico en el entorno digital.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planeación estratégica de <em>marketing</em> digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de objetivos comerciales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Selección de canales digitales	',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Definición del público objetivo	',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Planificación de estrategias digitales	',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Aplicación de la planeación estratégica en el <em>marketing</em> digital',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de campañas de <em>marketing</em> digital	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Creación de campañas publicitarias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Segmentación de audiencias	',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión de contenido digital',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Optimización de campañas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Aplicación de la gestión de campañas en el negocio digital',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Herramientas utilizadas en la gestión de campañas de <em>marketing</em> digital	',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de atracción y conversión de clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de captación de clientes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Embudo de ventas digital',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias de conversión',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Optimización del proceso de compra	',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Aplicación integrada de atracción y conversión	',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Mejora continua en estrategias de conversión	',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de fidelización de clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Relación con el cliente digital	',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Programas de fidelización',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Experiencia del cliente aplicada	',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Retención de clientes',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Estrategias de fidelización basadas en datos',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diseño de estrategias de valor agregado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Identificación de necesidades del cliente	',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Construcción de propuesta de valor',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Diferenciación competitiva aplicada',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Innovación en productos y servicios',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Diseño de portafolio de valor',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Evaluación y optimización de estrategias digitales	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Indicadores de desempeño (KPI)',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Análisis de resultados	',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Toma de decisiones basada en datos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Optimización de estrategias digitales	',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Evaluación del retorno de inversión (ROI)',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo:
              'Herramientas utilizadas en la evaluación y optimización de estrategias digitales',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Analítica digital',
      significado:
        'la analítica digital recopila y analiza datos de productos de múltiples fuentes digitales para fundamentar las estrategias de producto y <em>marketing</em>. Amazon y Netflix son ejemplos de empresas que han utilizado la analítica digital para impulsar nuevas funciones personalizadas de sus productos. Sin embargo, empresas de todos los tamaños pueden usar la analítica de datos para mejorar la toma de decisiones. Esto les ayuda a reducir la pérdida de clientes, realizar experimentos y aumentar el valor de los clientes existentes. La analítica web, el <em>marketing</em> digital y la analítica de productos se engloban dentro de la analítica digital.',
    },
    {
      termino: 'Automatización del <em>marketing</em>',
      significado:
        'esta metodología implica el uso de <em>software</em> para automatizar todos los procesos derivados de una estrategia de <em>marketing</em> digital, como la segmentación, la generación de <em>workflows</em>, el <em>lead nurturing</em>, la gestión de campañas, entre otros.',
    },
    {
      termino: 'Buyer persona',
      significado:
        'representación detallada del cliente ideal, construida a partir de información sobre sus necesidades, intereses, hábitos de compra y comportamiento digital.',
    },
    {
      termino: 'CAC: Costo de Adquisición de Clientes',
      significado:
        'el costo de adquisición de clientes, también conocido como CAC, es una métrica sumamente relevante en el mundo de los negocios. Representa la suma de las inversiones hechas en <em>marketing</em> y ventas dividida entre el número de clientes conquistados en el mismo período.',
    },
    {
      termino: 'Campaña de <em>marketing</em>',
      significado:
        'es la orquestación deliberada de múltiples puntos de contacto con el objetivo principal de mejorar los indicadores clave de rendimiento de una empresa, sobre todo su tasa de conversión.',
    },
    {
      termino: 'Canales digitales',
      significado:
        'medios utilizados para comunicar la propuesta de valor y llegar al público objetivo, como redes sociales, motores de búsqueda, correo electrónico, plataformas de contenido y aplicaciones móviles.',
    },
    {
      termino: 'Captación de clientes',
      significado:
        'estrategia orientada a atraer usuarios potenciales hacia los canales digitales del negocio mediante contenidos, publicidad, redes sociales o posicionamiento en buscadores.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'material informativo, promocional, persuasivo o testimonial utilizado en canales digitales para comunicar la propuesta de valor e interactuar con los usuarios.',
    },
    {
      termino: 'Embudo de ventas digital',
      significado:
        'modelo que representa el recorrido del cliente desde el primer contacto con la marca hasta la conversión, compra o acción esperada.',
    },
    {
      termino: 'LTV (Valor del cliente en el tiempo)',
      significado:
        'el valor de la vida del cliente o <em>Customer Lifetime Value</em> (LTV) es la métrica que indica los ingresos totales que una empresa puede esperar obtener de una cuenta de un cliente. Esta métrica considera el valor de ingresos de un cliente y lo compara con la vida útil del cliente, prevista por la empresa. Las empresas usan esta métrica para identificar los segmentos de clientes más importantes y valiosos.',
    },
    {
      termino: '<em>Marketing</em> digital',
      significado:
        'conjunto de estrategias y acciones desarrolladas en medios digitales para promocionar productos o servicios, atraer clientes, generar conversiones y fortalecer la presencia de una marca.',
    },
    {
      termino: 'Negocio electrónico',
      significado:
        'modelo de negocio que utiliza plataformas, herramientas y canales digitales para gestionar procesos comerciales, atender clientes, vender productos o servicios y optimizar resultados.',
    },
    {
      termino: 'Objetivos comerciales',
      significado:
        'metas claras, medibles y alcanzables que orientan las acciones de <em>marketing</em> digital hacia resultados como ventas, captación de clientes, posicionamiento o fidelización.',
    },
    {
      termino: 'Optimización de campañas',
      significado:
        'proceso continuo de análisis y ajuste de una campaña digital para mejorar su rendimiento, reducir costos y maximizar los resultados obtenidos.',
    },
    {
      termino: 'Planeación estratégica de <em>marketing</em> digital',
      significado:
        'proceso que permite definir objetivos, seleccionar canales, identificar el público objetivo y estructurar acciones digitales orientadas al logro de resultados comerciales.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'grupo de personas al cual se dirigen las acciones comerciales, definido a partir de características, necesidades, preferencias y comportamientos específicos.',
    },
    {
      termino: 'Segmentación de audiencias',
      significado:
        'proceso de dividir el mercado en grupos de usuarios con características comunes, con el fin de dirigir mensajes más precisos y aumentar la efectividad de las campañas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adobe, E. d. (25 de 09 de 2025). Adobe for Business. Obtenido de Campañas de marketing digital: estrategia, ejecución y medición.: ',
      link: 'https://business.adobe.com/blog/basics/digital-marketing-campaign',
    },
    {
      referencia:
        'Amespil, J. (29 de 02 de 2024). Salesforce LATAM Blog. Obtenido de CAC: ¿qué es el Costo de Adquisición de Clientes?: ',
      link: 'https://www.salesforce.com/mx/blog/costo-de-adquisicion-de-clientes/',
    },
    {
      referencia:
        'Cárdenas, F. (17 de 09 de 2024). HubSpot. Obtenido de Valor de vida del cliente: cómo calcular el LTV (con ejemplo): ',
      link: 'https://blog.hubspot.es/service/valor-de-la-vida-del-cliente-ltv',
    },
    {
      referencia:
        'Franzolini, D. (03 de 04 de 2025). HubSpot. Obtenido de Qué es marketing automation y cuáles son sus beneficios: ',
      link: 'https://blog.hubspot.es/marketing/que-es-el-marketing-automation-y-para-que-sirve#que-es',
    },
    {
      referencia:
        'Leung, A. X. (26 de 01 de 2022). Amplitude. Obtenido de ¿Qué es la analítica digital? Definición, ejemplos y herramientas.: ',
      link: 'https://amplitude.com/blog/digital-analytics',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
