<template>
  <div class="w-full flex flex-col items-center">
    <div 
      v-if="isPicture" 
      :style="{
        background: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }" 
      class="w-full h-40 flex justify-center items-center">
      <h1 class="text-4xl font-semibold" :class="titleColor">
        {{  title  }}
      </h1>
    </div>
    <div v-else class="w-full h-40 bg-center bg-cover bg-no-repeat flex justify-center items-center" :class="`${bgColor}`">
      <h1 class="text-4xl font-semibold text-white">
        {{  title  }}
      </h1>
    </div>
    <div class="w-[70%] h-24 flex justify-center items-center bg-white rounded-md shadow-lg -mt-8 p-8">
      <p>
        {{  description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerTitle',
  props: {
    src: {
      type: String,
      default: null,
    },
    isPicture: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: 'bg-secondary',
    },
    title: {
      type: String,
      default: 'Titre',
    },
    titleColor: {
      type: String,
      default: 'text-white',
    },
    description: {
      type: String,
      default: 'Description',
    }
  }
}
</script>