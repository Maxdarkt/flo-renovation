<template>
  <div>
    <nuxt-link to="/">
      <p class="bg-primary text-white text-center lg:text-xl px-3 py-0.5 drop-shadow-xl shadow-lg transition-all duration-300" :class="{'text-xs lg:text-sm' : isScrolled}">
        Flo-<strong>Rénovation</strong>
      </p>
    </nuxt-link>
    <p class="transition-all duration-300 ml-2" :class="{'text-[0.45rem] xs:text-[0.55rem] mt-1' : isScrolled, 'mt-4' : !isScrolled, 'text-xxs text-center mymd:text-left' : isFooter, 'text-xxs xs:text-xs' : !isFooter }">FENETRE-PORTE-VITRERIE ALU-PVC-BOIS</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo',
  props: {
    isScrolled: {
      type: Boolean,
      default: false
    },
    isFooter: {
      type: Boolean,
      default: false
    }
  }
}
</script>