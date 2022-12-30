<template>
  <div class="flex flex-col justify-between">
    <HeaderBar />
    <Nuxt class="min-inter"/>
    <FooterBar />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      
    }
  },
}
</script>

<style>
.min-inter{
  /* Header + Footer = 32 * 0.25 rem = 8rem */
  min-height: calc(100vh - 14rem);
  margin-top: 6rem;
}
</style>
