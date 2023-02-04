<template>
  <div class="w-full py-8 px-2 md:px-8 bg-secondary/95 text-white flex flex-col md:flex-row items-center md:justify-around space-y-12 md:space-y-0">
    <div v-for="item of items" :key="item.id" class="px-2 md:p-4 flex flex-col justify-start items-center xs:w-[300px]">
      <component :is="item.icon" class="w-16 h-16 text-primary" />
      <div class="h-2 border-b-2 border-primary w-24 my-4"></div>
      <p class="text-center font-normal">
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
          icon: 'outline-star-icon',
          description: 'Made in France 🇫🇷'
        },
        {
          id: 2,
          icon: 'outline-switch-horizontal-icon',
          description: 'Intervention SAV en 48 h'
        },
        {
          id: 3,
          icon: 'outline-thumb-up-icon',
          description: 'Plus de 1000 clients satisfaits'
        },
        {
          id: 4,
          icon: 'outline-trending-up-icon',
          description: 'Plus de 15 années d\'expériences'
        },
        {
          id: 5,
          icon: 'outline-user-group-icon',
          description: '3 professionnels qualifiés'
        }
      ]
    }
  }
}
</script>