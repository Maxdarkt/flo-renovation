<template>
  <div 
    class="group card relative w-full h-full shadow-xl rounded-lg overflow-hidden cursor-pointer"
    @click="emitOpenModal({currentPicture: src, currentAlt: alt, currentTitle: title, currentDescription: description})">
    <div
      :style="{
        backgroundImage: `url(${src})`
      }"
      class="group w-full h-full bg-cover bg-center bg-no-repeat scale-110 translate-all duration-500 group-hover:scale-100" 
    ></div>
    <div class="absolute bottom-0 left-0 right-0 h-fit bg-black/70 text-white flex flex-col justify-center items-center">
      <h4 class="w-full font-medium transition duration-500 group-hover:text-primary pt-2 px-2" :class="[description ? 'text-left' : 'text-center']">
        {{ title }}
      </h4>
      <p v-if="description" class="w-full text-xs text-left px-2 my-2">
        {{  description }}
      </p>
    </div>
</div>
</template>

<script>
export default {
 name: 'CardImageLegend',
 props: {
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: 'photo',
  },
  title: {
    type: String,
    default: 'Titre',
  },
  description: {
    type: String,
    default: null,
  },
 },
 methods: {
  emitOpenModal(payload) {
    this.$emit('event-open-modal', payload);
  }
 }
}
</script>