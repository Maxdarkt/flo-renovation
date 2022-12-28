<template>
  <header id="header" class="h-[6rem] bg-white fixed w-screen shadow-lg z-30 transition-all duration-300" :class="{'h-[4rem]' : isScrolled}">
    <!-- navbar -->
    <nav class="nav flex flex-wrap items-end justify-between transition-all duration-300 px-0 pt-4" :class="{'pt-1' : isScrolled}">
      <!-- logo -->
      <HeaderLogo class="w-52 mr-6 py-1 text-gray-500" :is-scrolled="isScrolled"/>
      <!-- Responsive Menu checkBox -->
      <input id="menu-btn" class="menu-btn hidden" type="checkbox">
      <label class="menu-icon block cursor-pointer px-2 py-2 relative select-none mr-4" :class="{'hidden' : desktop}" for="menu-btn">
        <span class="navicon bg-grey-darkest flex items-center relative"></span>
      </label>
      <!-- Navigation links -->
      <div class="menu-nav border-b lg:border-none flex justify-end items-end list-reset m-0 w-full lg:w-auto relative lg:flex lg:top-auto lg:mr-4 -top-1">
        <!-- links ACCUEIL -->
        <span @click="menuItem()">
          <nuxt-link class="block lg:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary transition duration-500 border-b border-transparent lg:hover:border-primary font-bold" exact-active-class="text-primary lg:border-primary font-bold" to="/">
            ACCUEIL
          </nuxt-link>
        </span>
        <!-- links RENOVATION -->
        <span class="block border-t lg:border-none" @click="menuItem()">
          <nuxt-link class="block lg:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent lg:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary lg:border-primary font-bold" to="renovation">
            RENOVATION
          </nuxt-link>
        </span>
        <!-- links AMENAGEMENT -->
        <span class="block border-t lg:border-none" @click="menuItem()">
          <nuxt-link class="block lg:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent lg:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary lg:border-primary font-bold" to="amenagement">
            AMENAGEMENT
          </nuxt-link>
        </span>
        <!-- links EXTENSION -->
        <span class="block border-t lg:border-none" @click="menuItem()">
          <nuxt-link class="block lg:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent lg:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary lg:border-primary font-bold" to="extension">
            EXTENSION
          </nuxt-link>
        </span>
        <!-- links SOCIETE -->
        <span class="block border-t lg:border-none" @click="menuItem()">
          <nuxt-link class="block lg:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent lg:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary lg:border-primary font-bold" to="societe">
            SOCIETE
          </nuxt-link>
        </span>
        <!-- links REALISATIONS -->
        <span class="block border-t lg:border-none" @click="menuItem()">
          <nuxt-link class="block lg:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent lg:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary lg:border-primary font-bold" to="realisations">
            REALISATIONS
          </nuxt-link>
        </span>
        <!-- links CONTACT -->
        <span class="block border-t lg:border-none" @click="menuItem()">
          <nuxt-link class="block lg:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent lg:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary lg:border-primary font-bold" to="contact">
            CONTACT
          </nuxt-link>
        </span>
      </div>  
    </nav><!-- End navbar -->
  </header>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue'

export default {
  name: 'HeaderBar',
  components: {
    HeaderLogo
  },
  data() {
    return {
      desktop: true,
      isScrolled: false
    }
  },
  computed: {
  },
  mounted() {
    this.$nextTick(function () {
      this.isDesktop()
      window.addEventListener('resize', this.listenResize)
    })
    window.addEventListener('resize', this.isDesktop)
    window.addEventListener('scroll', this.listenScroll)
  },
  methods: {
    listenResize() {
      this.isDesktop()
    },
    isDesktop() {
      this.desktop = window.innerWidth > 1024
    },
    menuItem() {
      if(!this.desktop) {
        const checkboxMenu = document.getElementById("menu-btn")
        checkboxMenu.checked = false
      }
    },
    listenScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
@media (max-width: 1024px) {
  .navicon {
    width: 1.125em;
    height: .125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: #3D4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu-nav{
    display: none;
  }

  .menu-btn:checked ~ .menu-nav{
    display: block;
    z-index: 1000;
    background-color:#ffffff;
    margin-top: 10px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
</style>