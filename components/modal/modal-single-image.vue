<template>
  <div id="overlay" class="fixed top-0 left-0 right-0 bottom-0 bg-black/95 text-white z-30 flex flex-col justify-between items-center">
    <div class="w-full flex justify-end">
      <button class="p-4" @click="emitCloseModal">
        <outline-x-icon class="w-8 h-8 text-white transition duration-300 hover:scale-125" />
      </button>
    </div>
    <div class="max-w-4xl w-full h-full flex justify-center items-center">
      <img :src="currentPicture" :alt="currentAlt" class="w-full h-auto rounded-md" />
    </div>
    <div class="w-full h-36 flex justify-center items-start">
      <p class="text-xl">
        {{  currentLegend }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSingleImage',
  props: {
    currentPicture: {
      type: String,
      defaultValue: null
    },
    currentAlt: {
      type: String,
      defaultValue: null
    },
    currentLegend: {
      type: String,
      defaultValue: 'legend'
    },
  },
  methods: {
    emitCloseModal() {
      this.$emit('event-close-modal');
    }
  }
}
</script>

<style>

</style>