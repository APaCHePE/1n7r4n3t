<template>
  <div class="main-content body-full positionRight">
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Registro de Facturas Físicas</titulo-header><br />
      <div class="body-registro" v-loading="loading">
        <br />
        <br />
        <div >
          <el-row style="margin-top: 20px">
            <el-col :md="4">
              <p class="izquierda">Ruc:</p>
            </el-col>
            <el-col :md="4">
              <el-input
                style="width: 100%"
                class="izquierda"
                v-model="ruc"
              ></el-input>
            </el-col>
            <el-col :md="5">
              <el-button class="centro" @click="buscarRuc()">validar</el-button>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :md="4">
              <p class="izquierda">Razon Social:</p>
            </el-col>
            <el-col :md="8">
              <el-input
                style="width: 80%"
                type="textarea"
                class="izquierda"
                v-model="validacionNombre"
                disabled
                autosize
              ></el-input>
            </el-col>
            <el-col :md="4">
              <p class="izquierda">Dirección:</p>
            </el-col>
            <el-col :md="8">
              <el-input
                type="textarea"
                style="width: 80%"
                class="izquierda"
                v-model="validacionDomicilio"
                disabled
                autosize
              ></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :md="4">
              <p class="izquierda">Tipo de Comprobante:</p>
            </el-col>
            <el-col :md="8">
              <el-select v-model="value" placeholder="Select" class="izquierda">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :md="4">
              <p class="izquierda">Número:</p>
            </el-col>
            <el-col :md="3">
              <el-input class="izquierda" style="width: 80%" v-model="serie"></el-input>
            </el-col>
            <el-col :md="1">
              <p class="derecha"><b>-</b></p>
            </el-col>
            <el-col :md="3">
              <el-input class="izquierda" style="width: 80%" v-model="numero"></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :md="4">
              <p class="izquierda">Fecha de emisión:</p>
            </el-col>
            <el-col :md="8">
              <el-date-picker
                class="izquierda"
                style="width: 80%"
                v-model="value1"
                type="date"
                placeholder="Pick a day"
              >
              </el-date-picker>
            </el-col>
            <el-col :md="4" class="centro">
              <p class="izquierda">Fecha de vencimiento:</p>
            </el-col>
            <el-col :md="8">
              <el-date-picker
                class="izquierda"
                style="width: 80%"
                v-model="value2"
                type="date"
                placeholder="Pick a day"
              >
              </el-date-picker>
            </el-col>
          </el-row>

          <el-row style="margin-top: 20px">
            <el-col :md="4">
              <p class="izquierda">Descripción:</p>
            </el-col>
            <el-col :md="12">
              <el-input
                v-model="descripcionGeneral"
                class="izquierda"
                type="textArea"
                style="width: 80%"
              autosize></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :md="5">
              <el-checkbox v-model="igvAfecto" class="izquierda"
                >Afecto IGV</el-checkbox
              >
            </el-col>
            <el-col :md="3">
              <p style="float: center">Importe:</p>
            </el-col>
            <el-col :md="4">
              <el-input style="width: 100%; float: left" v-model="importe"></el-input>
            </el-col>
            <el-col :md="2">
              <p style="float: center">IGV:</p>
            </el-col>
            <el-col :md="2">
              <el-input style="width: 100%; float: left" :disabled="igvAfecto==false" v-model="igv"></el-input>
            </el-col>
            <el-col :md="3">
              <p style="float: center">Subtotal:</p>
            </el-col>
            <el-col :md="4">
              <el-input style="width: 100%; float: left" :disabled="igvAfecto==false" v-model="subtotal"></el-input>
            </el-col> </el-row
          ><br />
          <el-button type="primary" class="derecha" style=" margin-right: 45px !important"
            >Adjuntar Escaneado<i class="el-icon-upload2"></i></el-button
          ><br />
        </div>
        <br />
        <br />
        <div id="detalle" class="detalle">
          <div>
            <table id="example2" class="table table-hover table-sm mb-2">
              <thead>
                <tr>
                  <th class="text-center" width="10%">Cantidad</th>
                  <th class="text-center" width="35%">Descripcion</th>
                  <th class="text-center" width="10%">Valor Unitario</th>
                  <th class="text-center" width="10%">Importe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <template></template>
                  </td>
                  <td>
                    <template></template>
                  </td>
                  <td>
                    <template></template>
                  </td>
                  <td>
                    <template></template>
                  </td>
                </tr>
              </tbody>
            </table>
            <el-button @click="agregarDetalle()"> + Insertar Detalle</el-button>
          </div>
          <br />
        </div>

        <el-dialog
          width="30%"
          title="Detalle de la Factura"
          :visible.sync="innerVisible"
          append-to-body
        >
          <div>
            <p>Cantidad: <el-input v-model="Cantidad"></el-input></p>
          </div>
          <div>
            Descripción:
            <el-input
              type="textarea"
              :rows="2"
              placeholder="Ingrese el descripción"
              v-model="observacion"
              autosize
            >
            </el-input>
          </div>
          <br />

          <div>
            <p>Valor Unitario:<el-input v-model="valorUnitario"></el-input></p>
          </div>
          <div>
            <p>Importe:<el-input v-model="valorUnitario"></el-input></p>
          </div>

          <div slot="footer" class="dialog-footer">
            <el-button
              type="primary"
              @click="
                (innerVisible = false),
                  (dialogVisible = false),
                  activarCuenta(12, observacion)
              "
              >Agregar</el-button
            >
          </div>
        </el-dialog>
      </div>

      <div style="margin-right: 7%">
        <br /><el-button type="primary"
          >Guardar Comprobante <i class="el-icon-upload2"></i></el-button
        ><br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import TituloHeader from "@/components/Utils/TituloHeader.vue";
import axios from "axios";
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      ruc: null,
      validacionEstado: null,
      validacionNombre: null,
      validacionDomicilio: null,

      loading:false,

      serie:null,
      numero:null,
      descripcionGeneral:null,
      igvAfecto:false,

      importe:null, 
      igv:null, 
      subtotal:null,

      options: [
        {
          value: "Option1",
          label: "OT",
        },
        {
          value: "Option2",
          label: "FACTURA",
        },
        {
          value: "Option3",
          label: "RECIBO",
        },
      ],
      value: "",

      //variables
      value1: null,
      value2: null,
      innerVisible: false,
      Cantidad: null,
      observacion: null,
      valorUnitario: null,
    };
  },
  methods: {
    agregarDetalle() {
      this.innerVisible = true;
    },

    buscarRuc() {
      this.loading = true
      var url =
        "https://mz-services-test.miraflores.gob.pe:8090/api/persona/datos-sunat/" +
        this.ruc;
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
          if (this.validacionEstado.trim() == "ACTIVO") {
            this.loading =false
            this.$swal({
              icon: "success",
              text: "Busqueda exitosa",
            });
          } else {
            this.loading =false
            this.$swal({
              icon: "info",
              text: "No se encontro registro.",
            });
            this.ruc = null,
            this.validacionEstado = null;
          this.validacionNombre = null;
          this.validacionDomicilio = null;

          }

          alert(this.validacionEstado);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
.centro {
  float: center;
}
.derecha {
  float: right;
  margin-right: 45px;
}
.izquierda {
  float: left;
  margin-left: 40px;
}
.body-registro {
  width: 90%;
  box-shadow: 3px 2px 10px #c7c7c7;
  /* border: 1px solid #b0b0b0; */
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  margin-left: 20px;
}
.cuerpo {
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 3px solid rgb(225, 225, 228);
}
.detalle {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
