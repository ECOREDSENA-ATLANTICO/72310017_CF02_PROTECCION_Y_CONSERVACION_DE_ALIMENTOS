<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Control de riesgos en la producción de alimentos
      
    .row.justify-content-center.align-items-center.mb-3.fondo_2_4

      .col-md-8.mb-3
        p.mb-3 El control de riesgos en la producción de alimentos es un componente esencial que implica la implementación de prácticas y protocolos destinados a identificar, evaluar y gestionar los peligros potenciales que pueden surgir a lo largo del proceso de producción alimentaria. Esto incluye desde la obtención de materias primas seguras hasta la distribución final de los productos. Un sistema clave en este proceso es el Análisis de Peligros y Puntos Críticos de Control (HACCP), que es fundamental para la identificación y gestión eficaz de riesgos. 

        .cajon.color-acento-contenido.p-4
          p.mb-0 El HACCP proporciona un enfoque sistemático para anticipar y prevenir problemas antes de que ocurran, asegurando así que se implementen medidas correctivas en puntos claves del proceso de producción. Mediante el uso de tecnologías avanzadas y la aplicación de procedimientos de control como la pasteurización y la monitorización de la cadena de frío, junto con un sistema HACCP robusto, se busca reducir el riesgo de contaminación, garantizando la seguridad de los alimentos que llegan al consumidor.

      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/images/tema2/img_1.png', alt='Texto que describa la imagen')    
      
    .bg_img_2
      .row.align-items-center.justify-content-center.mb-0
        .col-md-10.mb-3
          .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 1. 
              span Pasos previos a la aplicación del HACCP  

          figure
            img.mb-3(src='@/assets/curso/images/tema2/img_2.png', alt='Texto que describa la imagen').mx-auto.w-75
            figcaption Fuente: https://www.portaldeinocuidad.com/web/que-es-el-haccp/

    Separador

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-4(data-aos="fade-right")
        h3.bgr_3.position-relative El Sistema HACCP 
          img.pst(src='@/assets/curso/images/titulos/img_5.png', alt='') 

    TabsB.color-rosado.mb-4.ordernar_tabs
      .py-4.py-md-5(titulo="Definición" :icono="require('@/assets/curso/images/tema2/img_3.png')")
        .row.p-4
          .col-md-7
            h4 
            p El sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP <em>Hazard Analysis and Critical Control Points</em>), surgió en la década de 1960 con el objetivo de proteger la salud de los astronautas al prevenir enfermedades transmitidas por alimentos durante las misiones espaciales. Este método, desarrollado inicialmente por una industria alimentaria dedicada a elaborar alimentos para la NASA, se ha transformado en un estándar de seguridad alimentaria global, ampliamente adoptado por su eficacia en asegurar la inocuidad de los alimentos.
        
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/images/tema2/img_8.png', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Concepto" :icono="require('@/assets/curso/images/tema2/img_4.png')")
        .row.p-4
          .col-md-7
            h4 
            p El sistema HACCP identifica y controla los puntos críticos en el proceso de producción donde existen riesgos significativos de contaminación o proliferación de microorganismos en los alimentos. Estos puntos críticos de control son áreas donde se implementan medidas de vigilancia para evitar que los alimentos se contaminen, asegurando que todas las operaciones peligrosas sean monitoreadas y controladas (Codex Alimentarius, CAC/RCP-1, 1969, Rev. 3, 1997).
            
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/images/tema2/img_9.png', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Aplicación" :icono="require('@/assets/curso/images/tema2/img_5.png')")
        .row.p-4
          .col-md-7
            h4 
            p El plan HACCP debe ser adaptado a las características específicas de cada establecimiento y producto, ajustándose a sus condiciones particulares de elaboración. Este enfoque permite concentrar los esfuerzos en corregir los fallos más críticos que comprometen la seguridad y calidad de los alimentos, priorizando la prevención de enfermedades o alteraciones en los productos por sobre cuestiones estéticas o no esenciales.
            
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/images/tema2/img_10.png', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Beneficios" :icono="require('@/assets/curso/images/tema2/img_6.png')")
        .row.p-4
          .col-md-7
            h4 
            p El Codex Alimentarius describe al HACCP como un sistema que no solo identifica riesgos específicos, sino que también implementa medidas correctivas para asegurar la inocuidad alimentaria. A diferencia de otros métodos, el HACCP se enfoca en la prevención y controles preventivos en vez de depender exclusivamente de la inspección del producto final. 
            p Esto permite anticiparse a los peligros microbiológicos, físicos o químicos antes de que afecten la integridad del producto. Desde su implementación en la industria aeroespacial, el uso del HACCP se ha expandido a otras áreas, como la preparación de comidas para aerolíneas, cadenas de comida rápida, hoteles, y servicios de catering, entre otros. Suéxito en estos sectores se debe a su capacidad para asegurar niveles elevados de seguridad alimentaria, reduciendo riesgos y mejorando la confianza del consumidor en los productos.

          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/images/tema2/img_11.png', alt='Texto que describa la imagen')

      .py-4.py-md-5(titulo="Tendencias y regulaciones" :icono="require('@/assets/curso/images/tema2/img_7.png')")
        .row.p-4
          .col-md-7
            h4 
            p En numerosos países, el sistema HACCP es ya una exigencia legal, mientras que en otros, incluyendo el nuestro, aunque su aplicación es actualmente voluntaria, se observa una creciente tendencia hacia la obligatoriedad debido a los beneficios que ofrece en términos de seguridad alimentaria. El HACCP es un método proactivo que enfoca toda la cadena de producción de alimentos hacia la prevención eficiente y efectiva de riesgos, asegurando tanto la seguridad del consumidor como la calidad del producto a lo largo de todo el proceso de fabricación.
            
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/images/tema2/img_12.png', alt='Texto que describa la imagen')
      
    .row.justify-content-center.align-items-center.mb-3
      .col-md-12
        .cajon.bg-3.p-4
          p.mb-0 El HACCP es un método proactivo que enfoca la cadena de producción de alimentos hacia la prevención eficiente y efectiva de riesgos, asegurando la seguridad del consumidor y la calidad del producto en todo el proceso de fabricación.
          
    Separador

    .bg_img_2.mb-3
      .row.align-items-center.justify-content-star.mb-3.ps-2(data-aos="zoom-in-down")
        .div.mb-4(data-aos="fade-right")
          h3.bgr_3.position-relative Principios fundamentales del HACCP
            img.pst(src='@/assets/curso/images/titulos/img_6.png', alt='') 

      .row.align-items-center.justify-content-center.mb-0.fondo_1
        .col-md-10.mb-2
          .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 2. 
              span Ciclo de principios aplicados del HACCP
          
          .row.justify-content-center.align-items-center.ordenar_figura
            .col-md-6.mb-3
              figure
                img.mb-3(src='@/assets/curso/images/tema2/img_13.png', alt='Texto que describa la imagen').mx-auto
                figcaption Fuente: https://www.portaldeinocuidad.com/web/que-es-el-haccp/
            .col-md-6.mb-3
              .tarjeta.color_blanco.p-3
                p El sistema HACCP (<em>Hazard Analysis and Critical Control Points</em> ) es un enfoque sistemático para garantizar la seguridad alimentaria mediante la identificación, evaluación y control de riesgos significativos en el proceso productivo de alimentos. A continuación, se detallan los siete principios fundamentales del HACCP:

    .row.align-items-center.justify-content-center.mb-1
      .col-md-12.mb-2
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3. 
            span Principios fundamentales del HACCP
        
        .tabla-b.color-acento-contenido.mb-2
          table
            caption Fuente: Elaboración propia
            thead.encabezado-tabla
              tr 
                th Principio/th 
                th Descripción/th 
                th Propósito/th 

            tbody 
              tr 
                td.text-bold 1. Análisis o Identificación de peligros
                td Identificar los peligros potenciales (biológicos, químicos, físicos) en cada etapa del proceso alimentario.
                td Determinar qué riesgos podrían afectar la seguridad de los alimentos.
              
              tr 
                td.text-bold 2. Identificación de Puntos Críticos de Control (PCC)
                td Determinar los puntos, etapas o procedimientos donde se pueden controlar los riesgos identificados.
                td Controlar y minimizar o eliminar riesgos.
              
              tr 
                td.text-bold 3. Establecimiento de límites críticos
                td Definir los límites que aseguran que cada PCC esté bajo control con indicadores específicos.
                td Diferenciar entre condiciones seguras y no seguras.
              
              tr 
                td.text-bold 4. Establecimiento de un sistema de vigilancia
                td Implementar métodos para monitorear los PCC y asegurar su control constante.
                td Garantizar que todos los PCC estén bajo vigilancia y activar acciones correctivas si es necesario.
              
              tr 
                td.text-bold 5. Establecimiento de acciones correctivas
                td Preparar planes para corregir problemas cuando un PCC no es controlado adecuadamente.
                td Restaurar el control y prevenir alimentos inseguros.
              
              tr 
                td.text-bold 6. Establecimiento de un sistema de verificación
                td Realizar evaluaciones y ensayos para confirmar que el sistema HACCP funciona correctamente.
                td Asegurar que el sistema es efectivo en todo momento.
              
    Separador

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-4(data-aos="fade-right")
        h3.bgr_3.position-relative Identificación de peligros
          img.pst(src='@/assets/curso/images/titulos/img_7.png', alt='') 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema2/img_14.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-2 El primer paso en el sistema HACCP es identificar los peligros potenciales que pueden afectar la inocuidad de los alimentos. Estos peligros pueden ser biológicos, químicos o físicos y pueden estar presentes en cualquier etapa de la producción, desde la cosecha hasta la distribución.
            p.mb-0 <br>A continuación, se presentan algunos ejemplos de peligros en la producción alimentaria.
    
    .row.mb-3.ordenar_img
      .col-lg-4.mb-3
        .tarjeta.bg-5.p-4.h-100.fondo_3
          img.w-25.mx-auto(src="@/assets/curso/images/tema2/img_15.png")
          h5 Biológicos
          p Bacterias (Salmonella, E. coli, Listeria), virus (hepatitis A, norovirus), hongos (Aspergillus, Penicillium) y parásitos. Estos pueden contaminar los alimentos durante su producción, procesamiento, manipulación, almacenamiento o distribución.
      .col-lg-4.mb-3
        .tarjeta.bg-6.fondo_2.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/images/tema2/img_16.png")
          h5 Químicos
          p Residuos de pesticidas, metales pesados, toxinas naturales (como las micotoxinas producidas por los hongos), sustancias químicas agregadas como aditivos o colorantes, y residuos de detergentes o desinfectantes.
      .col-lg-4.mb-3
        .tarjeta.bg-5.fondo_3.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/images/tema2/img_17.png")
          h5 Físicos
          p Objetos extraños como pedazos de metal, vidrio, plástico, madera, insectos, pelo, tierra o huesos, que pueden contaminar los alimentos durante su producción, procesamiento, manipulación, almacenamiento o distribución.
      .col-lg-4.mb-3
        .tarjeta.bg-6.fondo_2.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/images/tema2/img_18.png")
          h5 Contaminantes naturales
          p Micotoxinas, toxinas de algunos moluscos que afecta los productos pesqueros, bifenilos y alcaloides de algunos alimentos que ocasionan cáncer de vías digestivas, intoxicaciones y alergias.
      .col-lg-4.mb-3
        .tarjeta.bg-5.fondo_3.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/images/tema2/img_19.png")
          h5 Agroquímicos
          p Comprende sustancias de uso veterinario, antibióticos, pesticidas, funguicidas, insecticidas, fertilizantes que afectan las carnes, frutas y hortalizas, los cereales, las leches y ocasionan por exposición prolongada tumores, deformaciones congénitas, resistencia a los antibióticos, trastornos fisiológicos.
      .col-lg-4.mb-3
        .tarjeta.bg-6.fondo_2.p-4.h-100
          img.w-25.mx-auto(src="@/assets/curso/images/tema2/img_20.png")
          h5 Aditivos
          p Colorantes, resaltadores, sabor, conservantes, nitritos.

          h5 Otras sustancias
          p Como pinturas, lubricantes, residuos de detergentes y desinfectantes.
    
              
    Separador

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-4(data-aos="fade-right")
        h3.bgr_3.position-relative Establecimiento de Puntos Críticos de Control (PCC)
          img.pst(src='@/assets/curso/images/titulos/img_8.png', alt='') 


    .row.justify-content-center.mb-3
      .col-lg-12.mb-3
        figure
          img(src="@/assets/curso/images/tema2/img_21.png", alt="alt")

      p Una vez identificados los peligros, el siguiente paso es determinar los puntos críticos de control (PCC). Un PCC es un punto en el proceso de producción donde se puede prevenir o eliminar un peligro específico.


    h4.mb-4.text-center Ejemplos de PCC en diferentes etapas de la producción:
    .tarjeta.fondo_1_2.p-4.slyder_1.bg-01.mb-3.slyder_ordenado
      SlyderA(tipo="b")
        .tarjeta.bg-01.p-4
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-2
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Producción

              p Control de la calidad de las materias primas, incluyendo su origen, almacenamiento y transporte; implementación de prácticas agrícolas adecuadas, como el uso de pesticidas autorizados y en las cantidades correctas; y el control de plagas y animales.

            .col-md-6
              figure
              img(src='@/assets/curso/images/tema2/img_22.png', alt='Texto que describa la imagen')

        .tarjeta.bg-01.p-4
          .row.justify-content-center.align-items-center.my-lg-4.p-2
            .col-md-6.mb-4.mb-md-0
      
              h3.mb-3 Procesamiento

              p Control de la temperatura y tiempo de cocción, refrigeración y congelación; control del pH y la humedad; y la pasteurización o esterilización de los productos.

            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/img_23.png', alt='Texto que describa la imagen')

        .tarjeta.bg-01.p-4
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-2
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Manipulación

              p Lavado correcto de las manos y superficies; uso de utensilios limpios y separados para alimentos crudos y cocidos; almacenamiento adecuado de los alimentos, incluyendo la temperatura y la humedad; y la prevención de la contaminación cruzada.

            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/img_24.png', alt='Texto que describa la imagen')

        .tarjeta.bg-01.p-4
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-2
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Distribución y venta

              p Control de la cadena de frío durante el transporte y almacenamiento; y la correcta manipulación y exhibición de los alimentos en los puntos de venta.

            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/img_25.png', alt='Texto que describa la imagen')
              
    Separador

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-4(data-aos="fade-right")
        h3.bgr_3.position-relative Vigilancia y acciones correctivas
          img.pst(src='@/assets/curso/images/titulos/img_9.png', alt='') 

    p.mb-3 Para asegurar la efectividad del sistema HACCP, es necesario monitorizar los PCC y tomar acciones correctivas si se detectan desviaciones. 

    .row.justify-content-center.mb-3
      h4.text-center.mb-3 Cómo monitorear y controlar los PCC: 
      LineaTiempoD.mb-3
        .row(numero="1" titulo="Establecimiento de límites críticos").align-items-center 
          .col-md-8.mb-4.mb-md-0
            p.text-start Para cada PCC, se establecen límites críticos que determinan las condiciones de seguridad. Estos límites pueden ser de temperatura, tiempo, pH, humedad, etc.
              
          .col-md-4.mb-4
            figure
              img(src="@/assets/curso/images/tema2/img_26.png", alt="alt")

        .row(numero="2" titulo="Monitoreo continuo").align-items-center 
          .col-md-8.mb-4.mb-md-0
            p.text-start Se realiza un control continuo de los PCC para verificar que se cumplan los límites críticos establecidos.
              
          .col-md-4.mb-4
            figure
              img(src="@/assets/curso/images/tema2/img_27.png", alt="alt")

        .row(numero="3" titulo="Registro de datos").align-items-center 
          .col-md-8.mb-4.mb-md-0
            p.text-start Se registran todos los datos relacionados con el monitoreo de los PCC, incluyendo la fecha, hora, temperatura, etc.
              
          .col-md-4.mb-4
            figure
              img(src="@/assets/curso/images/tema2/img_28.png", alt="alt")
        
        .row(numero="4" titulo="Acciones correctivas").align-items-center 
          .col-md-8.mb-4.mb-md-0
            p.text-start Si se detecta una desviación del límite crítico, se deben tomar acciones correctivas para corregir el problema y evitar que se repita. Estas acciones pueden incluir la limpieza y desinfección del área, la eliminación del alimento contaminado, la re-cocción del alimento o la capacitación del personal.
              
          .col-md-4.mb-4
            figure
              img(src="@/assets/curso/images/tema2/img_29.png", alt="alt")
          
    .row.justify-content-center
      .col-lg-12.mb-4
        .cajon.bg-3.p-4
          p.mb-0 La implementación del sistema HACCP requiere un compromiso continuo de todos los involucrados en la producción y distribución de alimentos. Es una herramienta esencial para garantizar la seguridad alimentaria y proteger la salud de los consumidores. 

      .col-lg-10
        .tarjeta.bg-7.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/images/tema2/img_30.png").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1.text-naranja HACCP
                  p.text-small.mb-0.text-white Lo invitamos a visitar el siguiente el sitio Web, para conocer más sobre las HACCP.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.portaldeinocuidad.com/web/que-es-el-haccp/" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema2',
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
