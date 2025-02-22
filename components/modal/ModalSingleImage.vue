<template>
  <div id="overlay" class="fixed top-0 left-0 right-0 bottom-0 bg-black/95 text-white flex flex-col justify-between items-center">
    <div class="w-full bg-black flex items-center justify-end">
      <h2 v-if="currentDescription" class="text-xl text-white w-full text-center -mr-8">
        {{  currentTitle }}
      </h2>
      <button class="p-4" @click="emitCloseModal">
        <outline-x-icon class="w-8 h-8 text-white transition duration-300 hover:scale-125" />
      </button>
    </div>
    <div class="max-w-4xl w-full h-[calc(h-full-h-40)] flex justify-center items-center">
      <img :src="currentPicture" :alt="currentAlt" class="rounded-md" />
    </div>
    <div class="w-full bg-black h-20 flex justify-center items-center">
      <p :class="[currentDescription ? 'text-lg' : 'text-xl']">
        {{  currentDescription ? currentDescription : currentTitle }}
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
      default: null
    },
    currentAlt: {
      type: String,
      default: null
    },
    currentTitle: {
      type: String,
      default: 'Titre'
    },
    currentDescription: {
      type: String,
      default: null
    }
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