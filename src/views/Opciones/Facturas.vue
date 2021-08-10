<template>
  <div class="page-container">
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Consulta Facturas</titulo-header><br />
      <div class="container">
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
                  <el-select v-model="Estado" placeholder="TODOS">
                    <el-option
                      v-for="item in options"
                      :key="item.Estado"
                      :label="item.nombre"
                      :value="item.valor"
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

            <table id="example2" class="table table-hover table-sm mb-2">
              <thead>
                <tr>
                  <th class="text-center">N° Factura</th>
                  <th class="text-center">Proveedor</th>
                  <th class="text-center">Fecha</th>
                  <th class="text-center">Moneda</th>
                  <th class="text-center">IGV</th>
                  <th class="text-center">Importe</th>
                  <th class="text-center">RUC</th>
                  <th class="text-center">N° de Orden</th>
                  <th class="text-center">Estado</th>
                  <th class="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of tableData" :key="'facturas ' + item.id_comprobante">
                  <td>
                    <template>{{ item.numero }}</template>
                  </td>
                  <td>
                    <template>{{ item.proveedor_nombre_comercial }}</template>
                  </td>
                  <td>
                    <template>{{ item.fecha_emision }}</template>
                  </td>
                  <td>
                    <template>{{ item.nombre_moneda }}</template>
                  </td>
                  <td>
                    <template>{{ item.importe_igv }}</template>
                  </td>
                  <td>
                    <template>{{ item.importe_total }}</template>
                  </td>
                  <td>
                    <template>{{ item.proveedor_numero_documento }}</template>
                  </td>
                  <td>
                    <template>{{ item.orden_numero }}</template>
                  </td>
                  <td>
                    <template>{{ item.nombre_estado }}</template>
                  </td>
                  <td>
                   <u @click="verDetalle(item)">ver detalle</u>
                  </td> 

                    <!-- <template v-if="item.id_004_estado==9 ">  
                      <el-button @click="previo(item),dialogEstado = true" type="success" icon="el-icon-check" circle></el-button>
                      <el-button @click="previo(item),dialogEstadoDenegado = true" type="danger" icon="el-icon-close" circle></el-button>
                    </template>
                    <template v-else-if="10">APROBADO</template>
                    <template v-else-if="11">RECHAZADO</template> -->


                  <el-dialog
                    title="Estado"
                    :visible.sync="dialogEstado"
                    width="30%">
                  <span>Seguro que desea comfirmar el documento?</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="danger"  @click="dialogEstado = false">No</el-button>
                    <el-button type="primary" @click="Aprobar(itemSeleccionado)">Si</el-button>
                  </span>
                </el-dialog>
                <el-dialog
                    title="Estado"
                    :visible.sync="dialogEstadoDenegado"
                    width="30%">
                  <span>Seguro que desea rechazar el documento?</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="danger"  @click="dialogEstadoDenegado = false">No</el-button>
                    <el-button type="primary" @click="IngresarObservacion = true">Si</el-button>
                  </span>
                </el-dialog>
                <el-dialog
                    title="Observación"
                    :visible.sync="IngresarObservacion"
                    width="20%">
                  <el-input v-model="observacion" autocomplete="off"></el-input>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="Rechazar(itemSeleccionado)">Guardar</el-button>
                  </span>
                </el-dialog>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
  </div>
</template>

<script>
 import moment from "moment";
 import axios from "axios";
 import TituloHeader from "@/components/Utils/TituloHeader.vue";

export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      itemSeleccionado: null,
      dialogEstadoDenegado:false,
      dialogEstado:false,
      IngresarObservacion:false,
      observacion:null,
      numeroFac: null, //null,
      fecha: null,
      fechaInicio: null,
      fechaFin: null,
      Estado: null,
      dialogVisibleDetalle: false,
      dialogVisible: false,
      value1: null,
      value2: null,
      numeroRuc: null,
      options: [
        {
          nombre: "CONSOLIDADO",
          valor: 'C'
        },{
          nombre: "RE-PROCESADA",
          valor: 'R'
        }
      ],
      tableData: null,
    };
  },
  methods: {
    verDetalle(detalle){
    let ruta = "/DetalleFactura";
    let routeData = this.$router.resolve({path:`${ruta}/${detalle.id_comprobante}`}); 
    window.open(routeData.href,'_blank');

    },
    previo(param){
      this.itemSeleccionado = param
    },
    Aprobar(detalle){
      this.dialogEstado = false
      console.log(detalle)
         axios
        .get("http://localhost:8090/api/admin/estado-factura",{
          params:{
            idComprobante : detalle.id_comprobante,
            estado : 10,
            id008Trazabilidad:28,
            observacion : 'ninguna',
            usuarioModificador : localStorage.getItem('User'),
          }
        })
        .then((response) => {
          console.log(response);
          this.BuscarFacturas();
          })
        .catch((e) => {
          console.log(e)
        });

    },
    Rechazar(detalle){
      this.dialogEstadoDenegado=false
      this.IngresarObservacion=false
         axios
        .get("http://localhost:8090/api/admin/estado-factura",{
           params:{
            idComprobante : detalle.id_comprobante,
            estado : 11,
            id008Trazabilidad: 29,
            observacion : this.observacion,
            usuarioModificador : localStorage.getItem('User'),
          }
        })
        .then((response) => {
          console.log(response);
          this.BuscarFacturas();
          if(response.data.esCorrecto){
            this.observacion = ' '
          }
          else {
            this.$swal({
            icon: 'error',
            title: 'Error',
            text: "Intentelo más tarde"
          });
          }
          
          })
        .catch((e) => {
          console.log(e)
        });
    },
    BuscarFacturas() {
      let fechaInicio =
        this.fecha == null ? null : moment(this.fecha[0]).format("YYYY-MM-DD");
      let fechaFin =
        this.fecha == null ? null : moment(this.fecha[1]).format("YYYY-MM-DD");
      console.log(fechaInicio);
      console.log(fechaFin);
       axios
          .get(
            "http://localhost:8090/api/admin/consultar-comprobante", {
              params:{
                "numeroFac": this.numeroFac,
                "fecInicio": fechaInicio,
               "nroDocumento": this.numeroRuc,
                "fecFin": fechaFin,
                // "estado": 9
              }
            }
          )
          .then((response) => {
            this.tableData = response.data.result
            console.log(this.tableData);
          //  alert( response.data.result[0].numeroFactura);
          })
          .catch((e) => console.log(e));
    },

    mostrarDetalleFacturadialog(valores) {
      this.dialogVisibleDetalle = true;
      this.detalleOrden = valores.facturasDestalle;
    },
  },
};
</script>

<style>
.menu {
  margin-right: 105px;
  font-size: 18px;
  margin-left: 105px;
}
.añadir {
  color: #51c1ff;
  text-align: right;
  margin-right: 60px;
}
</style>
