<template>
  <div class="w-full py-8 px-1 xxspx-4 xs:px-8 mb-16 flex flex-col items-center">
    <h2 class="text-3xl text-center">
      Nos réalisations
    </h2>
    <div class="h-2 border-b-4 border-primary w-32 mt-4"></div>
    <div class="my-4">
      Voici quelques une de nos <nuxt-link to="realisations" class="btn btn-primary" >réalisations</nuxt-link> :
    </div>
    <div id="contenair-cards" class="relative w-[282px] mymd:w-[846px] h-[400px] flex justify-start items-center mx-auto mb-16 overflow-hidden">
      <CardImageLegend 
        v-for="picture of pictures"
        :id="`card-image-${picture.id}`"
        :key="`card-image-${picture.id}`"
        :src="picture.src"
        :alt="picture.alt"
        :title="picture.title"
        class="card-image-legend min-w-[250px] h-[300px] flex justify-center items-center rounded-md transition-all duration-500 mx-4"
        @event-open-modal="openModal"
      />
      <!-- The previous button -->
      <a 
        id="a-left"
        class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer"
        @click="translateSlide(-1)"
      >
        ❮
      </a>
      <!-- The next button -->
      <a 
        id="a-right"
        class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer"
        
        @click="translateSlide(1)"
      >
        ❯
      </a>
    </div>
    <ModalSingleImage
      :current-picture="currentPicture"
      :current-alt="currentAlt"
      :current-title="currentTitle"
      :current-description="currentDescription"
      class="transition duration-300"
      :class="[ isOpened ? 'opacity-100 z-30' : 'opacity-0 -z-50' ]"
      @event-close-modal="closeModal"
    />
  </div>
</template>

<script>
export default {
  name: 'CarousselMultiplesPictures',
  data() {
    return {
      isOpened: false,
      currentPicture: null,
      currentAlt: null,
      currentTitle: null,
      currentDescription: null,
      pictures: [
        {
          id: 1,
          src: require('@/assets/images/frontDoor/door_front_1.jpeg'),
          alt: 'Porte d\'entrée',
          title: 'Porte d\'entrée'
        },
        {
          id: 2,
          src: require('@/assets/images/garageDoor/garage_door_large_wood.jpeg'),
          alt: 'volet roulant',
          title: 'Volet roulant rénovation'
        },
        {
          id: 3,
          src: require('@/assets/images/shutters/shutters_bso.jpeg'),
          alt: 'Porte d\'entrée',
          title: 'Porte d\'entrée'
        },
        {
          id: 4,
          src: require('@/assets/images/shutters/shutters_renovation_solar_2.jpeg'),
          alt: 'Porte de garage',
          title: 'Porte de garage'
        },
        {
          id: 5,
          src: require('@/assets/images/shutters/shutters_renovation_solar_opened.jpeg'),
          alt: 'chantier extension',
          title: 'Extension'
        },
        {
          id: 6,
          src: require('@/assets/images/frontDoor/door_front_8.jpeg'),
          alt: 'chantier extension',
          title: 'Extension'
        },
        {
          id: 7,
          src: require('@/assets/images/garageDoor/garage_door_white_2.jpeg'),
          alt: 'chantier extension',
          title: 'Extension'
        }
      ],
      cardsElement: null,
      count: 1,
      translate: -564,
      lastAction: null,
      isSmallScreen: null,
    }
  },
  mounted() {
    this.cardsElement = document.querySelectorAll('.card-image-legend');
    this.cardsElement.forEach(element => {
      element.style.transform = `translateX(${this.translate}px)`;
      element.classList.add('transition-all');
      element.classList.add('duration-500');
    });
    window.addEventListener('resize', this.checkWidth);
    this.isSmallScreen = window.innerWidth < 962;
  },
  methods: {
    checkWidth() {
      this.isSmallScreen = window.innerWidth < 962;
    },
    openModal(payload) {
      this.currentPicture = payload.currentPicture;
      this.currentAlt = payload.currentAlt;
      this.currentTitle = payload.currentTitle;
      this.currentDescription = payload.currentDescription ? payload.currentDescription : null;
      this.isOpened = true;
    },
    closeModal() {
      this.isOpened = false;
    },
    translateSlide(step) {
      const buttonLeft = document.getElementById('a-left');
      const buttonRight = document.getElementById('a-right');
      if(step === 1 && this.translate === 0) {
        buttonRight.classList.add('cursor-not-allowed');
        return;
      } else if (step === -1 && this.translate === -1128 && !this.isSmallScreen) {
        buttonLeft.classList.add('cursor-not-allowed');
        return;
      } else if (step === -1 && this.translate === -1692 && this.isSmallScreen) {
        buttonLeft.classList.add('cursor-not-allowed');
        return;
      } else {
        buttonLeft.classList.remove('cursor-not-allowed');
        buttonRight.classList.remove('cursor-not-allowed');
      }
      this.translate += step * 282;

      step === 1 ? this.count++ : this.count--;

      this.cardsElement.forEach(element => {
        element.style.transform = `translateX(${this.translate}px)`;
      });
    }
  }
}
</script>