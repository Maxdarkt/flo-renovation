<template>
  <div>
    <CarousselSlide />
    <div class="flex mt-24">
      <CardOne />
      <CardOne />
      <CardOne />
    </div>
    <div class="flex justify-center items-center my-24">
      <button class="py-2 px-3 bg-blue-600 rounded">
        Click me
      </button>
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
