<template>
  <div class="flex flex-col justify-between">
    <HeaderBar />
    <v-app>
      <Nuxt class="min-inter"/>
    </v-app>
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/header/HeaderBar.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderBar,
    FooterBar
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>
.min-inter{
  /* Header + Footer = 32 * 0.25 rem = 8rem */
  min-height: calc(100vh - 8rem);
  margin-top: 6.5rem;
}
</style>
