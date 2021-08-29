<template>
  <div class="main-content body-full positionRight">
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Registro de Comprobante</titulo-header><br />
      <div class="body-registro" v-loading="loading">
        <br />
        <div >
          <el-row style="margin-top: 10px">
            <el-col :md="3">
              <p class="izquierda izquierda-cy ">Ruc:</p>
            </el-col> 
            <el-col :md="5">
              <el-input
                style="width: 100%"
                class=""
                v-model="ruc"
              ></el-input>
            </el-col>
            <el-col :md="2">
              <el-button class="centro" type="success" @click="buscarRuc()">Buscar</el-button>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :md="3">
              <p class="izquierda izquierda-cy ">Razón Social:</p>
            </el-col>
            <el-col :md="11">
              <el-input
                style="width:100%"
                type="textarea"
                class=""
                v-model="validacionNombre"
                disabled
                autosize
              ></el-input>
            </el-col>
            <el-col :md="2">
              <p class="derecha izquierda-cy">Estado:</p>
            </el-col>
            <el-col :md="4">
              <el-input
                style="width: 100%"
                class=""
                v-model="validacionEstado"
                disabled
                autosize
              ></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :md="3">
              <p class="izquierda izquierda-cy">Dirección:</p>
            </el-col>
            <el-col :md="17">
              <el-input
                style="width: 100%"
                class=""
                v-model="validacionDomicilio"
                disabled
                autosize
              ></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :md="3">
              <p class="izquierda izquierda-cy">Tipo:</p>
            </el-col>
            <el-col :md="5">
              <el-select v-model="value" placeholder="Comprobante" class="" style="width: 100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :md="3">
              <p class="derecha izquierda-cy">Moneda:</p>
            </el-col>
            <el-col :md="3">
              <el-select v-model="value" placeholder="Moneda" class="" style="width: 100%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :md="2">
              <p class="derecha izquierda-cy">Número:</p>
            </el-col>
            <el-col :md="1">
              <el-input class="" style="width: 100%; padding: 0px !important" v-model="serie"></el-input>
            </el-col>
            <el-col :md="1">
              <p class="izquierda-cy"><b>-</b></p>
            </el-col>
            <el-col :md="2">
              <el-input class="" style="width: 100%" v-model="numero"></el-input>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col class="mx-0 px-0" :md="3">
              <p class="izquierda izquierda-cy">F. Emisión:</p>
            </el-col>
            <el-col :md="5">
              <el-date-picker
                class=""
                style="width: 100%"
                v-model="value1"
                type="date"
                placeholder="Pick a day"
              >
              </el-date-picker>
            </el-col>
            <el-col :md="3" class="centro " style="display: block">
              <p class="derecha izquierda-cy" style="  white-space: nowrap;">F. Vencimiento:</p>
            </el-col>
            <el-col :md="3">
              <el-date-picker
                class=""
                style="width: 100%"
                v-model="value2"
                type="date"
                placeholder="Pick a day"
              >
              </el-date-picker>
            </el-col>
            <el-col :md="2"><p class="derecha">{{" "}}</p></el-col>
            <el-col :md="4">
              <el-checkbox v-model="igvAfecto" style="width: 100%" border label="Afecto IGV" 
                ></el-checkbox
              >
            </el-col>
          </el-row>

          <el-row style="margin-top: 20px">
            <el-col :md="3">
              <p class="izquierda izquierda-cy" style="float: center">Importe:</p>
            </el-col>
            <el-col :md="5">
              <el-input style="width: 100%; float: left" v-model="importe"></el-input>
            </el-col>
            <el-col :md="3">
              <p class="derecha izquierda-cy" style="float: center">IGV:</p>
            </el-col>
            <el-col :md="3">
              <el-input style="width: 100%; float: left" :disabled="igvAfecto==false" v-model="igv"></el-input>
            </el-col>
            <el-col :md="2">
              <p class="derecha izquierda-cy" style="float: center">Subtotal:</p>
            </el-col>
            <el-col :md="4">
              <el-input style="width: 100%; float: left" :disabled="igvAfecto==false" v-model="subtotal"></el-input>
            </el-col> </el-row
          >
          <el-row style="margin-top: 20px">
            <el-col :md="3">
              <p class="izquierda izquierda-cy">Descripción:</p>
            </el-col>
            <el-col :md="17">
              <el-input
                v-model="descripcionGeneral"
                class=""
                type="textArea"
                style="width: 100%"
              autosize></el-input>
            </el-col>
          </el-row>
          <el-row style="display: flex;">
            <div class="izquierda">
                <!-- <h3 class="mb-2 derecha ml-0">Comprobante</h3> -->
                <el-upload
                  ref="uploadZip"
                  :auto-upload="false"
                  accept=".zip, .xml"
                  :limit="1"
                  class=""
                  action="https://jsonplaceholder.typicode.com/posts/"
                >
                  <el-button slot="trigger" size="small" type="primary"
                    >Adjuntar comprobante</el-button
                  >
                  <!-- <el-button @click="verFile()" size="small" type="warning"
                    >Ver</el-button
                  > -->
                </el-upload>
              </div>
          </el-row>
          <hr/>
        <div style=" width: 82%">
              <el-button type="primary" style="float: right;"
              >Guardar <i class="el-icon-upload2"></i></el-button>
        </div>
        <br />
        </div>
        <br />
        <br />
        <div v-if="'1'=='2'" id="detalle" class="detalle">
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
        <br /><br /><br />
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

          
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang="scss" >
.centro {
  float: center;
}
.derecha {
  float: left;
  display: block;
  margin-left: 15px;
  &-cy{
    margin-top: 14px;
    margin-bottom: 0px;
  }
}
.izquierda {
  float: left;
  margin-left: 40px;
  &-cy{
    margin-top: 14px;
    margin-bottom: 0px;
  }
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
