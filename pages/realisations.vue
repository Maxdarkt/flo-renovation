<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :src="titleBar.src" 
      :title="titleBar.title" 
      :title-color="titleBar.titleColor"
      :description="titleBar.description"
    />
    <div class="lg:max-w-screen-lg mx-auto flex space-x-4 pl-4 my-8">
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mr-4">Toutes</span> 
          <input type="radio" name="radio-10" class="radio checked:bg-primary" checked @click="filterArray('all')" />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mr-4">Neufs</span> 
          <input type="radio" name="radio-10" class="radio checked:bg-primary" @click="filterArray('news')" />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mr-4">Rénovations</span> 
          <input type="radio" name="radio-10" class="radio checked:bg-primary" @click="filterArray('renovation')" />
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text mr-4">extension</span> 
          <input type="radio" name="radio-10" class="radio checked:bg-primary" @click="filterArray('extension')" />
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
        :width="500"
        :height="400"
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
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 1',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'news'
        },
        {
          id: 2,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 2',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'renovation'
        },
        {
          id: 3,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 3',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'renovation'
        },
        {
          id: 4,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 4',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'extension'
        },
        {
          id: 5,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 5',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'news'
        },
        {
          id: 6,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 6',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'extension'
        },
        {
          id: 7,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 7',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'news'
        },
        {
          id: 8,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 8',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'renovation'
        },
        {
          id: 9,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 9',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'news'
        },
        {
          id: 10,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 10',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'news'
        },
        {
          id: 11,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 11',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'renovation'
        },
        {
          id: 12,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 12',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'news'
        },
        {
          id: 13,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 13',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'renovation'
        },
        {
          id: 14,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 14',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'extension'
        },
        {
          id: 15,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 15',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'renovation'
        },
        {
          id: 16,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'photo',
          title: 'Titre 16',
          description: 'Lorem ipsum dolor sit amet, consectetur ...',
          category: 'extension'
        }
      ],
      titleBar: {
        isPicture: true,
        src: require('@/assets/images/background/fond_batiment_1.jpg'),
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

<style>

</style>