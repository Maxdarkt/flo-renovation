<template>
  <!-- Implement the carousel -->
  <div class="relative w-full h-[500px] overflow-hidden">
    <!-- The dots -->
    <div class="absolute right-0 bottom-0 left-0 flex justify-center p-0 space-x-5 z-10 w-full px-5 py-3 bg-black/40">
      <div v-for="picture of pictures" :key="picture.id" class="dot w-3 h-3 rounded-full cursor-pointer" @click="currentSlide(picture.id)"></div>
    </div>
    <!-- The pictures -->
    <div v-for="picture of pictures" :key="picture.id" class="slide absolute top-0 left-0 w-full bottom-0 transform transition-all duration-500 ease-in-out opacity-0">
      <img class="w-full h-full object-cover" :src="picture.src" :alt="picture.alt">
      <div class="absolute top-1/3 w-[30%] h-[30%] mx-[35%] text-white bg-black/50 rounded-md p-4">
        <p class="font-semibold text-xl text-center">
          {{ picture.title }}
        </p>
        <p class="text-lg text-left mt-4">
          {{ picture.description }}
        </p>
      </div>
    </div>
    <!-- The previous button -->
    <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer" @click="moveSlide(-1)">❮</a>
    <!-- The next button -->
    <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 transition duration-500 hover:bg-black/50 text-gray-100 hover:text-white cursor-pointer" @click="moveSlide(1)">❯</a>
  </div>
</template>

<script>
export default {
  name: 'CarousselSlide',
  props:{
    pictures: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      slideIndex: 1,
      interval: 5000,
      timer: null,
    }
  },
  mounted() {
    // init the caroussel with the first slide
    this.showSlide(this.slideIndex)
    // init the timer
    this.launchTimer()
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    // launchTimer
    launchTimer() {
      this.timer = setInterval(() => {
        this.slideIndex++;
        if (this.slideIndex > this.pictures.length) {
          this.slideIndex = 1;
        }
        this.showSlide(this.slideIndex);
      }, this.interval);
    },
    // change slide with the prev/next button
    moveSlide(moveStep) {
      this.showSlide(this.slideIndex += moveStep);
      clearInterval(this.timer);
      this.launchTimer();
    },
    // change slide with the dots
    currentSlide(n) {
      this.slideIndex = n;
      this.showSlide(this.slideIndex);
    },
    showSlide(n) {
      const slides = document.getElementsByClassName('slide');
      const dots = document.getElementsByClassName('dot');
      
      if (n > slides.length) {
        this.slideIndex = 1 
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }

      // hide others slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('opacity-100');
        slides[i].classList.add('opacity-0');
      }
      // remove active status from all dots
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('bg-gray-100');
        dots[i].classList.add('bg-gray-400/90');
      }
      // show the active slide
      slides[this.slideIndex - 1].classList.add('opacity-100');
      slides[this.slideIndex - 1].classList.remove('opacity-0');

      // highlight the active dot
      dots[this.slideIndex - 1].classList.remove('bg-gray-400/90');
      dots[this.slideIndex - 1].classList.add('bg-gray-100');
    }
  }
}
</script>