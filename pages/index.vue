<template>
  <div>
    <CarousselSlide />
    <v-row class="mt-16">
      <CardOne />
      <CardOne />
      <CardOne />
    </v-row>
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
