<template>
  <div>
    <CarousselSlide />
    <div class="flex justify-around my-24">
      <CardOne />
      <CardOne />
      <CardOne />
    </div>
  </div>
</template>

<script>
import CarousselSlide from '@/components/caroussel/caroussel-slide.vue'
import CardOne from '@/components/card/card-one.vue'

export default {
  name: 'IndexPage',
  components: {
    CarousselSlide,
    CardOne
  },
  head: {
    title: 'Accueil',
  },
  mounted() {
    // console.log(this.$vuetify.theme.dark)
  }
}
</script>
