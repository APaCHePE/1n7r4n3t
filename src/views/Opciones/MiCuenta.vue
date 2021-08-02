<template>
  <div class="main-content body-full positionRight">
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Solicitudes de Cuenta Proveedor</titulo-header><br />
      <div class="container">
        <div id="miCuenta"></div>
        <div>
          <div id="cuentasBAncarias" class="textoCuenta2">
            <div class="row">
              <div class="col-md-3">Razon Social</div>
              <div class="col-md-3">Ruc</div>
              <div class="col-md-3">Correo Empresa</div>
            </div>
            <div
              class="row"
              v-for="item of datosSolicitudes"
              :key="'solicitudes ' + item.idProveedor"
            >
              <div class="col-md-3">
                <input
                  class="form-control form-control-merge"
                  v-model="item.usuario"
                  disabled
                />
              </div>
              <div class="col-md-3">
                <input
                  class="form-control form-control-merge"
                  v-model="item.persona.nroDocumento"
                  disabled
                />
              </div>
              <div class="col-md-3">
                <input
                  class="form-control form-control-merge"
                  v-model="item.usuario"
                  disabled
                />
              </div>
              <div class="col-md-3">
                <el-button @click="mostrarDetalleSolicitud(item)"
                  >Detalle</el-button
                >
              </div>
            </div>
          </div>

          <div v-if="detalleSolicitud">
            <el-dialog
              title="Detalle"
              :visible.sync="dialogVisible"
            >
              <!-- <span>Nueva cuenta</span> -->
              <el-form>
                <el-form-item label="Datos Ingresados" style="font-size: 18px">
                  <el-col :md="24" style="text-align: left">
                    <el-row
                      ><b>Razon Social:</b>
                      {{ detalleSolicitud.persona.nombreCompleto }}</el-row
                    >
                    <el-row
                      ><b>Ruc:</b>
                      {{ detalleSolicitud.persona.nroDocumento }}</el-row
                    >
                    <el-row
                      ><b>Correo:</b> {{ detalleSolicitud.usuario }}</el-row
                    >
                    <el-row
                      ><b>Teléfono:</b> {{ detalleSolicitud.persona.telefonoPrincipal }}</el-row
                    >
                  </el-col>
                </el-form-item>
                <el-form-item label="Datos Sunat">
                  <br />
                  <el-row style="text-align: left">
                    <div col="6"><b>Razon Social:</b> {{ validacionNombre }}</div>
                    <div col="6"><b>Estado:</b> {{ validacionEstado }}</div>
                    <span :md="24"><b>Direcciòn:</b> {{ validacionDomicilio }}</span>
                  </el-row>
                </el-form-item>
                <el-form-item label="Datos ERNP"> 
                  <el-col v-if="datosErp" style="text-align: left">
                    <el-row><b>Razon Social:</b> {{datosErp.nombreCompleto}}</el-row>
                    <el-row><b>Nro. RUC:</b> {{datosErp.nroDocumento}}</el-row>
                    <el-row><b>Direcciòn:</b> {{datosErp.direccion}}</el-row>
                    <el-row><b>Teléfono</b> {{datosErp.telefonoPrincipal}}</el-row>
                  </el-col>
                  <el-col v-else>
                    <el-row>No se encontraron datos</el-row>
                  </el-col>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false, activarCuenta()"
                  >Guardar</el-button
                >
              </span>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TituloHeader from "@/components/Utils/TituloHeader.vue";

export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      detalleSolicitud: null,

      //datos sunat
      validacionEstado: null,
      validacionNombre: null,
      validacionDomicilio: null,
      datosSolicitudes: null,
      datosErp: null,

      dialogVisible: false,
      nombreRazonSocial: null,
      numeroRuc: null,
      cuenta: null,
      telefono: null,
      entidadDetraccion: "Banco de la Nacion",
      monedaDetraccion: "soles",
    };
  },
  created() {
    this.listarCuentas();
  },

  methods: {
    listarCuentas(){
      axios
      .get("http://localhost:8090/api/admin/listar-proveedores", {
        params: {
          estado: 8,
        },
      })
      .then((response) => {
        console.log(response.data.resultado);
        this.datosSolicitudes = response.data.resultado;
      })
      .catch((e) => {
        console.log(e);
        // this.$swal({
        //   icon: 'error',
        //   title: 'Error',
        //   text: "Intentelo más tarde"
        // });
      });
    },
    async activarCuenta(){
      var url = "http://localhost:8090/api/admin/activar-proveedor"
       await axios
        .get(url, {
          params:{
            "idProveedor": this.detalleSolicitud.idProveedor,
          }
        })
        .then((response) => {
          console.log("activacion exitosa");
          console.log(response.data);
          
        })
        .catch((e) => console.log(e));
        this.listarCuentas();
    },
    mostrarDetalleSolicitud(rucSolicitud) {
      console.log(rucSolicitud);
      this.detalleSolicitud = rucSolicitud;
      this.dialogVisible = true;
      console.log(rucSolicitud.persona.nroDocumento);

      var url =
        "https://mz-services-test.miraflores.gob.pe:8090/api/persona/datos-sunat/" +
        rucSolicitud.persona.nroDocumento;
      const params = {
        correoUsuario: "p.gsti006@miraflores.gob.pe",
      };

      axios
        .post(url, params)
        .then((response) => {
          console.log(response.data);
          this.validacionEstado = response.data.principal.sunat.estadoContrib;
          this.validacionNombre = response.data.principal.sunat.nombresContrib;
          this.validacionDomicilio = response.data.domicilio.sunat.domLegal;
        })
        .catch((e) => console.log(e));
      var urlErp = "http://localhost:8090/api/admin/listar-proveedor-erp";
      axios
        .get(urlErp, {
          params:{
            "nroDocumento": rucSolicitud.persona.nroDocumento,
          }
        })
        .then((response) => {
          console.log("Resonse erp");
          console.log(response.data);
          if(response.data.esCorrecto){
            this.datosErp = response.data.resultado.persona;
          }
        })
        .catch((e) => console.log(e));
    },
    añadirCuenta() {
      this.$swal({
        title: "Verificar",
        text: "Datos Registrados:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        inputPlaceholder: "Write something",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-top: 2px !important;
  margin-bottom: 2px !important;
}
.el-form-item__label {
  font-size: 18px !important;
}
.textoCuenta {
  text-align: left;
  width: 950px;
  margin-left: 65px;

  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 23px;
}
.textoCuenta2 {
  text-align: left;
  margin-left: 65px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
}
.titulo {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;

  color: #727272;

  width: 300px;
  height: 70px;
}
.botonDetalle {
  width: 107px;
  height: 40px;
  left: 1528px;
  top: 295px;

  background: #51c1ff;
  border: 1px solid #b0b0b0;
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
.titulo2 {
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
.añadir {
  color: #51c1ff;
  text-align: right;
  margin-right: 370px;
}
</style>
