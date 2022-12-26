<template>
    <v-app>
      <v-carousel
      cycle="true"
      interval="5000"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-app>
</template>

<script>
export default {
  name: 'CarousselSlide',
  data () {
      return {
        items: [
          {
            src: require('../../assets/images/caroussel/chambre.jpg'),
          },
          {
            src: require('../../assets/images/caroussel/baies_vitrees.jpg'),
          },
          {
            src: require('../../assets/images/caroussel/maison_1.jpg'),
          },
          {
            src: require('../../assets/images/caroussel/pool_house.jpg'),
          },
        ],
      }
    },
}
</script>