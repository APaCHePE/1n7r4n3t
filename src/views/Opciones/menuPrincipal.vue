<template>
  <div
    class="content contentTG left-sidebar-toggle contenedorItems"
  >
    <div class="contenedor-principal ">
      <br /><br /><br />
      <div class="desptok">
      <div class="row mb25 mt25 bienvenido">
        <div class="col-md-6">
          <h2 class="t1">Bievenido(a)</h2>
          <span class="t2" id="NombreCompleto"></span
          ><span class="t3">Plataforma digital<b> ESTEC </b></span>
        </div>
        <div class="col-md-2">
          <img
            src="https://www.transfiriendo.com/wp-content/uploads/2020/06/c03417ebf4f447610528b07a704e0540.gif"
            alt=""
            style="width: 290px; height: 150px"
            data-themekey="#"
          />
        </div>
      </div>
      <div class="row" style="display: center">
        <div
          v-for="(i, a) in itemsNav"
          :key="a + 'lista'"
          class="card col-sm-3 offset-md-1"
        >
          <div v-if="i.children" class="card-header" style="color: #51c1ff2">
            {{ i.name }}
          </div>
          <div class="card-body" shadow="hover">
            <ul role="menu">
              <li
                v-for="(child, b) in i.children"
                :key="b + 'lista'"
                @click="enviarSelect(child)"
              >
                <router-link :to="child.url"
                  ><span class="options">{{ child.name }} </span></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<div class="mobil">
 
 
</div>

    </div>
  </div>
  
</template>

<script>
export default {
  // name: 'menuPrincipal',
  data() {
    return {
      itemsNav: [
        {
          name: "Administracion",
          url: "/",
          icon: "@/plugins/img/icons/ico-menu-administracion-sistema.png",
          children: [
            {
              name: "Proveedores",
              url: "/menu/miCuenta",
              icon: "@/plugins/img/icons/ico-menu-inbox.png",
            },
          ],
        },
        {
          name: "Comprobantes ",
          url: "/",
          icon: "@/plugins/img/icons/ico-menu-administracion-sistema.png",
          children: [
            {
              name: "Pendientes",
              url: "/facturas",
              icon: "@/plugins/img/icons/ico-menu-inbox.png",
            },
            {
              name: "Facturas Físicas",
              url: "/facturasFisicas",
              icon: "@/plugins/img/icons/ico-menu-inbox.png",
            }
          ],
        },
      ],
    };
  },
};
</script>

<style>
.bienvenido {
  box-shadow: 3px 2px 10px #c7c7c7;
  border-radius: 28px !important;
  background-color: #ffffff;
}
.contenedor-principal {
  width: auto;
  margin-left: 70px;
}
.options {
  display: flex;
}
.navPrincipal {
  background-color: #ffffff;
  box-shadow: 5px 10px 8px #c7c7c7;
}
.buttonMenu {
  float: left;
  box-shadow: none;
}
.positionRight {
  margin-right: 0px;
  display: flex;
}
.contenedorItems{
  position: absolute;
  min-height: 592px; 
  margin-left: 70px;
}
.desptok{
  display: block !important;
  }
  .mobil{
   display: none !important;
 }
@media only screen and (max-width: 600px) {
 .mobil{
  background: red !important;
   display: block !important;
 }
 .desptok{
  display: none !important;
  }
}
</style>
