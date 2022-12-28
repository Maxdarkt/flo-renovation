<template>
  <div class="flex flex-col justify-center items-center pt-20 bg-white">
      <h1 class="text-3xl text-gray-600 mb-4">
        Cette page n'existe pas !
      </h1>
      <img src="@/assets/images/404NotFound.jpg" alt="404 not found" class="max-w-xl rounded-md"/>
  </div>
</template>

<script>
export default {
  name: 'Error',
  head: {
    title: 'Erreur 404',
  }
}
</script>