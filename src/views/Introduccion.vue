<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 En el entorno actual de los negocios electrónicos, las organizaciones deben ir más allá de contar con presencia digital, ya que requieren desarrollar capacidades estratégicas para gestionar, posicionar y optimizar sus productos o servicios en mercados altamente competitivos. En este contexto, el marketing online se convierte en una herramienta fundamental para atraer clientes, generar conversiones y fortalecer la presencia de la marca.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Para lograrlo, es necesario definir objetivos claros, seleccionar canales digitales adecuados, segmentar audiencias, crear contenido relevante y gestionar campañas orientadas a resultados. Asimismo, el embudo de ventas permite acompañar al cliente desde el primer contacto con la organización hasta la decisión de compra, facilitando la aplicación de estrategias que mejoren la conversión y la eficiencia del negocio.
      .row.align-items-center
        .col-xl
          .box___style_1(data-aos="fade-right")
            p.mb-0 No obstante, el éxito de un negocio electrónico no depende únicamente de captar usuarios, sino también de fidelizarlos mediante experiencias ágiles, seguras y personalizadas. Por ello, la generación de valor agregado, la medición de indicadores y la mejora continua permiten optimizar estrategias, tomar decisiones informadas y contribuir al crecimiento sostenible del negocio digital.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img2.svg', alt='').m-auto
      
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
