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
  name: 'CardVertImgDesc',
  props: {
    src: {
      type: String,
      defaultValue: 'https://placeimg.com/400/225/arch',
    },
    alt: {
      type: String,
      defaultValue: 'photo',
    },
    title: {
      type: String,
      defaultValue: 'Titre',
    },
    text: {
      type: String,
      defaultValue: 'Laudantium voluptatum odio in officiis vero ratione inventore ex quia ipsum quae ducimus doloremque, ad laborum accusantium molestiae fugit quam repellendus modi magni? Aliquam quae nihil repellendus alias nostrum fugit.',
    },
    isBtn: {
      type: Boolean,
      defaultValue: true
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