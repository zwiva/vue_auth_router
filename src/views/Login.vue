<template>
  <div>
    <h1>Bienvenid@</h1>
    <form @submit.prevent="loginApp">
      <label for="mail">Correo</label>
      <input
        type="email"
        id="mail"
        placeholder="escribe tu correo"
        v-model="email"
        required
      />

      <label for="mail">Correo</label>
      <input
        type="password"
        id="password"
        placeholder="escribe tu contraseña"
        v-model="password"
        required
      />

      <button type="submit">Loguearse</button>
    </form>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    loginApp() {
      console.log(this.email, this.password);
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          console.log("respuesta", response.operationType);
          this.$store.dispatch("defineCurrentUser", {
            email: response.user.email,
          });
          this.$router.push("/about");
        })
        .catch((e) => {
          console.log(e);
        });
      // console.log("enviando", this.email, this.password);
    },
  },
};
</script>
