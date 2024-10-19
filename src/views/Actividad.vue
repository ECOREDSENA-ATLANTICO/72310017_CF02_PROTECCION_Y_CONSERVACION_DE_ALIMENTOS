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
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion: '<b> Objetivo:</b> Texto de Word',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: 'Texto pregunta 1 con <strong>Negrita</strong> <em>Itálica</.',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opción 1', esCorrecta: true },
            { id: 'b', texto: 'Opción 2', esCorrecta: false },
            { id: 'c', texto: 'Opción 3', esCorrecta: false },
            { id: 'd', texto: 'Opción 4', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Texto pregunta 2',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Texto pregunta 3',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Opción 1', esCorrecta: true },
            { id: 'b', texto: 'Opción 2', esCorrecta: false },
            { id: 'c', texto: 'Opción 3', esCorrecta: false },
            { id: 'd', texto: 'Todas las anteriores', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
