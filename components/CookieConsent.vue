<template>
  <div
    v-if="show"
    class="cookie-banner fixed inset-x-0 bottom-0 z-50 bg-secondary text-white shadow-2xl"
  >
    <div
      class="lg:max-w-screen-lg mx-auto px-4 py-4 flex flex-col mymd:flex-row mymd:items-center gap-4"
    >
      <p class="text-sm font-light leading-6 text-center mymd:text-left">
        Ce site utilise des cookies de mesure d'audience publicitaire (Google
        Ads) et affiche une carte Google Maps sur la page contact. Vous pouvez
        les accepter ou les refuser. Pour en savoir plus, consultez notre
        <nuxt-link to="confidentialite" class="text-primary underline">
          politique de confidentialité</nuxt-link
        >.
      </p>
      <div class="flex justify-center space-x-4 shrink-0">
        <button class="btn btn-default" @click="refuse">Refuser</button>
        <button class="btn btn-primary" @click="accept">Accepter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      mounted: false,
    }
  },
  computed: {
    show() {
      return (
        this.mounted &&
        Boolean(this.$cookieConsent) &&
        this.$cookieConsent.visible
      )
    },
  },
  mounted() {
    this.mounted = true
  },
  methods: {
    accept() {
      this.$cookieConsent.accept()
    },
    refuse() {
      this.$cookieConsent.refuse()
    },
  },
}
</script>

<style scoped>
.cookie-banner {
  animation: cookie-fade 0.3s ease;
}
@keyframes cookie-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
