<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Seguridad alimentaria, enfermedades y prevención de riesgos',
      titulo:
        'Exploremos las ETA, su relación con las HACCP y las regulaciones de seguridad.',
      introduccion:
        '<b> Objetivo:</b> Apropiar los conceptos y regulaciones de Seguridad alimentaria, enfermedades para prevenir riesgos. ',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el organismo competente para la compilación de normas, códigos de prácticas, directrices y recomendaciones sobre seguridad alimentaria?',
          imagen: require('@/assets/componentes/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comisión del Codex Alimentarius.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organización Mundial de la Salud (OMS).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sistema de Análisis de Peligros y Puntos de Control Crítico (HACCP).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué organismo se encarga de vigilar y aplicar las regulaciones de seguridad alimentaria en Colombia?',
          imagen: require('@/assets/componentes/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comisión del Codex Alimentarius.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organización Mundial de la Salud (OMS).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sistema de Análisis de Peligros y Puntos de Control Crítico (HACCP).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué componente esencial implica la implementación de prácticas destinadas a reducir los peligros potenciales en la producción alimentaria?',
          imagen: require('@/assets/componentes/img_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Control de riesgos.', esCorrecta: true },
            { id: 'b', texto: 'Sistema HACCP.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Buenas Prácticas de Manufactura (BPM).',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Análisis de peligros.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el enfoque sistemático para garantizar la seguridad alimentaria mediante la identificación, evaluación y control de riesgos significativos en el proceso productivo de alimentos?',
          imagen: require('@/assets/componentes/img_4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Sistema HACCP.', esCorrecta: true },
            { id: 'b', texto: 'Control de riesgos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Buenas Prácticas de Manufactura (BPM).',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Análisis de peligros.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué es un alimento contaminado?',
          imagen: require('@/assets/componentes/img_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un alimento que contiene agentes y/o sustancias extrañas de cualquier naturaleza en cantidades superiores a las permitidas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un alimento que en razón de sus características de composición, favorece el crecimiento microbiano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un alimento que no cumple con las normas de higiene.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un alimento que se ha expuesto a temperaturas inadecuadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de alimento representa un mayor riesgo para la vigilancia en salud pública?',
          imagen: require('@/assets/componentes/img_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un alimento contaminado.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Un alimento que no cumple con las normas de higiene.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un alimento que se ha expuesto a temperaturas inadecuadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un alimento con un alto contenido de grasa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué define a una enfermedad transmitida por alimentos (ETA)?',
          imagen: require('@/assets/componentes/img_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Una enfermedad causada por la ingestión de alimentos contaminados con agentes patógenos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cualquier enfermedad relacionada con el consumo de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una enfermedad que se transmite por contacto directo con personas infectadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un síndrome originado por la ingestión de alimentos que no cumplen con las normas de higiene.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes grupos poblacionales es más vulnerable a las ETA?',
          imagen: require('@/assets/componentes/img_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Personas con un sistema inmunológico debilitado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personas que consumen alimentos de origen animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Personas que viajan con frecuencia.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Todas las anteriores.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué impacto económico pueden tener los brotes de ETA?',
          imagen: require('@/assets/componentes/img_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'Pérdida de ingresos para los negocios relacionados con la comida.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Disminución del turismo.', esCorrecta: false },
            { id: 'c', texto: 'Aumento del desempleo.', esCorrecta: false },
            { id: 'd', texto: 'Todas las anteriores.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué factor ha contribuido al aumento de la propagación de enfermedades transmitidas por alimentos a nivel global?',
          imagen: require('@/assets/componentes/img_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto:
                'La globalización del comercio internacional de alimentos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El aumento del consumo de alimentos procesados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La disminución de las normas de seguridad alimentaria.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Todas las anteriores.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicidades! ¡Has demostrado un buen conocimiento sobre Seguridad alimentaria, enfermedades y prevención de riesgos! Sigue practicando para asegurar la inocuidad de los alimentos.',
      mensaje_final_reprobado:
        '¡Buen trabajo! ¡Sigue aprendiendo sobre Seguridad alimentaria, enfermedades para prevenir riesgos!',
    },
  }),
  computed: {},
  methods: {},
}
</script>
