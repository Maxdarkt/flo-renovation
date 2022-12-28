<template>
  <div>
    <CarousselSlide />
    <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:justify-around my-24">
      <CardOne 
        v-for="item of picturesCard" :key="item.id" 
        id="`card-${i}`" 
        class="max-w-[300px]"
        :src="item.src"
        :alt="item.alt"
        :title="item.title"
        :text="item.text"
        :isBtn="item.isBtn"
        :btnText="item.btnText"
        :isLink="item.isLink"
        :linkText="item.linkText"
        :to="item.to"
        />
    </div>
    <div>
      <div>
        <p>
          &#xF293;
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CarousselSlide from '@/components/caroussel/caroussel-slide.vue'
import CardOne from '@/components/card/card-one.vue'

export default {
  name: 'IndexPage',
  components: {
    CarousselSlide,
    CardOne
  },
  head: {
    title: 'Accueil',
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
  mounted() {
    // console.log(this.$vuetify.theme.dark)
  }
}
</script>
