<template>
  <div class="m-3">
    <h3>Esta es la vista principal protegida 🔒</h3>
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
