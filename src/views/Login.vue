<template>
  <div>
    <b-form @submit.prevent="loginApp" @reset="resetForm" class="m-5">
      <b-form-group
        id="input-group-1"
        label="Correo:"
        label-for="input-1"
        class="m-5"
        label-align-sm="left"
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Ingrese email"
          required
        ></b-form-input>
        <b-form-text text-align-sm="right">Ej.: apcc0901@gmail.com</b-form-text>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
        class="m-5"
        label-align-sm="left"
      >
        <b-form-input
          class=""
          id="input-2"
          type="password"
          v-model="password"
          placeholder="Ingrese password"
          required
        ></b-form-input>
        <b-form-text text-align-sm="right">Ej.: lala009</b-form-text>
      </b-form-group>
      <b-button class="m-1" type="submit" variant="primary">Ingresar</b-button>
      <b-button class="m-1" type="reset" variant="info"
        >Limpiar campos</b-button
      >
      <div>
        <b-button class="m-1" @click="goToHome" variant="">Ir al home</b-button>
      </div>
    </b-form>
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
          this.$router.push("/protected");
        })
        .catch((e) => {
          console.log(e);
        });
      // console.log("enviando", this.email, this.password);
    },
    resetForm() {
      this.email = "";
      this.password = "";
    },
    goToHome() {
      this.$router.push("/home");
    },
  },
};
</script>