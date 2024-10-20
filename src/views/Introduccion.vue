<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-justify.align-items-justify.fondo.mb-3
      
      p.mb-4 Estimado aprendiz bienvenido al componente formativo “Seguridad alimentaria, enfermedades y prevención de riesgos.”
      
      .row.justify-content-justify.align-items-justify.fondo.mb-2
        figure.mb-3(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/images/introduccion/img_1.png', alt='Imagen Decorativa')

          //- .video
          //- <iframe width="560" height="315" src="https://www.youtube.com/embed/fYBTaOYlEvE" title="Producción pecuaria agroecológica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      .row.justify-content-center.align-items-center.mb-4
        .col-md-8 
          .cajon.color-acento-contenido.g_18.mb-3
            .row
              .col-lg-12.p-4.ps-5 
                p.m-0.mt-4 Este componente proporciona una visión clara sobre las enfermedades transmitidas por alimentos, explicando cómo estos pueden actuar como vehículos de contaminación por agentes químicos o biológicos. Se destacan los microorganismos responsables y las estrategias para gestionar los riesgos, como la pasteurización, la cocción adecuada, las buenas prácticas de manufactura y el mantenimiento de la cadena de frío. También se resalta la importancia de sistemas de gestión como el análisis de peligros y puntos críticos de control (HACCP) y el cumplimiento de normativas internacionales. Finalmente, se enfatiza la adopción de recomendaciones de higiene de la OMS, como el lavado de manos y el uso de materias primas seguras, para prevenir enfermedades y proteger la salud pública.
                
          p Este componente explora las enfermedades transmitidas por alimentos (ETA), su clasificación, causas y cómo prevenirlas. Se profundiza en los principales agentes causales, como bacterias, virus, hongos y parásitos, y se analiza cómo estos afectan la seguridad alimentaria. Además, se introduce el sistema HACCP, una herramienta fundamental para la gestión de riesgos en la producción de alimentos, y se destaca la importancia de las normas del Codex Alimentarius para garantizar la inocuidad alimentaria a nivel nacional e internacional.

        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/images/introduccion/img_2.png', alt='Imagen Decorativa')          
  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
