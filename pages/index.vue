<template>
  <div>
    <CarousselSlide 
      :pictures="picturesSlide"
    />
    <div class="max-w-screen-lg grid grid-cols-12 gap-8 md:gap-12 justify-center items-center px-4 my-24 mx-auto">
      <div
        v-for="item of picturesCard"
        :id="`card-${item.id}`"
        :key="item.id"
        class="col-span-12 md:col-span-6 flex justify-center h-[400px] sm:h-[500px]"
      >
        <CardVertImgDesc 
          :id="`CardVertImgDesc-${item.id}`"
          :key="`CardVertImgDesc-${item.id}`"
          :src="item.src"
          :alt="item.alt"
          :title="item.title"
          :text="item.text"
          :is-btn="item.isBtn"
          :btn-text="item.btnText"
          :is-link="item.isLink"
          :link-text="item.linkText"
          :to="item.to"
          class="w-[280px] xxs:w-[300px] sm:w-[350px] md:w-[400px]" 
        />
      </div>
    </div>
    <BannerStrongPoint />
    <!-- <BannerRealisation /> -->
    <CarousselMultiplesPictures />
  </div>
</template>

<script>
import CardVertImgDesc from "@/components/card/CardVertImageDesc.vue"
import CarousselMultiplesPictures from "~/components/caroussel/CarousselMultiplesPictures.vue";

export default {
  name: 'IndexPage',
  components: {
    CardVertImgDesc,
    CarousselMultiplesPictures
},
  data() {
    return {
      picturesSlide: [
        {
          id: 1,
          src: require('@/assets/images/caroussel/accueil_salon.jpeg'),
          alt: 'salon avec baies vitrées',
          title: 'Fenêtres',
          isButton: true,
          buttonText: 'Devis gratuit'
        },
        {
          id: 2,
          src: require('@/assets/images/caroussel/accueil_entree.jpeg'),
          alt: 'accueil porte entrée intérieur',
          title: 'Porte d\'entrée',
          isButton: true,
          buttonText: 'Devis gratuit'
        },
        {
          id: 3,
          src: require('@/assets/images/caroussel/accueil_maison.jpeg'),
          alt: 'Maison extérieur',
          title: 'Volets roulants',
          isButton: true,
          buttonText: 'Devis gratuit'
        },
        {
          id: 4,
          src: require('@/assets/images/caroussel/accueil_garage.jpeg'),
          alt: 'maison extérieur garage',
          title: 'Porte de garage',
          isButton: true,
          buttonText: 'Devis gratuit'
        }
      ],
      picturesCard: [
        {
          id: 1,
          src: require('@/assets/images/caroussel/accueil_salon.jpeg'),
          alt: 'Photo de fenêtres',
          title: 'Fenêtres',
          text: 'Découvrir notre gamme fenêtres et coulissants.',
          isLink: true,
          linkText: 'En savoir +',
          to: 'windows'
        },
        {
          id: 2,
          src: require('@/assets/images/frontDoor/door_front_2.jpeg'),
          alt: 'Photo porte entrée intérieur',
          title: 'Porte d\'entrée',
          text: 'Découvrir notre gamme porte d\'entrée.',
          isLink: true,
          linkText: 'En savoir +',
          to: 'frontDoor'
        },
        {
          id: 3,
          src: require('@/assets/images/shutters/shutters_bso.jpeg'),
          alt: 'Photo volets bso gris anthracite',
          title: 'BSO (RAL7071)',
          text: 'Découvrir notre gamme volets roulants, BSO.',
          isLink: true,
          linkText: 'En savoir +',
          to: 'shutters'
        },
        {
          id: 4,
          src: require('@/assets/images/garageDoor/garage_door_white.jpeg'),
          alt: 'photo porte de garage blanche',
          title: 'Porte de garage',
          text: 'Découvrir notre gamme sur les portes de garage.',
          isLink: true,
          linkText: 'En savoir +',
          to: 'garageDoor'
        }
      ]
    }
  },
  head: {
    title: 'Accueil',
  }
}
</script>
