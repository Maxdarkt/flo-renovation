<template>
  <footer class="relative h-fit mymd:h-32 bg-secondary">
    <div class="w-full h-fit mymd:h-24 text-white text-xs font-light pr-2 flex flex-col mymd:flex-row items-center">
      <HeaderLogo class="w-56 pt-4"/>
      <div class="w-full flex flex-col mymd:flex-row mymd:justify-around items-center mymd:divide-x-2 mymd:divide-gray-200 space-y-4 mymd:space-y-0 my-4 mymd:my-0">
        <div class="w-full mymd:h-8 flex justify-center mymd:items-center">
          <outline-phone-icon class="w-4 h-4 text-primary" />
          <a href="tel:+33633777877" class="ml-2">
            06 33 77 78 77
          </a>
        </div>
        <div class="w-full mymd:h-8 flex justify-center mymd:items-center">
          <outline-mail-icon class="w-4 h-4 text-primary" />
          <a href="mailto:fam74000@gmail.com"  class="ml-2">
            fam74000@gmail.com
          </a>
        </div>
        <div class="w-full mymd:h-8 flex justify-center mymd:items-center items-center">
          <outline-map-icon class="w-4 h-4 text-primary" />
          <a href="https://www.google.fr/maps/place/7+Av.+de+Bouvard,+74000+Annecy/@45.9029365,6.1183461,17z/data=!3m1!4b1!4m5!3m4!1s0x478b855808d77a0b:0xd2ddbaf4aeba1fb!8m2!3d45.9029328!4d6.1205401" target="_blank" class="ml-2">
            7 avenue Bouvard,<br /> 74000 ANNECY
          </a>
        </div>
        <div class="w-full mymd:h-8 flex justify-center mymd:items-center">
          <outline-document-text-icon class="w-4 h-4 text-primary" />
          <nuxt-link to="legales" class="ml-2">
            Mentions légales
          </nuxt-link>
        </div>
        <div class="w-full mymd:h-8 flex justify-center mymd:items-center">
          <outline-chat-alt-2-icon class="w-4 h-4 text-primary" />
          <nuxt-link to="contact" class="ml-2">
            Nous contacter
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="w-full h-fit mymd:h-8 text-white text-xs font-light px-2 flex items-center">
      <p>
        &copy; Copyright {{ new Date().getFullYear() }} Flo Rénovation
      </p>
      <button class="absolute right-6 bottom-4 btn-circle btn-primary flex justify-center items-center w-8 h-8" @click="scrollTop">
        <outline-chevron-up-icon class="w-6 h-6" />
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style>

</style>