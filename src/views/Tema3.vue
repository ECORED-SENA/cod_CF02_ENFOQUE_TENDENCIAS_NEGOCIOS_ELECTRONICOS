<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Estrategias de atracción y conversión de clientes
      .color___box_1
        .px-5
          p.mb-5 Las estrategias de atracción y conversión de clientes permiten captar la atención de usuarios potenciales y transformar su interés en acciones concretas, como compras, registros o contactos. Para lograrlo, es necesario comprender sus necesidades, orientar su recorrido digital y aplicar técnicas que generen resultados medibles.
          #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.1 Técnicas de captación de clientes
          p.mb-5 La captación de clientes consiste en atraer usuarios potenciales hacia los canales digitales del negocio mediante estrategias diseñadas para generar interés y tráfico. Este proceso debe estar alineado con el perfil del cliente y los objetivos comerciales definidos. Los elementos esenciales, se detallan a continuación:
          .row.justify-content-center.mb-5
            .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100.text-white
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img1.png', alt="" ).m-auto
                  h4 Estrategias de captación más utilizadas
                  .box___card_sinbordes_p
                    p Las estrategias de captación más utilizadas son:
                    ul.fa-ul.estilo___ul_1.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Marketing de contenidos:] generación de información relevante que resuelva necesidades del usuario.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Publicidad digital segmentada:] anuncios dirigidos a públicos específicos.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Posicionamiento en buscadores:] visibilidad en resultados de búsqueda.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Redes sociales:] interacción y difusión de contenido.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Colaboraciones y alianzas digitales:] ampliación del alcance mediante terceros.
            .col-xl-6.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.box___card_sinbordes_color.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img2.png', alt="" ).m-auto
                  h4 Proceso estructurado de captación
                  .box___card_sinbordes_p
                    p El proceso estructurado de captación está dado por:
                    ol.lista-ol--cuadro.mb-0
                      li
                        .lista-ol--cuadro__vineta
                          span 1
                        | 
                        p.mb-0 Identificación del problema o necesidad del cliente.
                      li 
                        .lista-ol--cuadro__vineta
                          span 2
                        | 
                        p.mb-0 Creación de contenido o propuesta atractiva.
                      li 
                        .lista-ol--cuadro__vineta
                          span 3
                        | 
                        p.mb-0 Selección del canal adecuado.
                      li 
                        .lista-ol--cuadro__vineta
                          span 4
                        | 
                        p.mb-0 Implementación de campañas.
                      li 
                        .lista-ol--cuadro__vineta
                          span 5
                        | 
                        p.mb-0 Medición de resultados.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2(data-aos="fade-right")
            h5 Ejemplo ampliado
            p Una empresa desarrolla una estrategia basada en contenido educativo sobre el uso de sus productos, complementada con anuncios dirigidos a usuarios interesados. Esto genera tráfico cualificado hacia su sitio web.
            h5 Indicadores de captación
            p Los indicadores de captación son:
            ul.fa-ul.estilo___ul_2.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tráfico web
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Alcance
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Costo por clic (CPC)
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tasa de interacción
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img3.png', alt='').m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Embudo de ventas digital
      p.mb-5 Se invita a reproducir este pódcast para comprender el embudo de ventas digital, reconocer sus etapas y analizar cómo contribuye a orientar al cliente hacia la conversión en negocios electrónicos de forma práctica.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img4.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="“Del primer clic a la compra: el recorrido del cliente digital.”"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img5.png" ).m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Estrategias de conversión
      p.mb-5 Las estrategias de conversión buscan transformar el interés del usuario en una acción concreta. Este proceso implica eliminar obstáculos, generar confianza y facilitar la interacción. Los aspectos clave son:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
              h4 Factores clave de conversión
              .box___card_sinbordes_p
                p Los factores clave de conversión son:
                ul.fa-ul.estilo___ul_1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Claridad en la propuesta de valor.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Diseño intuitivo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Rapidez de carga.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Seguridad en transacciones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Credibilidad (opiniones, certificaciones).
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.box___card_sinbordes_color.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img7.png', alt="" ).m-auto
              h4 Técnicas de conversión
              .box___card_sinbordes_p
                p Las técnicas de conversión se relacionan a continuación:
                ul.fa-ul.estilo___ul_2.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Llamados a la acción visibles.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pruebas A/B.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Personalización de contenido.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ofertas limitadas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Garantías de satisfacción.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_3(data-aos="fade-right")
            h5 Ejemplo ampliado
            p Una empresa implementa botones de compra visibles, testimonios de clientes y ofertas por tiempo limitado, logrando aumentar sus conversiones.
            h5 Indicadores clave
            p Los indicadores clave son:
            ul.fa-ul.estilo___ul_2.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tasa de conversión.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Valor promedio de compra.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Número de transacciones.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img8.png', alt='').m-auto
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Optimización del proceso de compra
      p.mb-5 La optimización del proceso de compra busca mejorar la experiencia del usuario en cada interacción con la plataforma, reduciendo fricciones y facilitando la conversión. Los componentes esenciales son:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img9.png', alt="" ).m-auto
              h4 Elementos para optimizar
              .box___card_sinbordes_p
                p Estos son los elementos para optimizar:
                ul.fa-ul.estilo___ul_1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Navegación clara.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Información precisa del producto.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Proceso de pago sencillo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Opciones de pago variadas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Confirmación y seguimiento.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.box___card_sinbordes_color.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img10.png', alt="" ).m-auto
              h4 Problemas frecuentes
              .box___card_sinbordes_p
                p Dentro de los problemas más frecuentes, existen estos:
                ul.fa-ul.estilo___ul_2.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Formularios largos
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Costos ocultos
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Falta de confianza
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Procesos complejos
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_3(data-aos="fade-right")
            h5 Ejemplo ampliado
            p Una empresa reduce su formulario de compra de 10 a 4 campos y agrega opciones de pago rápidas, logrando disminuir el abandono del carrito.
            h5 Indicadores de optimización
            p La optimización del proceso de compra se mide por estos indicadores:
            ul.fa-ul.estilo___ul_2.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tasa de abandono
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tiempo de compra
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Conversión final
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img11.png', alt='').m-auto
      .color___box_2
        .px-5
          Separador
          #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.5 Aplicación integrada de atracción y conversión	
          p.mb-5 La integración de estrategias de atracción y conversión permite estructurar un proceso comercial completo, donde cada acción contribuye al logro de los objetivos del negocio. Estos son los componentes de una estrategia integrada:
          .row.justify-content-center.mb-3
            .col-xl-10
              .box___style_3(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t3/img12.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    h5 Componentes de una estrategia integrada
                    p Los componentes son:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Captación de tráfico.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Gestión del embudo.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Optimización de la conversión.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Seguimiento de resultados.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .box___style_2.fit___box_4(data-aos="fade-right")
                h5 Caso aplicado ampliado
                p.mb-0 Una empresa implementa campañas de atracción, gestiona su embudo de ventas y optimiza su proceso de compra, logrando incrementar sus ventas en un periodo determinado.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img13.png', alt='').m-auto
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Mejora continua en estrategias de conversión
      .color___box_1
        .px-5
          p.mb-5 Las estrategias de atracción y conversión deben evaluarse y ajustarse constantemente para garantizar su efectividad. Para la mejora continua, se debe realizar el siguiente proceso:
          .row.justify-content-center.mb-5
            .col-xl-8
              .box___style_3(data-aos="zoom-in").mb-3
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t3/img14.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    h5 Proceso de mejora continua
                    p Este es el proceso:
                    ol.lista-ol--cuadro.mb-0
                      li
                        .lista-ol--cuadro__vineta
                          span 1
                        | 
                        p.mb-0 Medir resultados
                      li 
                        .lista-ol--cuadro__vineta
                          span 2
                        | 
                        p.mb-0 Analizar datos
                      li 
                        .lista-ol--cuadro__vineta
                          span 3
                        | 
                        p.mb-0 Identificar fallas
                      li 
                        .lista-ol--cuadro__vineta
                          span 4
                        | 
                        p.mb-0 Implementar mejoras
                      li 
                        .lista-ol--cuadro__vineta
                          span 5
                        | 
                        p.mb-0 Evaluar cambios
              .box___style_2(data-aos="zoom-in")
                h5 Ejemplo
                p.mb-0 Una empresa detecta baja conversión en móviles, optimiza su diseño responsivo y mejora sus resultados.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img17.svg" style="max-width: 60px").m-auto
            .col
              h3 Importancia estratégica en el negocio digital
          p.mb-5 La correcta aplicación de estrategias de atracción y conversión permite:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-8
              .row.justify-content-center.align-items-center.mb-0
                .col-xl.mb-4.mb-lg-0
                  .box___style_2.fit___box_1(data-aos="fade-right")
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Incrementar ingresos
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Mejorar la eficiencia comercial
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Optimizar recursos
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Fortalecer la competitividad
                .col-xl-auto.col-md-9(data-aos="fade-left")
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='').m-auto
      p.mb-5 Estas estrategias no solo permiten captar clientes, sino también convertirlos en usuarios activos, generando valor y sostenibilidad para el negocio electrónico.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img17.svg" style="max-width: 60px").m-auto
        .col
          h3 Aplicación práctica de estrategias de atracción y conversión
      p.mb-5 Para convertir usuarios en clientes, es necesario implementar un proceso estructurado que integre atracción, interacción y conversión; el cual, se detalla a continuación:
      .row.justify-content-center.mb-0
        .col-xl-8
          LineaTiempoD.color-acento-contenido(data-aos="zoom-in")
            .row.align-items-center(numero="Paso 1" titulo="Definir el público objetivo ")
              .col-md-6.mb-4.mb-md-0
                p.mb-0 Identificar las características y necesidades del cliente.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 190px").m-auto
            .row.align-items-center(numero="Paso 2" titulo="Seleccionar herramientas de captación")
              .col-md-6.mb-4.mb-md-0
                p.mb-0 Utilizar estrategias como contenido, publicidad o redes sociales.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t3/img17.png', alt='' style="max-width: 190px").m-auto
            .row.align-items-center(numero="Paso 3" titulo="Ejecutar acciones de atracción")
              .col-md-6.mb-4.mb-md-0
                p.mb-0 Implementar campañas orientadas a generar tráfico.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 190px").m-auto
            .row.align-items-center(numero="Paso 4" titulo="Medir la conversión")
              .col-md-6.mb-4.mb-md-0
                p.mb-0 Analizar el comportamiento del usuario en el proceso de compra.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 190px").m-auto
            .row.align-items-center(numero="Paso 5" titulo="Optimizar el proceso")
              .col-md-6.mb-4.mb-md-0
                p.mb-0 Reducir barreras y mejorar la experiencia del cliente.
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 190px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/Del_primer_clic_compra.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
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
