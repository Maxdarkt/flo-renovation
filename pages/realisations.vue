<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :src="titleBar.src" 
      :title="titleBar.title" 
      :title-color="titleBar.titleColor"
      :description="titleBar.description"
    />
    <div class="max-w-xs sm:max-w-2xl mymd:max-w-[962px] lg:max-w-screen-lg mx-auto flex flex-col mymd:flex-row items-center space-x-0 mymd:space-x-4 px-2 mymd:pl-4 my-8">
      <div class="w-full">
        <label class="label justify-start cursor-pointer">
          <input type="radio" name="radio-10" class="radio checked:bg-primary mr-4" checked @click="filterArray('all')" />
          <span class="label-text mr-4">Toutes</span> 
        </label>
      </div>
      <div class="w-full">
        <label class="label justify-start cursor-pointer">
          <input type="radio" name="radio-10" class="radio checked:bg-primary mr-4" @click="filterArray('windows')" />
          <span class="label-text mr-4">Fenêtres</span> 
        </label>
      </div>
      <div class="w-full">
        <label class="label justify-start cursor-pointer">
          <input type="radio" name="radio-10" class="radio checked:bg-primary mr-4" @click="filterArray('frontDoor')" />
          <span class="label-text mr-4">Porte d'entrée</span> 
        </label>
      </div>
      <div class="w-full">
        <label class="label justify-start cursor-pointer">
          <input type="radio" name="radio-10" class="radio checked:bg-primary mr-4" @click="filterArray('garageDoor')" />
          <span class="label-text mr-4">Porte de garage</span> 
        </label>
      </div>
      <div class="w-full">
        <label class="label justify-start cursor-pointer">
          <input type="radio" name="radio-10" class="radio checked:bg-primary mr-4" @click="filterArray('shutters')" />
          <span class="label-text mr-4">Volets</span> 
        </label>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-8 mb-32">
      <CardImageLegend 
        v-for="realisation of realisationsFiltered"
        :id="realisation.id"
        :key="`galerie-${realisation.id}`"
        :src="realisation.src"
        :alt="realisation.alt"
        :title="realisation.title"
        :description="realisation.description"
        class="w-[280px] xxs:w-[300px] h-[230px] xxs:h-[250px]"
        @event-open-modal="openModal"
      />
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
  name: 'RealisationPage',
  data() {
    return {
      isOpened: false,
      currentPicture: null,
      currentAlt: null,
      currentTitle: null,
      currentDescription: null,
      realisations: [
        {
          id: 1,
          src: require('@/assets/images/frontDoor/door_front_1.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 2,
          src: require('@/assets/images/garageDoor/garage_door_large_wood.jpeg'),
          alt: 'photo porte de garage',
          title: 'Porte de garage',
          category: 'garageDoor'
        },
        {
          id: 3,
          src: require('@/assets/images/frontDoor/door_front_2.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 4,
          src: require('@/assets/images/garageDoor/garage_door_white.jpeg'),
          alt: 'photo porte de garage',
          title: 'Porte de garage',
          category: 'garageDoor'
        },
        {
          id: 5,
          src: require('@/assets/images/shutters/shutters_bso_2.jpeg'),
          alt: 'photo bso',
          title: 'BSO',
          category: 'shutters'
        },
        {
          id: 6,
          src: require('@/assets/images/frontDoor/door_front_3.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 7,
          src: require('@/assets/images/frontDoor/door_front_4.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 8,
          src: require('@/assets/images/garageDoor/garage_door_white_2.jpeg'),
          alt: 'photo porte de garage',
          title: 'Porte de garage',
          category: 'garageDoor'
        },
        {
          id: 9,
          src: require('@/assets/images/frontDoor/door_front_5.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 10,
          src: require('@/assets/images/frontDoor/door_front_6.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 11,
          src: require('@/assets/images/garageDoor/garage_door_wood.jpeg'),
          alt: 'photo porte de garage',
          title: 'Porte de garage',
          category: 'garageDoor'
        },
        {
          id: 12,
          src: require('@/assets/images/shutters/shutters_bso.jpeg'),
          alt: 'photo bso',
          title: 'BSO',
          category: 'shutters'
        },
        {
          id: 13,
          src: require('@/assets/images/frontDoor/door_front_7_before.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 14,
          src: require('@/assets/images/frontDoor/door_front_7_after.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 15,
          src: require('@/assets/images/shutters/shutters_renovation_opened.jpeg'),
          alt: 'photo volets roulants',
          title: 'Volets roulants',
          category: 'shutters'
        },
        {
          id: 16,
          src: require('@/assets/images/shutters/shutters_renovation_closed.jpeg'),
          alt: 'photo volets roulants',
          title: 'Volets roulants',
          category: 'shutters'
        },
        {
          id: 17,
          src: require('@/assets/images/frontDoor/door_front_8.jpeg'),
          alt: 'photo porte d\'entrée',
          title: 'Porte d\'entrée',
          category: 'frontDoor'
        },
        {
          id: 18,
          src: require('@/assets/images/shutters/shutters_renovation_solar_opened.jpeg'),
          alt: 'photo volets roulants',
          title: 'Volets roulants',
          category: 'shutters'
        },
        {
          id: 19,
          src: require('@/assets/images/shutters/shutters_renovation_solar_closed.jpeg'),
          alt: 'photo volets roulants',
          title: 'Volets roulants',
          category: 'shutters'
        },
        {
          id: 20,
          src: require('@/assets/images/shutters/shutters_renovation_solar_2.jpeg'),
          alt: 'photo volets roulants',
          title: 'Volets roulants',
          category: 'shutters'
        },
        {
          id: 21,
          src: require('@/assets/images/shutters/shutters_renovation_wood.jpeg'),
          alt: 'photo volets roulants',
          title: 'Volets roulants',
          category: 'shutters'
        }
      ],
      titleBar: {
        isPicture: false,
        src: 'https://placeimg.com/1400/400/arch',
        title: 'Réalisations',
        titleColor: 'text-primary',
        description: 'Voici les réalisations de Flo Rénovation. Chantiers neufs, rénovations, extensions ...'
      },
      realisationsFiltered: [],
    }
  },
  head: {
    title: 'Réalisations',
  },
  mounted() {
    this.realisationsFiltered = [].concat(this.realisations);
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
    filterArray(criteria) {
      this.realisationsFiltered = [].concat(this.realisations);
      if(criteria !== 'all') {
        this.realisationsFiltered = this.realisationsFiltered.filter(realisation => realisation.category === criteria);
      }
    }
  }
}
</script>