(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"159b":function(e,t,a){var r=a("da84"),s=a("fdbc"),n=a("17c2"),o=a("9112");for(var i in s){var c=r[i],d=c&&c.prototype;if(d&&d.forEach!==n)try{o(d,"forEach",n)}catch(u){d.forEach=n}}},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,s=a("a640"),n=s("forEach");e.exports=n?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"2cc0":function(e,t,a){},"32bd":function(e,t,a){"use strict";a("4afc")},4298:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col "},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-auto"},[r("img",{attrs:{src:a("8da0"),alt:""}})])}],i=a("5530"),c=(a("d81d"),a("c740"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,r){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":r!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),d=[],u={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:function(){return{respuestaSelected:{}}},computed:{opcionesComputed:function(){if(!this.pregunta.opciones.length)return[];var e=this.respuestaSelected.id;return this.pregunta.opciones.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e})}))}},watch:{pregunta:function(){this.respuestaSelected={}}},methods:{onRespuestaSelected:function(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},l=u,p=(a("32bd"),a("2877")),m=Object(p["a"])(l,c,d,!1,null,"0d0c9f9a",null),f=m.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},b=[],v=(a("a9e3"),{name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth:function(){return"".concat((this.preguntaIndex+1)/this.preguntasCount*100,"%")}}}),C=v,h=(a("a631"),Object(p["a"])(C,g,b,!1,null,"7a0121ad",null)),x=h.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row align-items-center justify-content-around"},[r("div",{staticClass:"col-5"},[(e.aprobado,r("img",{attrs:{src:a("a46c"),alt:""}}))]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"d-flex align-items-center flex-column"},[r("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[r("h3",[e._v("¡BUEN TRABAJO!")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[r("h3",[e._v("VUELVE A INTENTARLO")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],r("hr",{staticClass:"w-100"}),r("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},j=[],A=(a("159b"),{name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas:function(){var e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach((function(t){t.esCorrecta?e.correctas++:e.incorrectas++})),e.porcentaje=e.correctas/e.total*100,e},aprobado:function(){return this.rtas.porcentaje>=70}}}),y=A,S=(a("aeef"),Object(p["a"])(y,_,j,!1,null,"360ec089",null)),O=S.exports,I={name:"Actividad",components:{ActividadPregunta:f,ActividadBarraAvance:x,ActividadResultados:O},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:function(){return{intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}},computed:{preguntas:function(){var e=this,t=this.cuestionario,a=t.preguntas,r=t.barajarPreguntas;if(!a)return[];var s=r?this.shuffle(a):a;return s.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{opciones:t.barajarRespuestas?e.shuffle(t.opciones):t.opciones,intentos:e.intentos})}))},preguntaSelected:function(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle:function(e){var t,a=e.length;while(a>0){t=Math.floor(Math.random()*a),a--;var r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e},onRrespuestaSelected:function(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar:function(){var e=this;if(this.continuarDisabled=!0,this.respuestaActual.id){var t=this.respuestas.findIndex((function(t){return t.id===e.preguntaSelected.id}));-1===t?this.respuestas.push(this.respuestaActual):this.respuestas[t]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar:function(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},E=I,P=(a("f212"),Object(p["a"])(E,n,o,!1,null,"1f7092aa",null)),M=P.exports,w={name:"ActividadDidactica",components:{Actividad:M},data:function(){return{cuestionario:{tema:"Seguridad alimentaria, enfermedades y prevención de riesgos",titulo:"Exploremos las ETA, su relación con las HACCP y las regulaciones de seguridad.",introduccion:"<b> Objetivo:</b> Apropiar los conceptos y regulaciones de Seguridad alimentaria, enfermedades para prevenir riesgos. ",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Cuál es el organismo competente para la compilación de normas, códigos de prácticas, directrices y recomendaciones sobre seguridad alimentaria?",imagen:a("66bb"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA).",esCorrecta:!1},{id:"b",texto:"Comisión del <em>Codex Alimentarius</em>.",esCorrecta:!0},{id:"c",texto:"Organización Mundial de la Salud (OMS).",esCorrecta:!1},{id:"d",texto:"Sistema de Análisis de Peligros y Puntos de Control Crítico (HACCP).",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Qué organismo se encarga de vigilar y aplicar las regulaciones de seguridad alimentaria en Colombia?",imagen:a("50ac"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA).",esCorrecta:!0},{id:"b",texto:"Comisión del <em>Codex Alimentarius</em>.",esCorrecta:!1},{id:"c",texto:"Organización Mundial de la Salud (OMS).",esCorrecta:!1},{id:"d",texto:"Sistema de Análisis de Peligros y Puntos de Control Crítico (HACCP).",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué componente esencial implica la implementación de prácticas destinadas a reducir los peligros potenciales en la producción alimentaria?",imagen:a("7464"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Control de riesgos.",esCorrecta:!0},{id:"b",texto:"Sistema HACCP.",esCorrecta:!1},{id:"c",texto:"Buenas Prácticas de Manufactura (BPM).",esCorrecta:!1},{id:"d",texto:"Análisis de peligros.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Cuál es el enfoque sistemático para garantizar la seguridad alimentaria mediante la identificación, evaluación y control de riesgos significativos en el proceso productivo de alimentos?",imagen:a("9cde"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Sistema HACCP.",esCorrecta:!0},{id:"b",texto:"Control de riesgos.",esCorrecta:!1},{id:"c",texto:"Buenas Prácticas de Manufactura (BPM).",esCorrecta:!1},{id:"d",texto:"Análisis de peligros.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Qué es un alimento contaminado?",imagen:a("50ac"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Un alimento que contiene agentes y/o sustancias extrañas de cualquier naturaleza en cantidades superiores a las permitidas.",esCorrecta:!0},{id:"b",texto:"Un alimento que en razón de sus características de composición, favorece el crecimiento microbiano.",esCorrecta:!1},{id:"c",texto:"Un alimento que no cumple con las normas de higiene.",esCorrecta:!1},{id:"d",texto:"Un alimento que se ha expuesto a temperaturas inadecuadas.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Qué tipo de alimento representa un mayor riesgo para la vigilancia en salud pública?",imagen:a("66bb"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Un alimento contaminado.",esCorrecta:!0},{id:"b",texto:"Un alimento que no cumple con las normas de higiene.",esCorrecta:!1},{id:"c",texto:"Un alimento que se ha expuesto a temperaturas inadecuadas.",esCorrecta:!1},{id:"d",texto:"Un alimento con un alto contenido de grasa.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué define a una enfermedad transmitida por alimentos (ETA)?",imagen:a("7464"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Una enfermedad causada por la ingestión de alimentos contaminados con agentes patógenos.",esCorrecta:!0},{id:"b",texto:"Cualquier enfermedad relacionada con el consumo de alimentos.",esCorrecta:!1},{id:"c",texto:"Una enfermedad que se transmite por contacto directo con personas infectadas.",esCorrecta:!1},{id:"d",texto:"Un síndrome originado por la ingestión de alimentos que no cumplen con las normas de higiene.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Cuál de los siguientes grupos poblacionales es más vulnerable a las ETA?",imagen:a("9cde"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Personas con un sistema inmunológico debilitado.",esCorrecta:!1},{id:"b",texto:"Personas que consumen alimentos de origen animal.",esCorrecta:!1},{id:"c",texto:"Personas que viajan con frecuencia.",esCorrecta:!1},{id:"d",texto:"Todas las anteriores.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Qué impacto económico pueden tener los brotes de ETA?",imagen:a("50ac"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Pérdida de ingresos para los negocios relacionados con la comida.",esCorrecta:!1},{id:"b",texto:"Disminución del turismo.",esCorrecta:!1},{id:"c",texto:"Aumento del desempleo.",esCorrecta:!1},{id:"d",texto:"Todas las anteriores.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Qué factor ha contribuido al aumento de la propagación de enfermedades transmitidas por alimentos a nivel global?",imagen:a("66bb"),barajarRespuestas:!1,opciones:[{id:"a",texto:"La globalización del comercio internacional de alimentos.",esCorrecta:!0},{id:"b",texto:"El aumento del consumo de alimentos procesados.",esCorrecta:!1},{id:"c",texto:"La disminución de las normas de seguridad alimentaria.",esCorrecta:!1},{id:"d",texto:"Todas las anteriores.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Felicidades! ¡Has demostrado un buen conocimiento sobre Seguridad alimentaria, enfermedades y prevención de riesgos! Sigue practicando para asegurar la inocuidad de los alimentos.",mensaje_final_reprobado:"¡Buen trabajo! ¡Sigue aprendiendo sobre Seguridad alimentaria, enfermedades para prevenir riesgos!"}}},computed:{},methods:{}},N=w,R=Object(p["a"])(N,r,s,!1,null,null,null);t["default"]=R.exports},"4afc":function(e,t,a){},"50ac":function(e,t,a){e.exports=a.p+"img/img_2.0e6f6df6.png"},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},5585:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),s=a("5899"),n="["+s+"]",o=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),c=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(o,"")),2&e&&(a=a.replace(i,"")),a}};e.exports={start:c(1),end:c(2),trim:c(3)}},"66bb":function(e,t,a){e.exports=a.p+"img/img_1.6d85b938.png"},7156:function(e,t,a){var r=a("861d"),s=a("d2bb");e.exports=function(e,t,a){var n,o;return s&&"function"==typeof(n=t.constructor)&&n!==a&&r(o=n.prototype)&&o!==a.prototype&&s(e,o),e}},7464:function(e,t,a){e.exports=a.p+"img/img_3.7d1cf21b.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},"9cde":function(e,t,a){e.exports=a.p+"img/img_4.bc7b4a42.png"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},a631:function(e,t,a){"use strict";a("d228")},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,a){"use strict";var r=a("83ab"),s=a("da84"),n=a("94ca"),o=a("6eeb"),i=a("5135"),c=a("c6b6"),d=a("7156"),u=a("c04e"),l=a("d039"),p=a("7c73"),m=a("241c").f,f=a("06cf").f,g=a("9bf2").f,b=a("58a8").trim,v="Number",C=s[v],h=C.prototype,x=c(p(h))==v,_=function(e){var t,a,r,s,n,o,i,c,d=u(e,!1);if("string"==typeof d&&d.length>2)if(d=b(d),t=d.charCodeAt(0),43===t||45===t){if(a=d.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+d}for(n=d.slice(2),o=n.length,i=0;i<o;i++)if(c=n.charCodeAt(i),c<48||c>s)return NaN;return parseInt(n,r)}return+d};if(n(v,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var j,A=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof A&&(x?l((function(){h.valueOf.call(a)})):c(a)!=v)?d(new C(_(t)),a,A):_(t)},y=r?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;y.length>S;S++)i(C,j=y[S])&&!i(A,j)&&g(A,j,f(C,j));A.prototype=h,h.constructor=A,o(s,v,A)}},aeef:function(e,t,a){"use strict";a("5585")},b64b:function(e,t,a){var r=a("23e7"),s=a("7b0b"),n=a("df75"),o=a("d039"),i=o((function(){n(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(e){return n(s(e))}})},c740:function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").findIndex,n=a("44d2"),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),n(o)},d228:function(e,t,a){},d81d:function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").map,n=a("1dde"),o=n("map");r({target:"Array",proto:!0,forced:!o},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,a){var r=a("23e7"),s=a("83ab"),n=a("56ef"),o=a("fc6a"),i=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,a,r=o(e),s=i.f,d=n(r),u={},l=0;while(d.length>l)a=s(r,t=d[l++]),void 0!==a&&c(u,t,a);return u}})},e439:function(e,t,a){var r=a("23e7"),s=a("d039"),n=a("fc6a"),o=a("06cf").f,i=a("83ab"),c=s((function(){o(1)})),d=!i||c;r({target:"Object",stat:!0,forced:d,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(n(e),t)}})},f212:function(e,t,a){"use strict";a("2cc0")}}]);
//# sourceMappingURL=actividad.09d447b5.js.map