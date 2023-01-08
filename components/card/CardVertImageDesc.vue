<template>
  <div class="card relative w-full h-full shadow-xl rounded-lg overflow-hidden">
    <div 
      v-if="src"
      :style="{
        backgroundImage: `url(${src})`
      }"
      class="w-full h-[50%] sm:h-[60%] bg-cover bg-center bg-no-repeat"
    >
    </div>
    <div class="flex flex-col justify-around p-5" :class="[src ? 'h-[50%] sm:h-[40%]' : 'h-full']">
        <h5 class="mt-4 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ title }}
        </h5>
        <p class="mt-4 font-normal text-gray-700 dark:text-gray-400">
          {{ text }}
        </p>
        <div v-if="isBtn" class="flex justify-end mt-4">
        <button class="btn btn-primary">
          {{ btnText }}
        </button>
      </div>
      <div v-else-if="isLink" class="flex justify-end mt-4">
        <nuxt-link :to="to" class="btn btn-primary">
          {{ linkText }}
        </nuxt-link>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'CardVertImgDesc',
  props: {
    src: {
      type: String,
      default: 'https://placeimg.com/400/225/arch',
    },
    alt: {
      type: String,
      default: 'photo',
    },
    title: {
      type: String,
      default: 'Titre',
    },
    text: {
      type: String,
      default: 'Laudantium voluptatum odio in officiis vero ratione inventore ex quia ipsum quae ducimus doloremque, ad laborum accusantium molestiae fugit quam repellendus modi magni? Aliquam quae nihil repellendus alias nostrum fugit.',
    },
    isBtn: {
      type: Boolean,
      default: true
    },
    btnText: {
      type: String,
      default: 'En savoir +',
    },
    isLink: {
      type: Boolean,
      default: false
    },
    linkText: {
      type: String,
      default: 'En savoir +',
    },
    to: {
      type: String,
      default: '',
    }

  }
}
</script>