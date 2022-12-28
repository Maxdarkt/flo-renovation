<template>
  <div class="w-full py-8 px-8 mb-16 flex flex-col items-center">
    <h2 class="text-3xl text-center">
      Nos réalisations
    </h2>
    <div class="h-2 border-b-4 border-primary w-32 mt-4"></div>
    <div class="my-4">
      Voici quelques une de nos <nuxt-link to="realisations" class="btn btn-primary" >réalisations</nuxt-link> :
    </div>
    <div class="w-full py-8 flex justify-around">
      <CardImageLegend 
        v-for="picture of pictures"
        :id="picture.id"
        :key="`galerie-${picture.id}`"
        :src="picture.src"
        :alt="picture.alt"
        :title="picture.title"
        @event-open-modal="openModal"
      />
    </div>
    <ModalSingleImage
      :current-picture="currentPicture"
      :current-alt="currentAlt"
      :current-legend="currentLegend"
      class="transition duration-300"
      :class="[ isOpened ? 'opacity-100 z-30' : 'opacity-0 -z-50' ]"
      @event-close-modal="closeModal"
    />
  </div>
</template>

<script>
import CardImageLegend from '@/components/card/card-image-legend.vue'
import ModalSingleImage from '@/components/modal/modal-single-image.vue'

export default {
  name: 'BannerRealisation',
  components: {
    CardImageLegend,
    ModalSingleImage
  },
  data() {
    return {
      isOpened: false,
      currentPicture: null,
      currentAlt: null,
      currentLegend: null,
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
    }
  },
  methods: {
    openModal(payload) {
      console.log('openModal', payload)
      this.currentPicture = payload.currentPicture
      this.currentAlt = payload.currentAlt
      this.currentLegend = payload.currentLegend
      this.isOpened = true;
    },
    closeModal() {
      console.log('closeModal')
      this.isOpened = false;
    }
  }

}
</script>