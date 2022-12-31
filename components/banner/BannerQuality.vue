<template>
  <div class="w-full py-8 px-2 md:px-8 bg-secondary/95 text-white flex flex-col md:flex-row items-center md:justify-around space-y-12 md:space-y-0">
    <div v-for="item of items" :key="item.id" class="px-2 md:p-8 flex flex-col justify-start items-center xs:w-[300px]">
      <component :is="item.icon" class="w-16 h-16 text-primary" />
      <h3 class="text-center text-xl mt-4">
        {{  item.title }}
      </h3>
      <div class="h-2 border-b-2 border-primary w-24 my-4"></div>
      <p class="text-justify font-normal">
        {{  item.description  }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BannerQuality',
  data() {
    return {
      items: [
        {
          id: 1,
          icon: 'outline-calendar-icon',
          title: 'Garantie Délais',
          description: 'Nous nous engageons à mettre en oeuvre les moyens nécessaires pour finir les travaux dans les délais.'
        },
        {
          id: 2,
          icon: 'outline-badge-check-icon',
          title: 'Garantie Qualité',
          description: 'Nous mettons en place un Plan Qualité qui met en évidence les points critiques et les points d\'arrêts.'
        },
        {
          id: 3,
          icon: 'outline-shield-check-icon',
          title: 'Garantie Technique',
          description: 'L\'équipe qui est en charge de votre projet à pour objectif d\'apporter les meilleures solutions techniques.'
        }
      ]
    }
  }
}
</script>