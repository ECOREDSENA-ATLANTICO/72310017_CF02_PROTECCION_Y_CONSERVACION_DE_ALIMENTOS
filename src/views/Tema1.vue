<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Enfermedades Transmitidas por Alimentos (ETA)
      
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.similar-color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_0.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las Enfermedades Transmitidas por Alimentos (ETA) son infecciones o intoxicaciones resultantes del consumo de alimentos contaminados, generalmente por microorganismos patógenos como bacterias, virus y parásitos, o sustancias químicas nocivas. Estas enfermedades pueden afectar mucho a la salud pública, provocando síntomas leves, como malestar estomacal, hasta cuadros graves que afectan a la salud de las poblaciones. Comprender las causas y mecanismos de estas enfermedades es vital para desarrollar estrategias efectivas de prevención y control, protegiendo así a los consumidores de brotes que puedan amenazar su bienestar.
    
    Separador

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-5(data-aos="fade-right")
        h3.bgr_3.position-relative Definición y Conceptos Básicos 
          img.pst(src='@/assets/curso/temas/titulos/img_1.svg', alt='') 

    p.mb-3 Las Enfermedades Transmitidas por Alimentos (ETA) son un problema de salud pública que surge cuando se consumen alimentos contaminados. Estas enfermedades pueden provocar infecciones o intoxicaciones en el organismo, generalmente debido a la presencia de microorganismos como bacterias, virus y parásitos, o por sustancias químicas peligrosas. Su conocimiento y prevención resultan esenciales para garantizar la seguridad alimentaria y proteger la salud de las personas.

    .tarjeta.fondo_1_2.p-4.slyder_1.bg-01.mb-5
      SlyderA(tipo="b")
        .tarjeta.bg-01.p-4
          .row.justify-content-center.align-items-center.my-lg-4.p-2
            .col-lg-6.mb-4
              h3.mb-3 ¿Qué son las ETAs?

              p.mb-3 La enfermedad transmitida por alimentos (ETA) <b>es el síndrome originado por la ingestión de alimentos</b>, incluida el agua, que contienen agentes etiológicos en cantidades tales que afectan la salud del consumidor <b>a nivel individual o en grupos de población</b>; las alergias por hipersensibilidad individual no se consideran ETA.

              .col-5
                figure
                img.w-50(src='@/assets/curso/temas/tema1/img_1.png', alt='Imagen decorativa')

            .col-lg-6
              figure
              img(src='@/assets/curso/temas/tema1/img_2.png', alt='Imagen decorativa')

        .tarjeta.bg-01.p-4
          .row.justify-content-center.align-items-center.my-lg-4.p-2
            .col-lg-6.mb-4
      
              h3.mb-3 ¿A quiénes afecta?

              p.mb-3 Las ETA constituyen <b>uno de los problemas sanitarios más comunes y de mayor impacto sobre la salud de las personas en el mundo</b>. Afectan principalmente a la población pobre, a niños, mujeres embarazadas y ancianos. La aparición de brotes de ETA <b>podría perjudicar tanto al comercio como al turismo, provocando pérdidas de ingresos, desempleo y demandas</b>. Además, el deterioro de los alimentos ocasiona pérdidas, es costoso y puede influir negativamente en el comercio y en la confianza de los consumidores.

              .col-5
                figure
                img.w-50(src='@/assets/curso/temas/tema1/img_3.png', alt='Imagen decorativa')

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img_4.png', alt='Imagen decorativa')

        .tarjeta.bg-01.p-4
          .row.justify-content-center.align-items-center.my-lg-4.p-2
            .col-lg-6.mb-4
              h3.mb-3 ¿Cuál es su impacto? 

              p.mb-3 El proceso de globalización ha provocado un <b>aumento significativo en el comercio internacional de productos alimenticios</b>, lo cual ha proporcionado importantes beneficios sociales y económicos, pero también facilita la <b>propagación de enfermedades en el mundo</b>. En los dos últimos decenios, los hábitos de consumo de alimentos también han sufrido cambios importantes en muchos países; como consecuencia, <b>se han perfeccionado nuevas técnicas de producción, preparación y distribución de alimentos</b>.

              .col-5
                figure
                img.w-50(src='@/assets/curso/temas/tema1/img_5.png', alt='Imagen decorativa')

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img_6.png', alt='Imagen decorativa')

    p.mb-3 Por lo anterior, es imprescindible un control eficaz de la higiene, para evitar las consecuencias perjudiciales de las enfermedades y los daños causados por los alimentos y por su deterioro en la salud y la economía.
    p.mb-3 Las enfermedades trasmitidas por los alimentos (ETA) constituyen el problema de salud pública más extendido en el mundo, por lo que es necesario mantener su vigilancia epidemiológica para aplicar medidas oportunas que permitan su control y prevención, y asegurarse de que los alimentos sean inocuos y aptos para el consumo humano.

    Separador
  
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-5(data-aos="fade-right")
        h3.bgr_3.position-relative Tipos de ETA 
          img.pst(src='@/assets/curso/temas/titulos/img_2.svg', alt='') 

    p.mb-4 Los microorganismos en los alimentos pueden causar alteraciones de dos tipos: <em>alteración del poder nutritivo y de las propiedades organolépticas.</em> Para el caso de las enfermedades que pueden ocasionar en el hombre, estas pueden ser infecciones, intoxicaciones o alergias. Por lo tanto, las enfermedades transmitidas por alimentos son un conjunto de enfermedades que resultan de la ingestión de alimentos contaminados con algunos de los siguientes elementos:
    
    .bg_img_0
      .row.justify-content-center.mb-5
        .col-md-6.col-xl-3.mb-2
          .tarjeta.fondo-dorado.p-4.h-100.text-center
            figure
              img(src="@/assets/curso/temas/tema1/img_7.png", alt="alt").w-50.mx-auto.mb-3
            h4.mb-3 Microorganismos.  
            //- p La temperatura de refrigeración no debe superar los 4°C para asegurar una buena conservación de los productos.
        
        .col-md-6.col-xl-3.mb-2
          .tarjeta.fondo-dorado.p-4.h-100.text-center
            figure
              img(src="@/assets/curso/temas/tema1/img_8.png", alt="alt").w-50.mx-auto.mb-3
            h4.mb-3 Toxinas de microorganismos.
            //- p La temperatura de congelación no debe superar los -18°C para una conservación a largo plazo.
        
        .col-md-6.col-xl-3.mb-2
          .tarjeta.fondo-dorado.p-4.h-100.text-center
            figure
              img(src="@/assets/curso/temas/tema1/img_9.png", alt="alt").w-50.mx-auto.mb-3
            h4.mb-3 Agentes químicos.
            p Plaguicidas, metales, aditivos.

        .col-md-6.col-xl-3.mb-2
          .tarjeta.fondo-dorado.p-4.h-100.text-center
            figure
              img(src="@/assets/curso/temas/tema1/img_10.png", alt="alt").w-50.mx-auto.mb-3
            h4.mb-3 Alimentos que naturalmente pueden contener sustancias tóxicas.
            p Moluscos, vegetales, hongos.
  
    .row.justify-content-center.mb-2
      h4.mb-5.text-center  En general, las fuentes de contaminación son diversas. Entre las principales se encuentran:
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.bg-06.p-5.h-100.img_1
          .tarjeta-numerada__numero
            .h2 1
          p
            b Salud de los animales.

      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.bg-07.p-5.h-100.img_2
          .tarjeta-numerada__numero
            .h2 2
          p 
            b Ambiente.

      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.bg-06.p-5.h-100.img_3
          .tarjeta-numerada__numero
            .h2 3
          p.parrafo
            b Transporte. 
            
      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.bg-07.p-5.h-100.img_4
          .tarjeta-numerada__numero
            .h2 4
          p 
            b Utensilios. 

      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.bg-06.p-5.h-100.img_5
          .tarjeta-numerada__numero
            .h2 5
          p 
            b Procesado. 

      .col-md-6.col-lg-4.mb-4
        .tarjeta-numerada.bg-07.p-5.h-100.img_6
          .tarjeta-numerada__numero
            .h2 6
          p 
            b Ser humano. 
    
    Separador

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-5(data-aos="fade-right")
        h3.bgr_3.position-relative Según el mecanismo de acción
          img.pst(src='@/assets/curso/temas/titulos/img_3.svg', alt='') 

    .row.justify-content-center.mb-3.tarjetas_ordenadas
      .col-lg-8.mb-4
        LineaTiempoD.color_azul
          row(numero="1" titulo="Infecciones") 
            p.mb-2 Causadas por la ingestión de alimentos contaminados con microorganismos vivos (bacterias, virus o parásitos) que se multiplican en el intestino y producen síntomas. 
            .tarjeta.azul_claro.p-4.h-100
              h5 Ejemplos:
              p Salmonelosis, Shigelosis, Campylobacteriosis, Listeriosis, Hepatitis A, Norovirus, Rotavirus.

          row(numero="2" titulo="Intoxicaciones") 
            p.mb-2 Causadas por la ingestión de alimentos contaminados con toxinas preformadas, ya sea de origen microbiano o químico. Estas toxinas pueden ser producidas por microorganismos durante su crecimiento o estar presentes en los alimentos de manera natural.
            .tarjeta.azul_claro.p-4.h-100
              h5 Ejemplos: 
              p Botulismo, intoxicación alimentaria por Staphylococcus  aureus, intoxicación alimentaria por Bacillus cereus.

      .col-lg-4.mb-4
        figure
          img(src="@/assets/curso/temas/tema1/img_17.png", alt="alt")

        
    Separador

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-5(data-aos="fade-right")
        h3.bgr_3.position-relative Según el tipo de agente causante
          img.pst(src='@/assets/curso/temas/titulos/img_4.svg', alt='') 

    .bg_img_4
      .row.justify-content-center.align-items-center.mb-5
        .col-md-6.col-lg-4.mb-4.mb-lg-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_18.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Bacterias
              p.mb-0 La mayoría de las ETAs son causadas por bacterias. Ejemplos: Salmonella, <em>Escherichia coli, Listeria monocytogenes, Campylobacter jejuni, Clostridium botulinum, Bacillus cereus, Staphylococcus aureus.</em>

        .col-md-6.col-lg-4.mb-4.mb-lg-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_19.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Virus
              p.mb-0 Algunos ejemplos de virus que causan ETAs: virus de la hepatitis A, Norovirus, Rotavirus.

        .col-md-6.col-lg-4.mb-4.mb-lg-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_20.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Hongos
              p.mb-0 Los hongos pueden producir micotoxinas que causan intoxicaciones. Ejemplos: <em>Aspergillus, Penicillium, Fusarium.</em>

        .col-md-6.col-lg-4.mb-4.mb-lg-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_21.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Parásitos
              p.mb-0 Algunos parásitos que causan ETAs: <em>Cryptosporidium, Giardia lamblia, Toxoplasma gondii.</em>

        .col-md-6.col-lg-4.mb-4.mb-lg-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_22.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Toxinas
              p.mb-0 Las toxinas pueden estar presentes en los alimentos de manera natural o ser producidas por microorganismos. Ejemplos: toxinas de las algas, micotoxinas producidas por hongos, toxinas de algunos mariscos.


        .col-md-6.col-lg-4.mb-4.mb-lg-2
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img_23.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Sustancias químicas
              p.mb-0 Pesticidas, metales pesados, aditivos alimentarios, contaminantes ambientales.
    

    .row.align-items-center.justify-content-center.mb-0
      .col-md-12.mb-3
        .titulo-sexto.color-acento-contenido.mb-5
            h5 Tabla 1. 
            span Enfermedades transmitidas por alimentos causadas por bacterias
        
        .tabla-b.color-acento-contenido.mb-5 
          table
            caption Fuente: Cliver (1993)
            thead.encabezado-tabla
              tr
                th Enfermedad (agente causante)
                th Periodo de latencia (duración)
                th Síntomas principales
                th Alimentos típicos
                th Modo de contaminación
                th Prevención de la enfermedad
              
            tbody
              tr
                td.text-bold (Bacillus cereus) intoxicación alimentaria, diarreico
                td 8-16 hrs. (12-24 hrs.)
                td Diarrea, cólicos, vómitos ocasionales
                td Productos cárnicos, sopas, salsas, vegetales
                td De la tierra o del polvo
                td Calentando o enfriando rápidamente los alimentos
              
              tr
                td.text-bold (Bacillus cereus) intoxicación alimentaria, emético
                td 1-5 hrs. (6-24 hrs.)
                td Náuseas, vómitos, a veces diarrea y cólicos
                td Arroz y pasta cocidos
                td De la tierra o del polvo
                td Calentando o enfriando rápidamente los alimentos
              
              tr
                td.text-bold Botulismo; intoxicación alimentaria (toxina de Clostridium botulinum lábil al calor)
                td 12-36 hrs. (meses)
                td Fatiga, debilidad, visión doble, habla arrastrada, insuficiencia respiratoria, a veces la muerte
                td Tipos A y B: vegetales; frutas; productos cárnicos, avícola y de pescado; condimentos; Tipo E: pescado y productos de pescado
                td Tipos A y B: de la tierra o del polvo; Tipo E: del agua y sedimentos
                td Calentando o enfriando rápidamente los alimentos
              
              tr
                td.text-bold Botulismo; intoxicación alimentaria, infección infantil
                td No conocida
                td Estreñimiento, debilidad, insuficiencia respiratoria, a veces la muerte
                td Miel, de la tierra
                td Esporas ingeridas de la tierra, del polvo o de la miel; Coloniza el intestino
                td No dar miel a los bebés; no se va a prevenir todo
              
              tr
                td.text-bold Campilobacteriosis (Campylobacter jejuni)
                td 3-5 días (2-10 días)
                td Diarrea, dolores abdominales, fiebre, náuseas, vómitos
                td Alimentos de origen animal, infectados
                td Pollo, leche cruda (no pasteurizada)
                td Cocinando muy bien el pollo; evitar la contaminación cruzada; irradiando los pollos; pasteurizando la leche
              
              tr
                td.text-bold Cholera (Vibrio cholera)
                td 2-3 días de horas a días
                td Heces líquidas profusas; a veces vómitos, deshidratación; si no se trata puede ser mortal
                td Mariscos crudos o mal cocinados
                td Heces humanas en el entorno marino
                td Cocinando muy bien los mariscos; higiene general
              
              tr
                td.text-bold (Clostridium perfringens) intoxicación alimentaria
                td 8-22 hrs. (12-24 hrs.)
                td Diarrea, cólicos, rara vez náuseas y vómitos
                td Pollo y carne de res cocidos
                td De la tierra, alimentos crudos
                td Calentando o enfriando rápidamente los alimentos
              
              tr
                td.text-bold (Escherichia coli) infecciones enterohemorrágicas transmitidas por los alimentos
                td 12-60 hrs. (2-9 días)
                td Diarrea líquida, sanguinolenta
                td Carne de res cruda o mal cocida, leche cruda
                td Ganado infectado
                td Cocinando muy bien la carne de res, pasteurizando la leche
              
              tr
                td.text-bold (Escherichia coli) infecciones enteroinvasoras transmitidas por los alimentos
                td Por lo menos 18 hrs. (incierta)
                td Cólicos, diarrea, fiebre, disentería
                td Alimentos crudos
                td Contaminación fecal humana, directa o a través del agua
                td Cocinando muy bien los alimentos, higiene general
              
              tr
                td.text-bold (Escherichia coli) infecciones enterotoxigénicas transmitidas por los alimentos
                td 10-72 hrs. (3-5 días)
                td Diarrea líquida profusa; a veces cólicos, vómitos
                td Alimentos crudos
                td Contaminación fecal humana, directa o a través del agua
                td Cocinando muy bien los alimentos, higiene general
              
              tr
                td.text-bold Listeriosis (Listeria monocytogenes)
                td 3-70 días
                td Meningo-encefalitis; mortinatos; septicemia o meningitis en neonatos
                td Leche, queso y vegetales crudos
                td De la tierra o de animales infectados, directamente o por estiércol
                td Pasteurizando la leche; cocinando los alimentos
              
              tr
                td.text-bold Salmonelosis (Salmonella especies)
                td 5-72 hrs.
                td Diarrea, dolores abdominales, escalofríos, fiebre, vómitos, deshidratación
                td Huevos crudos, mal cocinados; leche, carne y pollos crudos
                td Alimentos de origen animal, infectados; heces humanas
                td Cocinando muy bien los huevos, la carne y el pollo; pasteurizando la leche; irradiando los pollos; higiene general
              
              tr
                td.text-bold Shigelosis (Shigella especies)
                td 12-96 hrs. (4-7 días)
                td Diarrea, fiebre, náuseas, a veces vómitos y cólicos
                td Alimentos crudos
                td Contaminación fecal humana, directa o a través del agua
                td Higiene general; cocinando muy bien los alimentos
              
              tr
                td.text-bold Intoxicación alimentaria por estafilococos (enterotoxina de Staphylococcus aureus estable al calor)
                td 1-6 hrs. (6-24 hrs.)
                td Náuseas, vómitos, diarrea y cólicos
                td Jamón, productos cárnicos y avícola, pastelería rellena de crema, mantequilla batida, queso
                td Operarios con resfríos, dolor de garganta o cortadas que están infectadas, rebanadoras de carne
                td Calentando o enfriando rápidamente los alimentos
              
              tr
                td.text-bold Infección por estreptococos transmitidos por los alimentos (Streptococcus pyogenes)
                td 1-3 días (varía)
                td Diversos, incluso dolor de garganta, erisipela, escarlatina
                td Leche cruda, huevos "endiablados"
                td Operarios con dolor de garganta y otro tipo de infecciones por estreptococos
                td Higiene general, pasteurizando la leche
                  
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12
        .cajon.bg-3.p-4
          p.mb-0 Es importante destacar que algunas ETAs pueden ser causadas por una combinación de factores, como una infección bacteriana seguida de una intoxicación por toxinas producidas por la bacteria.
          
    .row.align-items-center.justify-content-center.mb-0
      .col-md-12.mb-3
        .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 2. 
            span Enfermedades transmitidas por alimentos causadas por virus
        
        .tabla-b.color-acento-contenido.mb-0 
          table
            caption Fuente: Cliver (1993)
            thead.encabezado-tabla
              tr 
                th Enfermedad (agente causante)
                th Periodo de latencia (duración)
                th Síntomas principales
                th Alimentos típicos
                th Modo de contaminación
                th Prevención de la enfermedad
            tbody 
              tr 
                td.text-bold Hepatitis A (Virus de hepatitis A)
                td 15-20 días (de semanas a meses)
                td Fiebre, debilidad, náuseas, malestar. A menudo ictericia;
                td Mariscos crudos o mal cocinados; emparedados, ensaladas, etc.
                td Contaminación fecal humana, directa o a través del agua
                td Cocinando muy bien los mariscos; higiene general
              
              tr 
                td.text-bold Gastroenteritis viral (virus tipo Norwalk)
                td 1-2 días (1-2 días)
                td Náuseas, vómitos, diarrea, dolores, dolores de cabeza, fiebre leve
                td Mariscos crudos o mal cocinados; emparedados, ensaladas, etc.
                td Contaminación fecal humana, directa o a través del agua
                td Cocinando muy bien los mariscos; higiene general
              
              tr 
                td.text-bold Gastroenteritis viral (rotavirus)
                td 1-3 días (4-6 días)
                td Diarrea, especialmente en bebés y niños
                td Alimentos crudos o mal manejo de los alimentos
                td Probable contaminación fecal humana
                td Higiene general
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
