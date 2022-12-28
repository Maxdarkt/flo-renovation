<template>
  <div>
    <CarousselSlide />
    <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:justify-around my-24">
      <CardVertImgDesc 
        v-for="item of picturesCard"
        :id="`card-${item.id}`"
        :key="item.id"
        :src="item.src"
        :alt="item.alt"
        :title="item.title"
        :text="item.text"
        :is-btn="item.isBtn"
        :btn-text="item.btnText"
        :is-link="item.isLink"
        :link-text="item.linkText"
        :to="item.to"
        class="max-w-[300px]"
        />
    </div>
    <BannerStrongPoint />
    <BannerRealisation />
  </div>
</template>

<script>
import CarousselSlide from '@/components/caroussel/caroussel-slide.vue'
import CardVertImgDesc from '@/components/card/card-vert-image-desc.vue'
import BannerStrongPoint from '@/components/banner/BannerStrongPoint.vue'
import BannerRealisation from '@/components/banner/BannerRealisation.vue'

export default {
  name: 'IndexPage',
  components: {
    CarousselSlide,
    CardVertImgDesc,
    BannerStrongPoint,
    BannerRealisation
  },
  data() {
    return {
      picturesCard: [
        {
          id: 1,
          src: require('@/assets/images/caroussel/chambre.jpg'),
          alt: 'Photo rénovation ',
          title: 'Rénovation',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          isBtn: false,
          btnText: 'En savoir +',
          isLink: true,
          linkText: 'En savoir +',
          to: 'renovation'
        },
        {
          id: 2,
          src: require('@/assets/images/caroussel/chambre.jpg'),
          alt: 'photo aménagement',
          title: 'Aménagement',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          isBtn: false,
          btnText: 'En savoir +',
          isLink: true,
          linkText: 'En savoir +',
          to: 'amenagement'
        },
        {
          id: 3,
          src: require('@/assets/images/caroussel/chambre.jpg'),
          alt: 'photo extension',
          title: 'Extension',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          isBtn: false,
          btnText: 'En savoir +',
          isLink: true,
          linkText: 'En savoir +',
          to: 'extension'
        }
      ]
    }
  },
  head: {
    title: 'Accueil',
  },
  mounted() {
    // console.log(this.$vuetify.theme.dark)
  }
}
</script>
