<template>
  <div class="home">
    <h2>Esta es la pagina de inicio</h2>
    <img
      src="https://c.tenor.com/2T506UHvonMAAAAS/pirate-cat.gif"
      alt=""
      height="150"
      class="m-5"
    />
    <p>
      Por favor ingrese con sus credenciales:
      <b-button @click="goToLogin" variant="info" class="m-2"
        >Acceder</b-button
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
