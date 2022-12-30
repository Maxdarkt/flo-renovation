<template>
  <div>
    <CarousselSlide 
      :pictures="picturesSlide"
    />
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
import CardVertImgDesc from "@/components/card/CardVertImageDesc.vue"

export default {
  name: 'IndexPage',
  components: {
    CardVertImgDesc
  },
  data() {
    return {
      picturesSlide: [
        {
          id: 1,
          src: require('@/assets/images/caroussel/baies_vitrees.jpg'),
          alt: 'baie vitrées',
          title: 'Titre 1',
          description: 'Lorem ipsum dolor sit amet, consectetur ...'
        },
        {
          id: 2,
          src: require('@/assets/images/caroussel/chambre.jpg'),
          alt: 'chambre',
          title: 'Titre 2',
          description: 'Lorem ipsum dolor sit amet, consectetur ...'
        },
        {
          id: 3,
          src: require('@/assets/images/caroussel/maison_1.jpg'),
          alt: 'Maison',
          title: 'Titre 3',
          description: 'Lorem ipsum dolor sit amet, consectetur ...'
        },
        {
          id: 4,
          src: require('@/assets/images/caroussel/pool_house.jpg'),
          alt: 'Maison avec piscine',
          title: 'Titre 4',
          description: 'Lorem ipsum dolor sit amet, consectetur ...'
        },
      ],
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
  }
}
</script>
