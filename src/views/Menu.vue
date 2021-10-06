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
      <el-menu class="el-menu-demo menumobil" mode="horizontal">
       <el-menu-item index="1"> 
         <router-link :to="'/menu'">
         <img class="" src="../plugins/img/logo.png" width="70" height="23px"/>
         </router-link> 
        </el-menu-item>
        
        <el-menu-item index="2" style="float: right">
         <router-link :to="'/'"> 
          <a>Cerrar Sesión</a>
         </router-link>
        </el-menu-item>
      </el-menu>

      <el-row :gutter="10" class="d-flex">
        <el-col :md="4">  <Sidebar class="menu" /></el-col>
        <el-col :md="20"> <div class=" container-full" id="container">
        <router-view />
      </div></el-col>
      </el-row>

     

      
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
  methods: {},
};
</script>

<style>

div#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
}

div#container>div {

  white-space: nowrap;      
  overflow: hidden;         
  text-overflow: clip;  
}

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
