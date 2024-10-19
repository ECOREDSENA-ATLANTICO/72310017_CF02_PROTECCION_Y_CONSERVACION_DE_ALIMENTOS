<template>
  <div class="tarjeta--blanca">
    <div class="row align-items-center mb-4">
      <div class="col-auto">
        <img src="@/assets/componentes/icon-actividad.svg" alt="" />
      </div>
      <div class="col ">
        <h2 class="titulo-tercero mb-0">
          {{ cuestionario.titulo }}
        </h2>
        <p class="mb-0" v-html="cuestionario.introduccion"></p>
      </div>
    </div>
    <div class="tarjeta tarjeta--lightest-gray p-4 p-md-5">
      <ActividadResultados
        v-if="respuestas.length === preguntas.length"
        :respuestas="respuestas"
      />
      <ActividadPregunta
        v-else
        :pregunta="preguntaSelected"
        @respuestaSelected="onRrespuestaSelected"
      />
    </div>
    <ActividadBarraAvance
      :pregunta-index="preguntaSelectedIdx"
      :preguntas-count="preguntas.length"
      :respuestas-length="respuestas.length"
      :continuar-disabled="continuarDisabled"
      class="mx-4 mx-md-5"
      @continuar="onContinuar"
      @reiniciar="onReiniciar"
    />
  </div>
</template>

<script>
import ActividadPregunta from './ActividadPregunta'
import ActividadBarraAvance from './ActividadBarraAvance'
import ActividadResultados from './ActividadResultados'
export default {
  name: 'Actividad',
  components: {
    ActividadPregunta,
    ActividadBarraAvance,
    ActividadResultados,
  },
  props: {
    cuestionario: {
      type: Object,
      required: true,
    },
    mezclarRespuestas: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    intentos: 0,
    preguntaSelectedIdx: 0,
    respuestaActual: {},
    respuestas: [],
    continuarDisabled: true,
  }),
  computed: {
    preguntas() {
      const { preguntas, barajarPreguntas } = this.cuestionario
      if (!preguntas) return []
      const preguntasFinales = barajarPreguntas
        ? this.shuffle(preguntas)
        : preguntas
      return preguntasFinales.map(pregunta => ({
        ...pregunta,
        opciones: pregunta.barajarRespuestas
          ? this.shuffle(pregunta.opciones)
          : pregunta.opciones,
        intentos: this.intentos,
      }))
    },
    preguntaSelected() {
      return this.preguntas[this.preguntaSelectedIdx]
    },
    // continuarDisabled() {
    //   return !this.respuestas.some(r => r.id === this.preguntaSelected.id)
    // },
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length
      let randomIndex
      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }
      return array
    },
    onRrespuestaSelected(respuestaEsCorrecta) {
      this.continuarDisabled = false
      this.respuestaActual = {
        id: this.preguntaSelected.id,
        esCorrecta: respuestaEsCorrecta,
      }
    },
    onContinuar() {
      this.continuarDisabled = true
      if (this.respuestaActual.id) {
        const idx = this.respuestas.findIndex(
          r => r.id === this.preguntaSelected.id,
        )
        if (idx === -1) {
          this.respuestas.push(this.respuestaActual)
        } else {
          this.respuestas[idx] = this.respuestaActual
        }
      }

      if (this.preguntaSelectedIdx < this.preguntas.length - 1) {
        this.preguntaSelectedIdx += 1
      }
    },
    onReiniciar() {
      this.preguntaSelectedIdx = 0
      this.respuestas = []
      this.respuestaActual = {}
      this.intentos += 1
    },
  },
}
</script>

<style lang="sass" scoped>
.boton--disabled
  opacity: 0.5
  pointer-events: none

.tarjeta--lightest-gray
  //background: #eaeff3
  border: 3px solid #dce4eb
</style>
