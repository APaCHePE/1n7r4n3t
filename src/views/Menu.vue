<template>
  <div>
    <div
      class="
        ball-scale-multiple
        top-bar-fixed
        left-sidebar-fixed
        page-footer
        boxed-layout
      "
      style="background-color: #ffffff; width: 100% !important"
    >
      <el-menu
        class="el-menu-demo menumobil"
        mode="horizontal"
      >
        <el-menu-item index="1"
          ><img class="" src="../plugins/img/logo.png" width="70" height="23px"
        /></el-menu-item>

        <router-link :to="'/'"
          ><el-menu-item index="2" style="float: right"
            >Cerrar Sesión</el-menu-item
          ></router-link
        >
      </el-menu>

      <Sidebar class="menu" />

      <div class="container container-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {
   
  },
};
</script>

<style>
@import "../plugins/css/style.css";
@import "../plugins/css/main.css";

.contenedor-opciones {
  position: absolute;
}
.options {
  display: flex;
}
.navPrincipal {
  background-color: #ffffff;
  box-shadow: 3px 2px 10px #c7c7c7;
}
.buttonMenu {
  float: left;
  box-shadow: none;
}
.positionRight {
  margin-right: 0px;
  display: flex;
}
.menu {
  display: block;
  margin-left: -100px;
}
.menumobil {
  display: none !important;
}
@media only screen and (max-width: 600px) {
  .menu {
    display: none !important;
  }
  .menumobil {
    display: block !important;
  }
}
</style>
