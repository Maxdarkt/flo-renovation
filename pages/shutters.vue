<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :src="titleBar.src" 
      :title="titleBar.title" 
      :description="titleBar.description"
    />
    <div class="lg:max-w-screen-lg mx-auto">
      <h2 class="w-full text-2xl font-semibold text-center my-16">Titre 2</h2>
      <div class="flex flex-col md:flex-row space-y-14 md:space-y-0 px-4">
        <div class="w-full text-justify pr-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis expedita nihil veniam incidunt ut ipsam, inventore numquam similique odio a eaque voluptatem aliquid voluptas illo id quos excepturi assumenda unde.
          </p>
          <p>
            Non mollitia officia iusto hic reprehenderit nulla porro pariatur dolores dolorem commodi, repellendus sit reiciendis, dignissimos illum deserunt? Enim assumenda dolor consectetur amet alias quo aliquid ducimus distinctio. Optio, pariatur!
          </p>
          <p>
            Nam amet, reiciendis debitis fuga consequuntur quod facilis facere eaque harum porro voluptate eos labore iusto perferendis laboriosam ut libero necessitatibus rem quaerat, est ex minima? Suscipit, tempore aliquam. Voluptatibus.
          </p>
          <p>
            Dolore esse eveniet excepturi, assumenda facilis architecto libero voluptatum soluta id et, animi, nostrum similique commodi! Cupiditate consequatur libero atque dolorum placeat ipsam iure, minima quam itaque nisi nobis dolor?
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
        title: 'Volets',
        description: 'Corrupti amet asperiores, totam quam consequatur voluptatem quos perferendis.'
      }
    }
  },
  head: {
    title: 'Volets',
  }
}
</script>
