<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/protected">Protegida</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
#nav {
  border-bottom: 2px solid #42b983;
}
</style>