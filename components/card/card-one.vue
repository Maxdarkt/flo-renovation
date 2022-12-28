<template>
  <div class="card bg-white shadow-xl">
  <figure v-if="src"><img :src="src" :alt="alt" /></figure>
  <div class="card-body">
    <h2 class="card-title flex flex-col items-start">
      {{ title }}
      <span class="h-2 border-b-2 border-primary w-8"></span>
    </h2>
    <p>
      {{ text }}
    </p>
    <div v-if="isBtn" class="card-actions justify-end">
      <button class="btn btn-primary">
        {{ btnText }}
      </button>
    </div>
    <div v-else-if="isLink" class="card-actions justify-end">
      <nuxt-link :to="to" class="btn btn-primary">
        {{ linkText }}
      </nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardOne',
  props: {
    src: {
      type: String,
      defaultValue: null,
    },
    alt: {
      type: String,
      defaultValue: null,
    },
    title: {
      type: String,
      defaultValue: 'Titre',
    },
    text: {
      type: String,
      defaultValue: 'Text ...',
    },
    isBtn: {
      type: Boolean,
      defaultValue: false
    },
    btnText: {
      type: String,
      defaultValue: 'En savoir +',
    },
    isLink: {
      type: Boolean,
      defaultValue: false
    },
    linkText: {
      type: String,
      defaultValue: 'En savoir +',
    },
    to: {
      type: String,
      defaultValue: '',
    }

  }
}
</script>