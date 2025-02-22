<template>
  <header id="header" class="bg-white fixed w-screen shadow-mymd z-30 transition-all duration-300" :class="[isScrolled ? 'h-[4rem]' : 'h-[6rem]']">
    <!-- navbar -->
    <nav class="nav flex flex-wrap items-center justify-between transition-all duration-300 px-0" :class="[isScrolled ? 'pt-1' : 'pt-4']">
      <!-- logo -->
      <HeaderLogo class="transition-all duration-500 mr-6 py-1 text-gray-500" :is-scrolled="isScrolled" :class="[ isScrolled ? 'w-48 xs:w-[16rem]' : 'w-60 xs:w-[20rem]' ]"/>
      <!-- Responsive Menu checkBox -->
      <input id="menu-btn" class="menu-btn hidden" type="checkbox">
      <label class="menu-icon block cursor-pointer px-2 py-2 relative select-none sm:mr-4" :class="{'hidden' : desktop}" for="menu-btn">
        <span class="navicon bg-grey-darkest flex items-center relative"></span>
      </label>
      <!-- Navigation links -->
      <div class="menu-nav border-b mymd:border-none flex justify-end items-end list-reset m-0 w-full mymd:w-auto relative mymd:flex mymd:top-auto mymd:mr-4 -top-1">
        <!-- links ACCUEIL -->
        <span @click="menuItem()">
          <nuxt-link class="flex items-end px-2 py-2 no-underline text-gray-500 hover:text-primary transition duration-500 border-b border-transparent mymd:hover:border-primary font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="/">
            <outline-home-icon class="w-8 h-8" />
            <!-- ACCUEIL -->
          </nuxt-link>
        </span>
        <span v-if="mediumScreen">
          <div class="dropdown dropdown-hover">
            <label tabindex="0" class="block mymd:inline-block px-2 py-2 no-underline text-gray-500 font-bold cursor-pointer">PRODUITS</label>
            <ul tabindex="0" class="dropdown-content p-4 shadow bg-base-100 rounded-box w-52 space-y-4">
              <li><nuxt-link class="px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="windows">FENETRES</nuxt-link></li> 
              <li><nuxt-link class="px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="frontDoor">PORTES D'ENTREE</nuxt-link></li>
              <li><nuxt-link class="px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="reinforcedDoor">PORTES BLINDEES</nuxt-link></li>
              <li><nuxt-link class="px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="shutters">VOLETS</nuxt-link></li>
              <li><nuxt-link class="px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="garageDoor">PORTES DE GARAGE</nuxt-link></li>
            </ul>
          </div>
        </span>
        <!-- links WINDOWS -->
        <span v-if="!mediumScreen" class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="block mymd:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="windows">
            FENETRES
          </nuxt-link>
        </span>
        <!-- links DOOR -->
        <span v-if="!mediumScreen" class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="block mymd:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="frontDoor">
            PORTES D'ENTREE
          </nuxt-link>
        </span>
        <!-- links REINFORCED DOOR -->
        <span v-if="!mediumScreen" class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="block mymd:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="reinforcedDoor">
            PORTES BLINDEES
          </nuxt-link>
        </span>
        <!-- links SHUTTERS -->
        <span v-if="!mediumScreen" class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="block mymd:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="shutters">
            VOLETS
          </nuxt-link>
        </span>
        <!-- links GARAGE DOOR -->
        <span v-if="!mediumScreen" class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="block mymd:inline-block px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="garageDoor">
            PORTES DE GARAGE
          </nuxt-link>
        </span>
        <!-- links SOCIETE -->
        <span class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="flex items-end px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="company">
            <!-- <outline-information-circle-icon class="w-8 h-8" /> -->
            SOCIETE
          </nuxt-link>
        </span>
        <!-- links REALISATIONS -->
        <span class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="flex items-end px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="realisations">
            <!-- <outline-view-grid-icon class="w-8 h-8" /> -->
            REALISATIONS
          </nuxt-link>
        </span>
        <!-- links CONTACT -->
        <span class="block border-t mymd:border-none" @click="menuItem()">
          <nuxt-link class="flex items-end px-2 py-2 no-underline text-gray-500 hover:text-primary border-b border-transparent mymd:hover:border-primary transition duration-500 font-bold" exact-active-class="text-primary mymd:border-primary font-bold" to="contact">
            <!-- <outline-mail-icon class="w-8 h-8" /> -->
            CONTACT
          </nuxt-link>
        </span>
      </div>  
    </nav><!-- End navbar -->
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const desktop = ref(true)
const mediumScreen = ref(false)
const isScrolled = ref(false)

const isDesktop = () => {
  desktop.value = window.innerWidth > 962
  mediumScreen.value = window.innerWidth > 962 && window.innerWidth < 1280
}

const menuItem = () => {
  if (!desktop.value) {
    const checkboxMenu = document.getElementById("menu-btn")
    if (checkboxMenu) checkboxMenu.checked = false
  }
}

const listenScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  isDesktop()
  window.addEventListener('resize', isDesktop)
  window.addEventListener('scroll', listenScroll)
})
</script>

<style scoped>
@media (max-width: 962px) {
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