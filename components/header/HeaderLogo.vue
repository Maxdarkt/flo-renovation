<template>
  <div>
    <nuxt-link to="/">
      <p class="text-white text-center lg:text-xl px-3 py-0.5 transition-all duration-300" :class="{'text-xs lg:text-sm' : isScrolled}">
        <img src="@/assets/images/logo_Melanie.png" alt="logo Mélanie" class="h-16">
      </p>
    </nuxt-link>
    <!-- <p class="transition-all duration-300 ml-2 mt-4" :class="{'text-[0.45rem] xs:text-[0.55rem] mt-2' : isScrolled, 'text-xxs text-center mymd:text-left' : isFooter, 'text-xxs xs:text-xs' : !isFooter }">SLOGAN ?</p> -->
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