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
      <div class="flex items-center px-4">
        <div class="w-full text-justify pr-4 flex flex-col">
          <h2 class="w-full text-2xl font-semibold mt-4">
            A PROPOS DE <span class="text-primary font-bold">FLO RENOVATION</span>
          </h2>
          <div class="h-2 border-b-2 border-primary my-4 w-32"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita nihil veniam incidunt ut ipsam, inventore numquam similique odio a eaque voluptatem aliquid voluptas illo id quos excepturi assumenda unde.
          </p>
          <p>
            Non mollitia officia iusto hic reprehenderit nulla porro pariatur dolores dolorem commodi, repellendus sit reiciendis, dignissimos illum deserunt? Enim assumenda dolor consectetur amet alias quo aliquid ducimus distinctio. Optio, pariatur!
          </p>
          <p>
            Nam amet, reiciendis debitis fuga consequuntur quod facilis facere eaque harum porro voluptate eos labore iusto perferendis laboriosam ut libero necessitatibus rem quaerat, est ex minima? Suscipit, tempore aliquam. Voluptatibus.
          </p>
          <div class="self-end mt-4">
            <nuxt-link to="contact" class="btn btn-primary">Devis gratuit</nuxt-link>
          </div>
        </div>
        <div>
          <CardImageLegend 
            :id="pictures[0].id"
            :key="`galerie-${pictures[0].id}`"
            :src="pictures[0].src"
            :alt="pictures[0].alt"
            :title="pictures[0].title"
            :width="500"
            :height="400"
            @event-open-modal="openModal"
          />
        </div>
      </div>
    </div>
    <BannerQuality class="my-16"/>
    <div class="lg:max-w-screen-lg mx-auto mt-8 mb-16">
      <div class="flex items-center px-4">
        <div class="w-full text-justify pl-4 flex flex-col order-2">
          <h2 class="w-full text-2xl font-semibold mt-4">
            QUI SOMMES-NOUS ?
          </h2>
          <div class="h-2 border-b-2 border-primary my-4 w-32"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita nihil veniam incidunt ut ipsam, inventore numquam similique odio a eaque voluptatem aliquid voluptas illo id quos excepturi assumenda unde.
          </p>
          <p>
            Non mollitia officia iusto hic reprehenderit nulla porro pariatur dolores dolorem commodi, repellendus sit reiciendis, dignissimos illum deserunt? Enim assumenda dolor consectetur amet alias quo aliquid ducimus distinctio. Optio, pariatur!
          </p>
          <p>
            Nam amet, reiciendis debitis fuga consequuntur quod facilis facere eaque harum porro voluptate eos labore iusto perferendis laboriosam ut libero necessitatibus rem quaerat, est ex minima? Suscipit, tempore aliquam. Voluptatibus.
          </p>
          <div class="self-end mt-4">
            <nuxt-link to="contact" class="btn btn-primary">Contactez-nous</nuxt-link>
          </div>
        </div>
        <div>
          <CardImageLegend 
            :id="pictures[1].id"
            :key="`galerie-${pictures[1].id}`"
            :src="pictures[1].src"
            :alt="pictures[1].alt"
            :title="pictures[1].title"
            :width="500"
            :height="400"
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
        isPicture: true,
        src: require('@/assets/images/background/societe.jpg'),
        title: 'Société',
        titleColor: 'text-primary',
        description: 'Corrupti amet asperiores, totam quam consequatur voluptatem quos perferendis.'
      },
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