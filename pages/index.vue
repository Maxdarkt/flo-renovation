<template>
  <div>
    <CarousselSlide 
      :pictures="picturesSlide"
    />
    <BannerQualityHome />
    <div class="lg:max-w-screen-lg xl:max-w-screen-xl grid grid-cols-12 xxs:gap-8 md:gap-12 justify-center items-center px-4 mt-12 mb-24 mx-auto">
      <div class="col-span-12 px-4 lg:px-10">
        <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Réalisé par <span class="text-primary font-medium mt-16">Flo Rénovation</span>
        </h2>
        <div class="px-2 mymd:px-24 mt-8">
          <div class="bg-[url('@/assets/images/home.jpg')] bg-top bg-cover h-[300px] xxs:h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px] w-full rounded-md shadow-2xl"></div>
        </div>
        <div class="w-full flex flex-col mymd:flex-row mymd:justify-around items-center mt-16 lg:mt-32 gap-8">
          <video controls class="w-full h-[300px] xxs:h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px]">
            <source src="@/assets/movies/presentation_local.mp4" type="video/mp4">
          </video>
          <video controls class="w-full h-[300px] xxs:h-[350px] xs:h-[400px] sm:h-[500px] md:h-[600px]">
            <source src="@/assets/movies/movie_1.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <h2 class="col-span-12 text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 mt-8">
        Les activités de <span class="text-primary font-medium mt-16">Flo Rénovation</span>
      </h2>
      <div
        v-for="item of picturesCard"
        :id="`card-${item.id}`"
        :key="item.id"
        class="col-span-12 md:col-span-6 flex justify-center h-[400px] sm:h-[500px] mt-A"
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
          src: require('@/assets/images/caroussel/accueil_salon_2.jpg'),
          alt: 'salon avec baies vitrées',
          title: 'Fenêtres',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        },
        {
          id: 2,
          src: require('@/assets/images/caroussel/accueil_entree.jpeg'),
          alt: 'accueil porte entrée intérieur',
          title: 'Porte d\'entrée',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        },
        {
          id: 3,
          src: require('@/assets/images/caroussel/accueil_maison.jpeg'),
          alt: 'Maison extérieur',
          title: 'Volets roulants',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        },
        {
          id: 4,
          src: require('@/assets/images/caroussel/accueil_garage.jpeg'),
          alt: 'maison extérieur garage',
          title: 'Porte de garage',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        }
      ],
      picturesCard: [
        {
          id: 1,
          src: require('@/assets/images/windows/salon_interieur_2.jpg'),
          alt: 'Photo de fenêtres',
          title: 'Fenêtres',
          text: 'Découvrir notre gamme fenêtres et coulissants.',
          isBtn: false,
          isLink: true,
          linkText: 'En savoir +',
          to: 'windows'
        },
        {
          id: 2,
          src: require('@/assets/images/frontDoor/porte_interieur_anthracite_int.jpg'),
          alt: 'Photo porte entrée intérieur',
          title: 'Porte d\'entrée',
          text: 'Découvrir notre gamme porte d\'entrée.',
          isBtn: false,
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
          isBtn: false,
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
          isBtn: false,
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
