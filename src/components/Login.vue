<template>
  <div>
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="login-email"
        >Usuario</label
      >
      <input
        class="form-control"
        id="login-email"
        type="text"
        name="login-email2"
        placeholder=""
        aria-describedby="login-email"
        autofocus=""
        tabindex="1"
        v-model="user"
        v-uppercase
      />
    </div>
    <div class="form-group">
      <div class="d-flex justify-content-between">
        <label class="size-text-login" for="login-password"
          >Contrase&ntilde;a</label
        >
        <a><small>Olvidaste tu contrase&ntilde;a?</small></a
        >
      </div>
      <div class="input-group input-group-merge form-password-toggle">
        <input
          class="form-control form-control-merge"
          id="login-password"
          type="password"
          name="login-password"
          placeholder=""
          aria-describedby="login-password"
          tabindex="2"
          v-model="password"
          v-uppercase
        />
        <!-- <div class="input-group-append"><span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span></div> -->
      </div>
    </div>
    <button class="btn btn-primary btn-block" @click="validarLogin()">
      Ingresar
    </button>
  </div>
</template>

<script>
import image from "@/assets/images/pages/login-v2.svg";
import axios from "axios";
import constantes from "../store/Constantes";

export default {
  name: "Login",
  data() {
    return {
      logo_v2: image,
      user: null,
      password: null,
      cargando: false,
    };
  },
  created() {},
  computed: {
    login: {
      // getter
      get: function () {
        return this.Login;
      },
      // setter
      set: function () {
        console.log("enviando parametro ");
        this.$emit("cambiar-registro");
      },
    },
  },
  methods: {
    validarLogin() {
      this.cargando = true;
      if (this.password == null || this.password.length <= 5) {
        this.$swal({
          icon: "info",
          title: "info",
          text: "Debe ingresar una contraseña",
        });
        this.cargando = false;
        return;
      } else if (this.user == null || this.user.length <= 2) {
        this.$swal({
          icon: "info",
          title: "info",
          text: "Debe ingresar un usuario",
        });
        this.cargando = false;
        return;
      } else {
        this.$router.replace("/menu");
        localStorage.setItem("User", this.user);

        // this.guardarUser();
      }
    },
    guardarUser() {
      let url = constantes.rutaAdmin+"/login-externos";
      axios
        .get(
          url, {
          params: {
            user: this.user,
            clave: this.password,
          },
        })
        .then((response) => {
          this.usuarioRespuesta = response.data;
          this.cargando = false;
          if (response.data.esCorrecto) {
            localStorage.setItem(
              "User",
              this.usuarioRespuesta.resultado.persona.nroDocumento
            );
            localStorage.setItem(
              "nombreUsuario",
              this.usuarioRespuesta.resultado.persona.nombreCompleto
            );
            localStorage.setItem(
              "numeroDocumento",
              this.usuarioRespuesta.resultado.persona.nroDocumento
            );
            localStorage.setItem(
              "telefonoPrincipal",
              this.usuarioRespuesta.resultado.persona.telefonoPrincipal
            );
            localStorage.setItem(
              "usuario",
              this.usuarioRespuesta.resultado.usuario
            );
            this.$router.replace("/menu");
            this.continuar = true;
          } else {
            this.$swal({
              icon: "info",
              title: "info",
              text: this.usuarioRespuesta.mensajeError,
            });
          }
        })
        .catch((e) => {
          this.cargando = false;
          console.log("error al logear ");
          console.log(e.response.data.mensajeError);
          this.$swal({
            icon: "error",
            title: "Error",
            text: e.response.data.mensajeError,
          });
        })
        .finally(() => {
          this.cargando = false;
        });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600");
@import "../assets/css/colors.css";
@import "../assets/css/bootstrap-extended.css";
@import "../assets/css/themes/bordered-layout.css";
@import "../assets/css/plugins/forms/form-validation.css";
@import "../assets/css/pages/page-auth.css";
.position-left {
  float: left;
}
.size-text-login {
  font-size: 13px;
}
</style>