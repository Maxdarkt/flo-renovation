<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :src="titleBar.src" 
      :title="titleBar.title" 
      :description="titleBar.description"
    />
    <div class="lg:max-w-screen-lg mx-auto mt-16">
      <!-- <h2 class="w-full text-2xl font-semibold text-center my-16">Titre 2</h2> -->
      <div class="flex flex-col md:flex-row space-y-14 md:space-y-0 px-4">
        <div class="w-full text-justify pr-4">
          <p class="mt-8">
            Flo rénovation vous propose diffférents modèles de portes de garage en standard ou sur mesure : en aluminium, PVC, bois ...
          </p>
          <p class="mt-8">
            Nos techniciens vous apporte les conseils nécessaires pour choisir parmis un large catalogue de produits selectionnés par nos soins.
          </p>
        </div>
        <CarousselSlide 
        class="rounded-md"
        :pictures="picturesSlide"
        />
      </div>
    </div>
    <BannerQuality class="mt-32"/>
  </div>
</template>

<script>
export default {
  name: 'GarageDoorPage',
  data() {
    return {
      picturesSlide: [
        {
          id: 1,
          src: require('@/assets/images/garageDoor/garage_door_large_wood.jpeg'),
          alt: 'Porte de garage',
          title: 'Porte de garage 5ml',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        },
        {
          id: 2,
          src: require('@/assets/images/garageDoor/garage_door_wood.jpeg'),
          alt: 'Porte de garage',
          title: 'Porte de garage aspect bois',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        },
        {
          id: 3,
          src: require('@/assets/images/garageDoor/garage_door_white.jpeg'),
          alt: 'Porte de garage',
          title: 'Porte de garage',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        },
        {
          id: 4,
          src: require('@/assets/images/garageDoor/garage_door_white_2.jpeg'),
          alt: 'Porte de garage',
          title: 'Porte de garage',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        }
      ],
      titleBar: {
        isPicture: false,
        src: require('@/assets/images/background/renovation.jpg'),
        title: 'PORTES DE GARAGE',
        description: 'LA PORTE DE GARAGE DOIT POUVOIR ASSURER LA SÉCURITÉ ET L\'ISOLATION DE VOTRE LOGEMENT.'
      }
    }
  },
  head: {
    title: 'Portes de garage',
  }
}
</script>