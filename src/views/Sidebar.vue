<template>
  <div class="sidebar">
    <el-menu style="size: 20px" default-active="2" class="el-menu-vertical-demo"
      >
      <a>
        <img class="" src="../plugins/img/logo.png" width="250" height="75px" /></a>

      <router-link :to="'/menu'">
        <el-menu-item
          index="1"
          style="font-size: 20px; color: black"
        >
          <i class="el-icon-menu"></i>
          <span>Inicio</span>
        </el-menu-item></router-link
      >

      <el-submenu index="2" style=" text-align: left">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span style="font-size: 20px">Administración</span>
        </template>
        <el-menu-item-group @click="enviarSelect(ruta)">
          <router-link :to="'/solicitudes'">
            <el-menu-item index="1-1">
              <span>Solicitudes</span>
            </el-menu-item></router-link
          >
          <!-- <router-link :to="'/miscontactos'"> <el-menu-item index="1-2">
              <span>Contactos</span>
            </el-menu-item></router-link>
            <router-link :to="'/misusuarios'"><el-menu-item index="1-3">
              <span>Usuarios</span>
            </el-menu-item></router-link> -->
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3" style="">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span style="font-size: 20px">Facturas</span>
        </template>
        <el-menu-item-group>
          <router-link :to="'/facturas'"
            ><el-menu-item index="1-2">
              <span>Consultar</span>
            </el-menu-item></router-link
          >
          <router-link :to="'/facturasFisicas'"
            ><el-menu-item index="1-1">
              <span>Facturas Físicas</span>
            </el-menu-item></router-link
          >
        </el-menu-item-group>
      </el-submenu>

      <router-link :to="'/'"
        ><el-menu-item
          index="4"
          style="font-size: 20px;  color: black"
        >
          <i class="el-icon-circle-close"></i>
          <span>Cerrar Sesión</span>
        </el-menu-item></router-link
      >
    </el-menu>
  </div>
</template>

<script>
// import nav from "@/router/opciones-menu.js";
export default {
  name: "sidebar",
  data() {
    return {
      cuenta: "/micuenta",
      variant: "dark",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
    };
  },
  mounted() {
    console.log(this.itemsNav);
  },
  methods: {
    enviarSelect(param) {
      this.$emit("cambio-component", param);
      console.log(param);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
