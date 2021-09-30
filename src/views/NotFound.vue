<template>
  <div>
    <h2>La página buscada no existe 🙈🙉🙊.</h2>

      <b-button class="m-1" @click="goToHome" variant="">Ir al home</b-button>

  </div>
</template>

<script>
export default {
  methods: {
     goToHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>