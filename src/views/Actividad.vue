<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de estrategias de <em>marketing</em> digital y valor agregado',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la capacidad del aprendiz para aplicar estrategias de <em>marketing</em> digital, analizar procesos de captación y fidelización de clientes, e interpretar indicadores de desempeño en un negocio electrónico, mediante la resolución de un cuestionario de selección múltiple.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué permite la planeación estratégica de <em>marketing</em> digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar acciones alineadas con objetivos. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Publicar contenido sin una estructura definida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar acciones sin análisis previo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar actividades según tendencias del momento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza un objetivo comercial en <em>marketing</em> digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser general y flexible en su aplicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enfocarse en resultados sin medición clara.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser claro y medible. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depender únicamente del entorno digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué implica seleccionar canales digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elegir medios según el público. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Usar múltiples plataformas sin priorización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enfocarse solo en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elegir canales según disponibilidad tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué permite definir el público objetivo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dirigir estrategias sin análisis previo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar campañas de forma general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seleccionar productos sin investigación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmentar el mercado con base en datos. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué incluye la planificación digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de herramientas son estrategia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicación constante en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definición de acciones y recursos. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseño visual de contenidos digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es una campaña digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conjunto de acciones planificadas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicación ocasional en plataformas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conjunto de acciones planificadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estrategia centrada en contenido visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué permite la segmentación de audiencias?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar mensajes iguales a todos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dividir usuarios según características.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el alcance de campañas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el uso de datos del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué función cumple el contenido digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmitir información relevante al usuario. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar publicaciones sin objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la interacción con clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir procesos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué busca la optimización de campañas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar contenidos sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar el rendimiento de las acciones. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la cantidad de publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el uso de herramientas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué mide la tasa de conversión?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad total de visitas al sitio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tiempo promedio de permanencia en la página.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proporción de usuarios que realizan una acción. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Número de interacciones en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué es el embudo de ventas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proceso de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Etapas del cliente digital. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estrategia de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema de inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué busca la captación de clientes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el reconocimiento de marca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Optimizar procesos internos del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la experiencia después de la compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atraer usuarios con interés en el producto. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza la conversión?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento del tráfico web.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acción del usuario. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción del tiempo de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué mejora la optimización del proceso de compra?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilidad en la experiencia de compra. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incremento del tráfico web general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumento del contenido publicitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción del uso de herramientas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué busca la fidelización de clientes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atraer nuevos usuarios de la web.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener relación con clientes. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la interacción de los clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar las recompra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué es el valor agregado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Beneficio adicional ofrecido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducción de costos del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de procesos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento en la producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué permite la propuesta de valor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir participación del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la competencia directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir el beneficio ofrecido. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar costos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué mide el KPI?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cumplimiento de objetivos. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo y únicamente ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué permite el ROI?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar comportamiento del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar interacción digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contar visitas del sitio web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir la rentabilidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué permite la mejora continua?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener procesos sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ajustar estrategias. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir uso de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar análisis de datos.',
              esCorrecta: false,
            },
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
}
</script>
