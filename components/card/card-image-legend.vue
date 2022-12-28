<template>
  <div class="group card relative w-[300px] h-[250px] shadow-xl rounded-lg overflow-hidden cursor-pointer" @click="emitOpenModal({currentPicture: src, currentAlt: alt, currentLegend: title})">
    <div 
      class="group w-full h-full bg-center bg-cover bg-no-repeat scale-110 grayscale translate-all duration-500 group-hover:scale-100 group-hover:grayscale-0" 
      :style="{background: `url(${src})`}"></div>
    <div class="absolute bottom-0 left-0 right-0 h-8 bg-black/70 flex justify-center items-center">
      <h4 class="text-white font-medium trainsition duration-500 group-hover:text-primary">
        {{ title }}
      </h4>
    </div>
</div>
</template>

<script>
export default {
 name: 'CardImageLegend',
 props: {
  src: {
      type: String,
      defaultValue: null,
    },
    alt: {
      type: String,
      defaultValue: 'photo',
    },
    title: {
      type: String,
      defaultValue: 'Titre',
    }
 },
 methods: {
  emitOpenModal(payload) {
    this.$emit('event-open-modal', payload);
  }
 }
}
</script>

<style>

</style>