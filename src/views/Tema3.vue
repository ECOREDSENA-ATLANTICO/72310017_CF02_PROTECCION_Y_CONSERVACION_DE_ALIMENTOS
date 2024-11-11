<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Aseguramiento de la calidad alimentaria

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-2 El Aseguramiento de la Calidad Alimentaria se centra en establecer y mantener altos estándares de seguridad y calidad en todos los aspectos de la producción y distribución de alimentos. Este componente crucial implica la integración de sistemas de gestión de calidad, tales como el Análisis de Peligros y Puntos Críticos de Control (HACCP), que ayudan a identificar y mitigar riesgos antes de que los productos lleguen al mercado. La implementación de regímenes de control riguroso y auditorías continuas, junto con la capacitación del personal, asegura que los alimentos no solo cumplan con las normativas legales, sino que también superen las expectativas de calidad y seguridad de los consumidores.
            
    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Codex Alimentarius
          img.pst(src='@/assets/curso/images/titulos/img_10.png', alt='') 

    .row.justify-content-center.align-items-center.mb-2.tarjetas_ordenadas
      .col-lg-8.mb-3
        p El <em>Codex Alimentarius</em>, o código alimentario, se ha convertido en un punto de referencia mundial para los consumidores, los productores y elaboradores de alimentos, los organismos nacionales de control de los alimentos y el comercio alimentario internacional. Su repercusión sobre el modo de pensar de quienes intervienen en la producción y elaboración de alimentos y quienes los consumen ha sido enorme. Su influencia se extiende a todos los continentes y su contribución a la protección de la salud de los consumidores y a la garantía de unas prácticas equitativas en el comercio alimentario es incalculable.
      .col-lg-4.mb-3
        figure
          img(src='@/assets/curso/images/tema3/img_2.png', alt='Texto que describa la imagen')

    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-4(data-aos="fade-right")
        h3.bgr_3.position-relative Recomendaciones de la comisión del <em>Codex Alimentarius</em>
          img.pst(src='@/assets/curso/images/titulos/img_11.png', alt='') 

    .row.justify-content-center.align-items-center.mb-2.fondo_2_4
      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/images/tema3/img_3.png', alt='Texto que describa la imagen')    
      .col-md-8.mb-3
        p.mb-3 La comisión del <em>Codex Alimentarius</em> es el más alto organismo internacional en materia de normas de alimentación. La importancia del Codex Alimentarius para la protección de la salud de los consumidores fue subrayada por la Resolución 39/248 de 1985 de las Naciones Unidas; en dicha Resolución se adoptaron directrices para elaborar y reforzar las políticas de protección del consumidor.
        p.mb-3 En las directrices se recomienda que, al formular políticas y planes nacionales relativos a los alimentos, los gobiernos tengan en cuenta la necesidad de seguridad alimentaria de todos los consumidores y apoyen, en la medida de lo posible, adopten las normas del Codex Alimentarius o; en su defecto, otras normas alimentarias internacionales de aceptación general.

        .cajon.bg-5.p-4.mb-3
          p.mb-0 La comisión del <em>Codex Alimentarius</em>, es el órgano competente para la compilación de normas, códigos de prácticas, directrices y recomendaciones que constituyen el <em>Codex Alimentarius</em>. Desde la primera publicación, el modo de funcionamiento <em>Codex Alimentarius</em> significa “Código de alimentación” y es la compilación de todas las normas, códigos de comportamientos, directrices y recomendaciones de la Comisión del Codex Alimentarius. La Comisión del <em>Codex Alimentarius</em> es el más alto organismo internacional en materia de normas de alimentación.

        p Desde la primera publicación, el modo de funcionamiento del Codex ha sufrido numerosas modificaciones. La publicación “Que es el Codex” está disponible en inglés, francés, español, árabe, chino y ruso.  

    .bg_img_0.mb-3
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.mb-3
          .tarjeta.bg-7.p-3
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/images/tema3/img_4.png").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1.text-naranja <em>Codex Alimentarius</em> 
                    p.text-small.mb-0.text-white Lo invitamos a visitar el siguiente el sitio Web, para conocer más sobre el <em>Codex Alimentarius</em>.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.fao.org/fao-who-codexalimentarius/codex-texts/es/" target="_blank")
                      span Ir al sitio
                      i.fas.fa-link

    .row.align-items-center.justify-content-center.mb-3.ps-2.fondo_2_4(data-aos="zoom-in-down")
      .col-md-8.mb-3
        p.mb-3 Los Principios generales del Codex de higiene de los alimentos sientan sólidas bases para garantizar la higiene de los alimentos, siguiendo la cadena alimentaria desde la producción primaria hasta el consumidor final y resaltando los controles claves de higiene necesarios en cada etapa. También recomiendan aplicar, en lo posible, una metodología basada en el HACCP, como la que se describe en el Sistema de Análisis de Peligros y de Puntos Críticos de Control (HACCP) y Directrices para su Aplicación [Anexo al Código Internacional Recomendado de Prácticas - Principios Generales de Higiene de los Alimentos, CAC/RCP-1 (1969), Rev. 3 (1997)].
        p.mb-3 Se reconoce internacionalmente que tales controles son esenciales para asegurar la inocuidad y aptitud de los alimentos para el consumo y los principios generales se recomiendan tanto a los gobiernos como a la industria y los consumidores.
        p.mb-3 La finalidad del <em>Codex Alimentarius</em> es garantizar alimentos inocuos y de calidad a todas las personas y en cualquier lugar. El comercio internacional de alimentos existe desde hace miles de años, pero hasta no hace mucho, los alimentos se producían, vendían y consumían en el ámbito local. En el último siglo, la cantidad de alimentos comercializados internacionalmente creció y, hoy, una cantidad y variedad de alimentos nunca imaginada circula por el planeta.

      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/images/tema3/img_5.png', alt='Texto que describa la imagen').mx-auto 
      
      .col-md-12.mb-3
        .cajon.color-acento-contenido.p-4.mb-2
          p.mb-0 El <em>Codex Alimentarius</em> contribuye, a través de sus normas, directrices y códigos de prácticas alimentarias internacionales, a la inocuidad, la calidad y la equidad en el comercio internacional de alimentos. Los consumidores pueden confiar en que los productos alimentarios que compran son inocuos y de calidad y los importadores en que los alimentos que han encargado se ajustan a sus especificaciones. 

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down")
      .col-md-12.mb-4
        .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 3. 
            span Proceso para el trámite de una norma del <em>Codex Alimentarius</em>
        
        .row.justify-content-center
          .col-md-12
            figure
              img.mb-3(src='@/assets/curso/images/tema3/img_6.png', alt='Texto que describa la imagen').mx-auto
              figcaption Fuente: https://www.fao.org/fileadmin/user_upload/codexalimentarius/photo-archive/Infographics/8_tramites.jpg 

    .row.align-items-center.justify-content-center.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-4(data-aos="fade-right")
        h3.bgr_3.position-relative Medidas sanitarias de seguridad en Colombia
          img.pst(src='@/assets/curso/images/titulos/img_12.png', alt='') 

    .row.justify-content-center.align-items-center.mb-3
      .col-md-12
        p En Colombia se han logrado grandes avances en la prevención y control de enfermedades por el manejo del alimento, gracias a la integración y vigilancia que desde el INVIMA reliza el Ministerio de Salud.

    .tarjeta.tarjeta.fondo_1_2.p-4.slyder_1.bg-01.mb-5.slyder_ordenado(data-aos="zoom-in-down")
      SlyderA(tipo="b")
        .tarjeta.bg-01.p-4
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3.tarjeta_figura
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Medidas sanitaras en el país

              p En Colombia el Ministerio de Salud es la autoridad de salud a nivel nacional en materia sanitaria y de inocuidad de los alimentos, esta regulación se hace a través del INVIMA Instituto Nacional de Vigilancia de Medicamentos y Alimentos, quien es responsable de conducir el control de inocuidad de los alimentos, en el marco de sus competencias, la vigilancia sanitaria de los alimentos elaborados industrialmente, de los elaborados y comercializados en puntos de venta publica, en si la venta, expendio, comercialización y transporte de los alimentos.

            .col-md-6
              figure
              img(src='@/assets/curso/images/tema3/img_7.png', alt='Texto que describa la imagen').mx-auto

        .tarjeta.bg-01.p-4
          .row.justify-content-center.align-items-center.my-lg-4.p-3.tarjeta_figura
            .col-md-6.mb-4.mb-md-0
      
              h3.mb-3 Vigilancia y control

              p De igual manera, es el ente encargado de vigilar las fábricas y a las personas o empresas que traen productos de otros países, como alimentos, entre otros productos, para que sean de buena calidad, estén en las condiciones necesarias para cumplir su función y no perjudiquen nuestra salud. Otro control que se debe realizar, es a todos los alimentos que se comercializan en la vía pública; ya que se consideran al mismo tiempo un problema, un desafío y una oportunidad para el desarrollo. El problema es asegurar la calidad e inocuidad de los alimentos que se venden.

            .col-md-6
              figure
                img(src='@/assets/curso/images/tema3/img_8.png', alt='Texto que describa la imagen').mx-auto

        .tarjeta.bg-01.p-4
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3.tarjeta_figura
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Evolución del marco jurídico

              p La oportunidad radica en el fortalecimiento de los hábitos alimentarios tradicionales y locales, así como en el desarrollo de pequeñas industrias y de estructuras cooperativas de comercialización, y fuente de empleo. El desafío es proporcionar a las autoridades gubernamentales y municipales los medios necesarios para garantizar la inocuidad y la calidad de dichos alimentos y estimular al mismo tiempo el desarrollo de este sector.

            .col-md-6
              figure
                img(src='@/assets/curso/images/tema3/img_9.png', alt='Texto que describa la imagen').mx-auto

        .tarjeta.bg-01.p-4
          .row.ordenar_tarjeta.justify-content-center.align-items-center.my-lg-4.p-3.tarjeta_figura
            .col-md-6.mb-4.mb-md-0
              h3.mb-3 Distribución y venta

              p El marco legal para la higiene y seguridad alimentaria en Colombia se ha desarrollado a través de varias resoluciones y decretos, evolucionando para incorporar mejores prácticas y estándares internacionales, se presentan sus variaciones y cambios acordes a la normatividad global.

            .col-md-6
              figure
                img(src='@/assets/curso/images/tema3/img_9_1.png', alt='Texto que describa la imagen').mx-auto

    h5.text-center.mb-4 Aquí se presenta un breve recorrido de la evolución del sistema jurídico que reglamenta las medidas sanitarias en relación con la manipulación de elementos.

    .bg_img_2
      .row.justify-content-center(data-aos="zoom-in-down")
        .col-lg-10.order_linea_tiempo
          PasosA.color-acento-contenido.mb-3()
            .row
              .col-lg
                h3 Ley 9 de 1979 (Código Sanitario Nacional)
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Descripción: establece las normas generales de salud pública en Colombia, incluyendo regulaciones para la producción, procesamiento, y comercialización de alimentos.
                  li 
                    i.lista-ul__vineta
                    | Impacto: sentó las bases para la regulación moderna de alimentos, destacando la importancia de la inocuidad y calidad.

              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/images/tema3/img_10.png', alt='').img125

            .row
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/images/tema3/img_11.png', alt='').img1125
              .col-lg
                h3 Decreto 3075 de 1997
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Función: reglamenta las condiciones sanitarias que deben cumplir los establecimientos dedicados a alimentos, enfatizando la aplicación de BPM.
                  li 
                    i.lista-ul__vineta
                    | Características: introduce directrices específicas para el manejo higiénico de alimentos y fortalece la infraestructura de control sanitario.

            .row
              .col-lg
                h3 Resolución 2674 de 2013
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Objetivo: actualiza y especifica los requisitos que deben seguir los establecimientos de alimentos, siguiendo principios de BPM.
                  li 
                    i.lista-ul__vineta
                    | Contenido: detalla condiciones de higiene, almacenamiento, y manipulación, además de establecer criterios para la capacitación de personal y normativas de etiquetado.
                  li 
                    i.lista-ul__vineta
                    | Vigilancia: bajo la supervisión del Instituto Nacional de Vigilancia de Medicamentos y Alimentos (Invima).

              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/images/tema3/img_12.png', alt='').img125

            .row
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/images/tema3/img_13.png', alt='').img125
              .col-lg
                h3 Resolución 719 de 2015
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Propósito: modifica y complementa aspectos de la Resolución 2674, ajustando algunas normativas para adaptarse a cambios tecnológicos y científicos recientes en la producción de alimentos.

            .row
              .col-lg
                h3 Resolución 810 de 2021
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Innovación: introduce criterios más estrictos para el etiquetado nutricional y declaraciones de propiedades saludables, enfatizando la transparencia y protección al consumidor.
                    
              .col-auto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/images/tema3/img_14.png', alt='').img125


    .row.align-items-center.justify-content-star.mb-1.ps-2(data-aos="zoom-in-down")
      .div.mb-4(data-aos="fade-right")
        h3.bgr_3.position-relative Supervisión por el Invima
          img.pst(src='@/assets/curso/images/titulos/img_12.png', alt='') 

    p.mb-3 El Invima es el organismo encargado de vigilar y aplicar estas regulaciones. Se asegura de que las industrias alimentarias cumplan con los estándares establecidos, mediante inspecciones regulares y la implementación de normativas que protejan la salud pública.               

    .row.justify-content-center.mb-3.tarjetas_ordenadas_linea(data-aos="zoom-in-down")
      h4.text-center.mb-4 Línea de tiempo de la legislación en Colombia 
      .col-lg-8.mb-4
        LineaTiempoD
          p(numero="1" titulo="1979") Ley 9 de 1979 establece el marco sanitario nacional.
          p(numero="2" titulo="1997") Decreto 3075 regula las condiciones sanitarias en establecimientos alimentarios.
          p(numero="3" titulo="2013") Resolución 2674 actualiza requisitos de BPM.
          p(numero="4" titulo="2015") Resolución 719 ajusta aspectos técnicos de la resolución anterior.
          p(numero="5" titulo="2021") Resolución 810 introduce nuevos criterios de etiquetado.
          
      .col-lg-4.mb-4
        figure
          img(src="@/assets/curso/images/tema3/img_15.png", alt="alt")

    .row.justify-content-center(data-aos="zoom-in-down")
      .col-lg-12.mb-4
        .cajon.bg-3.p-4
          p.mb-0 La implementación del sistema HACCP requiere un compromiso continuo de todos los involucrados en la producción y distribución de alimentos. Es una herramienta esencial para garantizar la seguridad alimentaria y proteger la salud de los consumidores. 


</template>

<script>
export default {
  name: 'Tema3',
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
