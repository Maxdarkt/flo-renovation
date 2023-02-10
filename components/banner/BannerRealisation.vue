<template>
  <div class="w-full py-8 px-8 mb-16 flex flex-col items-center">
    <h2 class="text-3xl text-center">
      Nos réalisations
    </h2>
    <div class="h-2 border-b-4 border-primary w-32 mt-4"></div>
    <div class="my-4">
      Voici quelques une de nos <nuxt-link to="realisations" class="btn btn-primary" >réalisations</nuxt-link> :
    </div>
    <div class="relative w-full py-8 flex flex-col mymd:flex-row mymd:justify-around items-center space-y-8 mymd:space-y-0 border border-black">
      <CardImageLegend 
        v-for="picture of pictures"
        :id="`card-image-${picture.id}`"
        :key="`card-image-${picture.id}`"
        :src="picture.src"
        :alt="picture.alt"
        :title="picture.title"
        class="w-[280px] xxs:w-[300px] h-[230px] xxs:h-[250px] transition-all duration-500"
        @event-open-modal="openModal"
      />
      <!-- The previous button -->
      <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer" @click="translateSlide(-1)">❮</a>
      <!-- The next button -->
      <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer" @click="translateSlide(1)">❯</a>
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
  name: 'BannerRealisation',
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
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'chantier de rénovation',
          title: 'Rénovation'
        },
        {
          id: 2,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'chantier neuf',
          title: 'Maison neuve'
        },
        {
          id: 3,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'chantier extension',
          title: 'Extension'
        }
      ],
      count: 1
    }
  },
  methods: {
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
    translateSlide(direction) {
      const cardOne = document.getElementById('card-image-1');
      const cardTwo = document.getElementById('card-image-2');
      const cardThree = document.getElementById('card-image-3');

      if(direction === 1) {
        const step = this.count * 100;
        cardOne.style.translate = `${step}%`;
        cardTwo.style.translate = `${step}%`;
        cardThree.style.translate = `${step}%`;
        this.count === -1 ? this.count = 1 : this.count++;
      } else {
        const step = this.count * 100;
        cardOne.style.translate = `${step}%`;
        cardTwo.style.translate = `${step}%`;
        cardThree.style.translate = `${step}%`;
        this.count === 1 ? this.count = -1 : this.count--;
      }
    }
  }
}
</script>