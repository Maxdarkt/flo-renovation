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
            Flo rénovation vous propose diffférents modèles de volets :
            <ul>
              <li class="disc">
                Volets roulants (en alumiunm, PVC)
              </li>
              <li class="disc">
                Volets roulants solaires
              </li>
              <li class="disc">
                Brise Soleil Orientable (BSO)
              </li>
            </ul>
          </p>
          <p class="mt-8">
            Nos techniciens se déplacent pour vous conseiller le type de volet adapté à votre projet et réalise un relevé.
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
  name: 'ShuttersPage',
  data() {
    return {
      picturesSlide: [
        {
          id: 1,
          src: require('@/assets/images/shutters/shutters_bso.jpeg'),
          alt: 'BSO',
          title: 'BSO',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        },
        {
          id: 2,
          src: require('@/assets/images/shutters/shutters_renovation_closed.jpeg'),
          alt: 'volets roulants',
          title: 'Volets roulants rénovation',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        },
        {
          id: 3,
          src: require('@/assets/images/shutters/shutters_renovation_solar_2.jpeg'),
          alt: 'volets roulants',
          title: 'Volets roulants solaires',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        },
        {
          id: 4,
          src: require('@/assets/images/shutters/shutters_renovation_wood.jpeg'),
          alt: 'volets roulants aspect bois',
          title: 'Volets roulants',
          isLink: true,
          linkText: 'DEVIS GRATUIT',
          to: 'contact'
        }
      ],
      titleBar: {
        isPicture: false,
        src: 'https://placeimg.com/1400/400/arch',
        title: 'VOLETS',
        description: 'VOLETS ROULANTS NEUFS, RENOVATION, SOLAIRE OU BSO ...'
      }
    }
  },
  head: {
    title: 'Volets',
  }
}
</script>
