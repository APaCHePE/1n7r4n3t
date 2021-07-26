<template>
<div class="main-content body-full positionRight" >
<div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Solicitudes de Cuenta Proveedor</titulo-header><br />  <div class="container" >
      <div id="miCuenta">
      </div>
      <div>
          <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <div class="col-md-3 ">Razon Social</div>
                <div class="col-md-3">Ruc</div>
                <div class="col-md-3">Correo Empresa</div>

            </div>
            <div class="row">
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3">                <el-button  @click="dialogVisible = true">Detalle</el-button> 
</div>

            </div>
        </div>
        <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <div class="col-md-3 ">Razon Social</div>
                <div class="col-md-3">Ruc</div>
                <div class="col-md-3">Correo Empresa</div>

            </div>
            <div class="row">
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3">                <el-button  @click="dialogVisible = true">Detalle</el-button> 
</div>

            </div>
        </div>
        <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <div class="col-md-3 ">Razon Social</div>
                <div class="col-md-3">Ruc</div>
                <div class="col-md-3">Correo Empresa</div>

            </div>
            <div class="row">
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3">                <el-button  @click="dialogVisible = true">Detalle</el-button> 
</div>

            </div>
        </div>
        <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <div class="col-md-3 ">Razon Social</div>
                <div class="col-md-3">Ruc</div>
                <div class="col-md-3">Correo Empresa</div>

            </div>
            <div class="row">
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3"><input class="form-control form-control-merge"></div>
                <div class="col-md-3">                <el-button  @click="dialogVisible = true">Detalle</el-button> 
</div>

            </div>



            


<el-dialog
                title="Editar"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <!-- <span>Nueva cuenta</span> -->
                <el-form >
                <el-form-item label="Datos Ingresados" >
                </el-form-item>
                <el-form-item label="Datos Sunat" >
                </el-form-item>
                <el-form-item label="Datos ERNP" >
                </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="dialogVisible = false">Guardar</el-button>
                </span>
              </el-dialog>


        </div>
    </div>          
  </div>
 </div>
</div>
</template>

<script>

import TituloHeader from "@/components/Utils/TituloHeader.vue";

export default {
  components: {
    TituloHeader,
  },
data(){
    return{
        dialogVisible: false,
        nombreRazonSocial:null,
        numeroRuc:null,
        cuenta:null,
        telefono:null,
        entidadDetraccion: 'Banco de la Nacion',
        monedaDetraccion: 'soles'
    }
},
methods:{
    
    añadirCuenta(){
        
        this.$swal({
                  title: "Verificar",
  text: "Datos Registrados:",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  inputPlaceholder: "Write something"
});

}
}
}
</script>

<style>
.textoCuenta{
    text-align: left;
    width: 950px;
    margin-left: 65px;

    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 23px;

}
.textoCuenta2{
    text-align: left;
    margin-left: 65px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
}
.titulo{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;

color: #727272;

width: 300px;
height: 70px;
}
.botonDetalle{
width: 107px;
height: 40px;
left: 1528px;
top: 295px;

background: #51C1FF;
border: 1px solid #B0B0B0;
box-sizing: border-box;
border-radius: 10px;
}
/* .inputEntrada{
border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-color: #b1b1b78c;
} */
.titulo2{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 29px;
line-height: 47px;

color: #727272;

width: 350px;
height: 70px;

width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
}
.añadir{
    color: #51c1ff;
    text-align: right;
    margin-right: 370px;
}
</style>