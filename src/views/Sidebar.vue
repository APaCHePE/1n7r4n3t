<template>
  <div class="page-container positionRight" style="box-sizing: content-box">
    <el-col
      style="mt-3; width: 18%; position: fixed; height: 100%;margin-left: -100px;
    display: flex; text-align: left"
    >
      <el-menu
        style="size: 20px; background-color: #003462"
        default-active="2"
        class="el-menu-vertical-demo"
        ><br />

        <a
          >
          <img
            class=""
            src="../plugins/img/nuevo.png"
            width="250"
            height="75px" />
            </a>
            <br />

       <router-link :to="'/menu'"> <el-menu-item
          index="1"
          style="font-size: 20px; padding: 30px 0px 0px 20px; color: #fff;"
        >
          <i class="el-icon-menu"></i>
          <span>Inicio</span>
        </el-menu-item></router-link>

        <el-submenu index="2" style="padding: 50px 0px 0px 0px; text-align: left">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span style="font-size: 20px; color: #fff">Administración</span>
          </template>
          <el-menu-item-group @click="enviarSelect(ruta)">
           <router-link :to="'/solicitudes'"> <el-menu-item index="1-1">
              <span style="font-size: 20px">Proveedores</span>
            </el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3" style="padding: 30px 0px 0px 0px">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span style="font-size: 20px; color: #fff">Comprobantes</span>
          </template>
          <el-menu-item-group>
            <router-link :to="'/facturas'"><el-menu-item index="1-2">
             <span style="font-size: 20px">Pendientes</span>
            </el-menu-item></router-link> 
            <router-link :to="'/facturasFisicas'"><el-menu-item index="1-1">
              <span>Facturas Físicas</span>
            </el-menu-item></router-link>
            
          </el-menu-item-group>
        </el-submenu>
        
        <el-submenu index="6" style="padding: 30px 0px 0px 0px">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span style="font-size: 20px;color: #fff">Archivo Banco</span>
          </template>
          <el-menu-item-group>
             <router-link :to="'archivo-banco'"><el-menu-item index="6-1">
             <span>Bandeja</span>
            </el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

        <router-link :to="'/'"><el-menu-item
          index="4"
          style="font-size: 20px; padding: 30px 0px 0px 20px; color: black;"
        >
          <i class="el-icon-circle-close"></i>
          <span style="font-size: 20px;color: #fff">Cerrar Sesión</span>
        </el-menu-item></router-link>
      </el-menu>
    </el-col>

    <!-- <b-sidebar
    id="sidebar-1"
    shadow
    class="mt-3"
    visible
    noCloseOnRouteChange
    noHeader
    :backdrop-variant="variant"
  >
    <div class="left-sidebar-wrapper">
      <div>
        <div class="scroll-area">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" style="text-align: center">
              <br />
              <a
                ><img
                  class=""
                  src="../plugins/img/logo.png"
                  width="300"
                  height="80px"
              /></a>
            </div>
          </div>
        </div>
        <div class="scroll-area">
          <ul
            class="sidebar-nav"
            data-open-speed="250"
            data-close-speed="200"
            data-easing="linear"
            style="text-align: left;"
          >
            <div v-for="(i, a) in itemsNav" :key="a + 'lista'">
              <li v-if="i.children">
                <a href="#" style="size: 20px"
                  ><span class="nav-item-text" style="font-size: 20px">{{
                    i.name
                  }}</span></a
                >
                <ul role="menu">
                  <li
                    v-for="(child, b) in i.children"
                    :key="b + 'lista'"
                    @click="enviarSelect(child)"
                  >
                    <router-link :to="child.url"
                      ><span class="nav-item-text" style="font-size: 20px"
                        >{{ child.name }}
                      </span></router-link
                    >
                  </li>
                </ul>
              </li>

              <li v-else @click="enviarSelect(i)">
                <router-link :to="i.url"
                  ><span class="nav-item-text" style="font-size: 20px"
                    >{{ i.name }}
                  </span></router-link
                >
              </li>
              <br />
            </div>
            <br />
          </ul>
        </div>
      </div>
    </div>
  </b-sidebar> -->
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

<style></style>
<!---->
