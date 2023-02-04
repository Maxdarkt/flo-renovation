<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :src="titleBar.src" 
      :title="titleBar.title"
      :title-color="titleBar.titleColor"
      :description="titleBar.description"
    />
    <div class="lg:max-w-screen-lg mx-auto mt-8">
      <div class="grid grid-cols-12 space-y-14 md:space-y-0 px-4">
        <div class="col-span-12 md:col-span-6 text-justify md:pr-4 flex flex-col">
          <h2 class="w-full text-2xl font-semibold mt-4">
            A PROPOS DE <span class="text-primary font-bold">FLO RENOVATION</span>
          </h2>
          <div class="h-2 border-b-2 border-primary my-4 w-32"></div>
          <p>
            Fort d'une quinzaine d'années d'expériences, <span class="text-primary font-medium">Flo Rénovation</span> vous propose ses services pour la pose de menuiserie dans un rayon de 50 Km.
          </p>
          <p class="mt-8">
            <span class="text-primary font-medium">Flo Rénovation</span> intervient aussi bien sur des projets de rénovation complète, dans un contexte d'amélioration énergétique ou sur des projets neufs.
          </p>
          <div class="self-end mt-16">
            <nuxt-link to="contact" class="btn btn-primary">Devis gratuit</nuxt-link>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 min-h-[250px] xs:min-h-[350px] sm:min-h-[500px]">
          <CardImageLegend 
            :id="pictures[0].id"
            :key="`galerie-${pictures[0].id}`"
            :src="pictures[0].src"
            :alt="pictures[0].alt"
            :title="pictures[0].title"
            @event-open-modal="openModal"
          />
        </div>
      </div>
    </div>
    <BannerQuality class="my-16"/>
    <div class="lg:max-w-screen-lg mx-auto mt-8 mb-16">
      <div class="grid grid-cols-12 space-y-14 md:space-y-0 px-4">
        <div class="col-span-12 md:col-span-6 text-justify md:pl-4 flex flex-col order-2">
          <h2 class="w-full text-2xl font-semibold mt-4">
            QUI SOMMES-NOUS ?
          </h2>
          <div class="h-2 border-b-2 border-primary my-4 w-32"></div>
            <p class="mt-8">
              Voici l'équipe de professionnels de <span class="text-primary font-medium">Flo Rénovation</span> qui intervient dans la réussite de vos projets.
            </p>
          <div class="self-end mt-4">
            <nuxt-link to="contact" class="btn btn-primary">Contactez-nous</nuxt-link>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 min-h-[250px] xs:min-h-[350px] sm:min-h-[500px]">
          <CardImageLegend 
            :id="pictures[1].id"
            :key="`galerie-${pictures[1].id}`"
            :src="pictures[1].src"
            :alt="pictures[1].alt"
            :title="pictures[1].title"
            @event-open-modal="openModal"
          />
        </div>
      </div>
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
  name: 'SocietePage',
  data() {
    return {
      isOpened: false,
      currentPicture: null,
      currentAlt: null,
      currentTitle: null,
      currentDescription: null,
      titleBar: {
        isPicture: false,
        src: require('@/assets/images/background/societe.jpg'),
        title: 'Société',
        titleColor: 'text-primary',
        description: 'VOUS SOUHAITEZ EN SAVOIR PLUS ?'
      },
      pictures: [
        {
          id: 1,
          src: require('@/assets/images/home.jpg'),
          alt: 'chantier de rénovation',
          title: 'Maison Neuve'
        },
        {
          id: 2,
          src: 'https://placeimg.com/1200/678/arch',
          alt: 'chantier neuf',
          title: 'Maison neuve'
        }
      ],
    }
  },
  head: {
    title: 'Société',
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
    }
  }
}
</script>

<style>

</style>