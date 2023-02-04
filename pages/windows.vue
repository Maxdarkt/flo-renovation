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
        <div class="w-full text-justify pr-8">
          <p class="mt-8">
            Flo rénovation vous propose diffférents modèles de fenêtres en standard ou sur mesure : en aluminium, PVC, bois ...
          </p>
          <p class="mt-8">
            Nos techniciens se déplacent sur site pour analyser les contraintes du chantier, prendre les mesures et apporter les meilleurs conseils.
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
  name: 'WindowsPage',
  data() {
    return {
      picturesSlide: [
        {
          id: 1,
          src: require('@/assets/images/windows/window_new_1.jpg'),
          alt: 'Menuiseries chantier neuf',
          title: 'Projet Neuf',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        },
        {
          id: 2,
          src: require('@/assets/images/windows/window_new_2.jpg'),
          alt: 'Menuiseries chantier neuf',
          title: 'Projet Neuf',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        },
        {
          id: 3,
          src: require('@/assets/images/windows/window_new_3.jpg'),
          alt: 'Menuiseries chantier neuf',
          title: 'Projet Neuf',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        },
        {
          id: 4,
          src: require('@/assets/images/windows/windows_coulissant_2.jpg'),
          alt: 'Menuiseries coulissant',
          title: 'Coulissant',
          isLink: true,
          linkText: 'Devis gratuit',
          to: 'contact'
        },
      ],
      titleBar: {
        isPicture: false,
        src: 'https://placeimg.com/1400/400/arch',
        title: 'FENETRES',
        description: 'DE NOUVELLES FENÊTRES PEUVENT TOUT CHANGER DANS LA MAISON.'
      }
    }
  },
  head: {
    title: 'Fenêtres',
  }
}
</script>