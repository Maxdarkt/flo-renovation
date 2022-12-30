<template>
  <div class="w-full py-8 px-8 bg-secondary text-white mb-16">
    <h2 class="text-3xl text-center text-uppercase">
      Pourquoi choisir <span class="text-primary font-semibold">Flo Rénovation</span> 
    </h2>
    <div class="flex justify-around mt-8 divide-x-2 divide-gray-300">
      <div v-for="item of items" :key="item.id" class="p-8 flex flex-col justify-start items-center w-[300px]">
        <component :is="item.icon" class="w-16 h-16 text-primary" />
        <h3 class="text-center text-xl my-4">
          {{  item.title }}
        </h3>
        <p class="text-justify font-normal">
          {{  item.description  }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BannerStrongPoint',
  data() {
    return {
      items: [
        {
          id: 1,
          icon: 'outline-clock-icon',
          title: 'Réactivité',
          description: 'Pour toute demande de devis, nous nous engageons à répondre dans les plus brefs délais. Les travaux sont ensuite réalisés dans le respect des délais impartis.'
        },
        {
          id: 2,
          icon: 'outline-check-icon',
          title: 'Fiabilité',
          description: 'Nous accordons une grande importance à la qualité du travail fourni et à la satisfaction de notre clientèle. Toujours à votre écoute pour vous apporter nos conseils en fonction de vos contraintes.'
        },
        {
          id: 3,
          icon: 'outline-currency-euro-icon',
          title: 'Qualité-Prix',
          description: 'Nous travaillons avec les meilleurs fournisseurs depuis de nombreuses années. Nous pouvons vous proposer des produits sélectionnés aux meilleurs prix.'
        },
        {
          id: 4,
          icon: 'outline-sparkles-icon',
          title: 'Excellence',
          description: 'Nos devis sont clairs et détaillés. Nous vous conseillons les produits  les plus adaptés à votre besoin. Nous pouvons également vous accueillir dans notre showroom.'
        }
      ]
    }
  }
}
</script>