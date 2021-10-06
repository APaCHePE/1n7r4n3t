<template>
  <div class="main-content body-full positionRight">
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Lista de proveedores</titulo-header><br />
      <div class="container">
        <div id="miCuenta">
          <div>
            <div class="row">
              <div class="col-md-4" style="float: left">N° de RUC</div>
              <div class="col-md-4" style="float: left">Fecha</div>
              <div class="col-md-4" style="float: left">Estado</div>
              <div class="col-md-4" style="float: left"></div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <el-input style="width: 200px" v-model="numeroRuc"></el-input>
              </div>
              <div class="col-md-4">
                <el-date-picker
                  v-model="fecha"
                  type="daterange"
                  range-separator="a"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                >
                </el-date-picker>
              </div>
              <div class="col-md-4">
                <el-select
                  v-model="estadoUsuario"
                  placeholder="TODOS"
                >
                  <!-- <el-option
                    v-for="item in tipoComprobanteResultado"
                    :key="item.idParametro"
                    :label="item.nombre"
                    :value="item.idParametro"
                  >
                  </el-option> -->
                  <el-option
                    :label="'Aprobados'"
                    :value="'Aprobados'"
                  >
                  </el-option>
                  <el-option
                    :label="'Pendiente'"
                    :value="'Pendiente'"
                  >
                  </el-option>
                  <el-option
                    :label="'Rechazado'"
                    :value="'Rechazado'"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <br />
            <el-button
              style="background-color: #51c1ff; width: 900px; color: #ffffff"
              icon="el-icon-search"
              @click="BuscarFacturas()"
              >Buscar</el-button
            ><br /><br /><br />
          </div>
        </div>

        <div class="contenedor-body">
          <table id="example2" class="table table-hover table-sm mb-2">
            <thead>
              <tr>
                <th class="text-center"><b>Razón Social</b></th>
                <th class="text-center"><b>RUC</b></th>
                <th class="text-center"><b>Correo electrónico</b></th>
                <th class="text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item of datosSolicitudes"
                :key="'solicitudes1 ' + item.idProveedor"
              >
                <td>
                  <template>{{ item.persona.nombreCompleto }}</template>
                </td>
                <td>
                  <template>{{ item.persona.nroDocumento }}</template>
                </td>
                <td>
                  <template>{{ item.usuario }}</template>
                </td>
                <td>
                  <el-button
                    type="primary"
                    @click="mostrarDetalleSolicitud(item)"
                    >Detalle</el-button
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div v-if="detalleSolicitud">
            <el-dialog
              title="Detalle de solicitud"
              :visible.sync="dialogVisible"
              width="45%"
            >
              <!-- <div style="text-align: left">
                <h3><b>Detalle de solicitud</b></h3>
              </div> -->
              <div
                class="card-solicitud mb-2 border-primary text-left"
                style="border: 3px solid"
              >
                <div slot="header" class="cabecera text-info font-weight-bold">
                  <span>Datos Ingresados</span>
                </div>
                <div>
                  <b>RUC:</b> {{ detalleSolicitud.persona.nroDocumento }}
                </div>
                <div>
                  <b>Razón Social:</b
                  >{{ detalleSolicitud.persona.nombreCompleto }}
                </div>
                <div><b>Correo:</b> {{ detalleSolicitud.usuario }}</div>
                <div>
                  <b>Teléfono:</b
                  >{{ detalleSolicitud.persona.telefonoPrincipal }}
                </div>
              </div>
              <div
                class="card-solicitud mb-2 border-warning text-left"
                style="border: 3px solid"
              >
                <div slot="header" class="cabecera text-info font-weight-bold">
                  <span>Datos SUNAT</span>
                </div>
                <template v-if="cargando">
                  <div
                    class="spinner-border"
                    style="width: 3rem; height: 3rem; margin-left: 150px"
                    role="status"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </template>
                <template v-else-if="validacionNombre">
                  <div><b>RUC:</b> {{ validacionRUC }}</div>
                  <div><b>Razón Social:</b> {{ validacionNombre }}</div>
                  <div><b>Estado:</b> {{ validacionEstado }}</div>
                  <div><b>Dirección:</b> {{ validacionDomicilio }}</div>
                </template>
                <template v-else>No se encontraron datos</template>
              </div>
              <div
                class="card-solicitud mb-2 border-success text-left"
                style="border: 3px solid"
              >
                <div slot="header" class="cabecera text-info font-weight-bold">
                  <span>Datos ERP</span>
                </div>
                <template v-if="cargando">
                  <div
                    class="spinner-border"
                    style="width: 3rem; height: 3rem; margin-left: 150px"
                    role="status"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                </template>
                <template v-else-if="datosErp">
                  <div><b>RUC:</b> {{ datosErp.nroDocumento }}</div>
                  <div><b>Razón Social:</b>{{ datosErp.nombreCompleto }}</div>
                  <div><b>Dirección:</b> {{ datosErp.direccion }}</div>
                  <div>
                    <b>Teléfono</b>
                    {{
                      datosErp.telefonoPrincipal == null
                        ? "-"
                        : datosErp.telefonoPrincipal
                    }}
                  </div>
                </template>
                <template v-else>No se encontraron datos</template>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button type="danger" @click="innerVisible = true"
                  >Denegar</el-button
                >
                <el-button
                  type="primary"
                  @click="
                    (dialogVisible = false), activarCuenta(ESTADO_APROBADO)
                  "
                  >Aprobar</el-button
                >
              </span>
              <el-dialog
                title="Motivo de rechazo:"
                width="30%"
                :visible.sync="innerVisible"
                append-to-body
              >
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Ingrese motivo"
                  v-model="observacion"
                >
                </el-input>
                <div slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="validarCampoVacio()"
                    >Confirmar</el-button
                  >
                </div>
              </el-dialog>
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
const ESTADO_PENDIENTE = 9;
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      ESTADO_APROBADO: 10,
      ESTADO_RECHAZADO: 11,
      estadoUsuario: 'Pendiente',
      innerVisible: false,
      detalleSolicitud: null,
      observacion: null,
      //datos sunat
      validacionEstado: null,
      validacionNombre: null,
      validacionDomicilio: null,
      validacionRUC: null,
      datosSolicitudes: null,
      datosErp: null,

      dialogVisible: false,
      nombreRazonSocial: null,
      numeroRuc: null,
      cuenta: null,
      telefono: null,
      entidadDetraccion: "Banco de la Nacion",
      monedaDetraccion: "soles",

      cargando: null,
    };
  },
  created() {
    this.listarCuentas();
  },

  methods: {
    limpiarCaracteres() {
      this.observacion = null;
    },
    validarCampoVacio() {
      if (!this.observacion) {
        // this.modal("info", "Debe ingresar un motivos", "")
        alert("Debe ingresar un motivo");
        return;
      } else if (this.observacion.length < 3) {
        alert("Debe ingresar un motivo");
        // this.modal("info", "Debe ingresar un motivos", "")
        return;
      } else {
        this.activarCuenta(this.ESTADO_RECHAZADO, this.observacion);
        this.innerVisible = false;
        this.dialogVisible = false;
      }
    },
    listarCuentas() {
      axios
        .get("http://localhost:8090/api/admin/listar-proveedores", {
          params: {
            estado: ESTADO_PENDIENTE,
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
    modal(icono, titulo, texto) {
      this.$swal({
        icon: icono,
        title: titulo,
        text: texto,
      });
      if (this.cargando) this.cargando = false;
    },
    async activarCuenta(tipoAccion, obseracion) {
      this.cargando = true;
      var url = "http://localhost:8090/api/admin/activar-proveedor";
      const params = {
        idProveedor: this.detalleSolicitud.idProveedor,
        estado: tipoAccion,
        persona: {
          nombreCompleto: this.detalleSolicitud.persona.nombreCompleto,
        },
        usuario: this.detalleSolicitud.usuario,
        observacion: obseracion,
      };
      await axios
        .post(url, params)
        .then((response) => {
          this.modal("success", "Se ha aprobado correctamente", "");
          console.log("activacion exitosa");
          console.log(response.data);
        })
        .catch(() => {
          this.modal("info", "Ha ocurrido un error al procesar", "");
        });

      this.cargando = false;
      this.listarCuentas();
      this.limpiarCaracteres();
    },
    async mostrarDetalleSolicitud(rucSolicitud) {
      this.cargando = true;
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

      await axios
        .post(url, params)
        .then((response) => {
          console.log(response.data);
          this.validacionEstado = response.data.principal.sunat.estadoContrib;
          this.validacionNombre = response.data.principal.sunat.nombresContrib;
          this.validacionDomicilio = response.data.domicilio.sunat.domLegal;
          this.validacionRUC = this.detalleSolicitud.persona.nroDocumento;
        })
        .catch((e) => console.log(e));
      var urlErp = "http://localhost:8090/api/admin/listar-proveedor-erp";
      axios
        .get(urlErp, {
          params: {
            nroDocumento: rucSolicitud.persona.nroDocumento,
          },
        })
        .then((response) => {
          console.log("Resonse erp");
          console.log(response.data);
          if (response.data.esCorrecto) {
            this.datosErp = response.data.resultado.persona;
          }
        })
        .catch((e) => console.log(e));
      this.cargando = null;
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
.card-solicitud {
  font-size: 16px;
  padding: 10px;
  .cabecera {
    margin-bottom: 10px;
    text-decoration: underline;
  }
}

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
