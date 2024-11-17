export default {
  global: {
    componenteFormativo:
      'Seguridad alimentaria, enfermedades y prevención de riesgos',
    descripcionCurso:
      'Este componente explora las enfermedades transmitidas por alimentos (ETA), su clasificación, causas y cómo prevenirlas. Se profundiza en los principales agentes causales, como bacterias, virus, hongos y parásitos, y se analiza cómo estos afectan la seguridad alimentaria. Además, se introduce el sistema HACCP, una herramienta fundamental para la gestión de riesgos en la producción de alimentos y se destaca la importancia de las normas del <em>Codex Alimentarius</em> para garantizar la inocuidad alimentaria a nivel nacional e internacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.svg'),
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
        titulo: 'Enfermedades Transmitidas por Alimentos (ETA)',
        desarrolloContenidos: true,
        // subMenu: [
        //   {
        //     numero: '1.1',
        //     titulo: 'Titulo de segundo nivel',
        //     hash: 't_1_1',
        //   },
        // ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Control de riesgos en la producción de alimentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aseguramiento de la calidad alimentaria',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Enfermedades Transmitidas por Alimentos (ETA)',
      referencia:
        'Administración Nacional de Medicamentos, Alimentos y Tecnología Médica – ANMAT. (s.f.). Enfermedades transmitidas por los alimentos.',
      tipo: 'Capítulo de libro',
      descarga: '/downloads/ETA.pdf',
    },
    {
      tema: 'Control de riesgos en la producción de alimentos',
      referencia:
        'United States Department of Agriculture – USDA. (2013). Inocuidad Alimentaria y Seguridad Alimentaria: Lo que Deben Saber los Consumidores.',
      tipo: 'Libro',
      descarga: '/downloads/GOVPUB-A110-PURL-LPS75622.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alimento',
      significado:
        'Todo producto natural o artificial, elaborado o no, que ingerido aporta al organismo humano los nutrientes y la energía necesarios para el desarrollo de los procesos biológicos. Quedan incluidas en la presente definición las bebidas no alcohólicas, y aquellas sustancias con que se sazonan algunos comestibles y que se conocen con el nombre genérico de especia.',
    },
    {
      termino: 'Alimento contaminado',
      significado:
        'Alimento que contiene agentes y/o sustancias extrañas de cualquier naturaleza en cantidades superiores a las permitidas en las normas nacionales, o en su defecto en normas reconocidas internacionalmente.',
    },
    {
      termino: 'Alimento de mayor riesgo en la vigilancia en la salud pública',
      significado:
        'Alimento que, en razón a sus características de composición, especialmente en sus contenidos de nutrientes, actividad acuosa y pH, favorece el crecimiento microbiano; por consiguiente, cualquier deficiencia en su proceso, manipulación, conservación, transporte, distribución y comercialización puede ocasionar trastornos a la salud del consumidor.',
    },
    {
      termino: 'Brote de ETA',
      significado:
        'El episodio en el que dos o más personas presentan una enfermedad similar tras ingerir alimentos, incluido el agua, del mismo origen y donde la evidencia epidemiológica o el análisis del laboratorio implica a los alimentos y/o vehículos de esta.',
    },
    {
      termino: 'ETA tipo infección',
      significado:
        'Son las ETAs producidas por la ingestión de alimentos y/o agua contaminados con agentes infecciosos específicos tales como bacterias, virus, hongos o parásitos, que en la luz intestinal pueden multiplicarse o lisarse y/o producir toxinas o invadir la pared intestinal y desde allí alcanzar otros aparatos o sistemas.',
    },
    {
      termino: 'ETA tipo intoxicación',
      significado:
        'Las ETAs producidas por la ingestión de toxinas formadas en tejidos de plantas o animales, o de productos metabólicos de microorganismos en los alimentos, o por sustancias químicas incorporadas a ellos de modo accidental, incidental o intencional desde su producción hasta su consumo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cliver, D. (1993). Enfermedades transmitidas por alimentos causadas por virus.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud. (2017). Enfermedades transmitidas por alimentos.',
      link:
        'https://www.minsalud.gov.co/salud/publica/PET/Paginas/enfermedades-transmitidas-por-alimentos.aspx',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2017). Enfermedades de transmisión alimentaria.',
      link: 'https://www.who.int/es/health-topics/foodborne-diseases#tab=tab_3',
    },
    {
      referencia:
        'U.S. Food and Drug Administration. (2014). Los 14 patógenos principales transmitidos por los alimentos.',
      link:
        'https://www.fda.gov/food/resourcesforyou/healtheducators/ucm091976.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Báez León',
          cargo: 'Experta temática ',
          centro: 'N/A',
        },
        {
          nombre: 'Yuri Alexandra Báez Roldán',
          cargo: 'Asesora pedagógica',
          centro: 'N/A',
        },
        {
          nombre: 'Janet Lucía Villalba Triana',
          cargo: 'Asesora pedagógica',
          centro: 'N/A',
        },
        {
          nombre: 'Jairo Valencia Ebratt',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Liborio De Jesús Castañeda Valencia',
          cargo: 'Desarrollador <em>full stack junior</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        // {
        //   nombre: 'Nombre',
        //   cargo: 'Actividad Didáctica',
        //   centro:
        //     'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        // },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
