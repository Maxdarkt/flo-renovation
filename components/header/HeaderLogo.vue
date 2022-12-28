<template>
  <div>
    <nuxt-link to="/">
      <p class="bg-primary text-white text-center lg:text-xl px-3 py-0.5 drop-shadow-xl shadow-lg -skew-y-2 transition-all duration-300" :class="{'text-xs lg:text-sm' : isScrolled}">
        Flo-<strong>Rénovation</strong>
      </p>
    </nuxt-link>
    <p class="text-[0.55rem] transition-all duration-300 ml-2 mt-4" :class="{'text-[0.55rem] mt-2' : isScrolled}">FENETRE-PORTE-VITRERIE ALU-PVC-BOIS</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo',
  props: {
    isScrolled: {
      type: Boolean,
      default: false
    }
  }
}
</script>