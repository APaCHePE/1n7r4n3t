<template>
  <div class="page-container">
    <!-- <div class="main-content body-full positionRight"> -->
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Consulta Facturas</titulo-header><br />
      <div class="container">
        <!-- <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label" class="menu"
              ><i class="el-icon-search"></i> Busqueda</span
            > -->
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
                    <template v-if="item.id_004_estado==9 ">  
                      <el-button @click="previo(item),dialogEstado = true" type="success" icon="el-icon-check" circle></el-button>
                      <el-button @click="previo(item),dialogEstadoDenegado = true" type="danger" icon="el-icon-close" circle></el-button>
                    </template>
                    <template v-else-if="10">APROBADO</template>
                    <template v-else-if="11">RECHAZADO</template>
                  </td> 
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
                  <!-- <td>
                    <template
                      ><el-button
                        type="text"
                        @click="mostrarDetalleFacturadialog(item)"
                        >VER</el-button
                      ></template
                    >
                  </td> -->
                </tr>
              </tbody>
            </table>
         

            <!-- <el-dialog
              title="Detalle"
              :visible.sync="dialogVisibleDetalle"
              width="50%"
              :before-close="handleClose"
            >
              <el-form>
                <el-form-item label="Importe">
                  <table id="example2" class="table table-hover table-sm mb-2">
                    <thead>
                      <tr>
                        <th class="text-center">Código Producto</th>
                        <th class="text-center">Producto</th>
                        <th class="text-center">Unida</th>
                        <th class="text-center">Item</th>
                        <th class="text-center">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item2, index2) of detalleOrden"
                        :key="'Ordenes ' + index2"
                      >
                        <td>
                          <template>{{ item2.codigo_producto }}</template>
                        </td>
                        <td>
                          <template>{{ item2.producto }}</template>
                        </td>
                        <td>
                          <template>{{ item2.unidad }}</template>
                        </td>
                        <td>
                          <template>{{ item2.tipo_item }}</template>
                        </td>
                        <td>
                          <template>{{ item2.precio }}</template>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cerrar</el-button>
              </span>
            </el-dialog> -->
          <!-- </el-tab-pane> -->
          <!-- <el-tab-pane>
            <span slot="label" class="menu"
              ><i class="el-icon-folder-opened"></i> Añadir</span
            >
            <br />
            <div class="row">
              <div class="col-md-4" style="float: left">
                Fecha de Vencimiento
              </div>
              <div class="col-md-4" style="float: left">Fecha de Emisión</div>
              <div class="col-md-4" style="float: left">Tipo Moneda</div>
            </div>
            <div class="row">
              <div class="col-md-4" style="float: left">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="Pick a day"
                >
                </el-date-picker>
              </div>
              <div class="col-md-4" style="float: left">
                <el-date-picker
                  v-model="value2"
                  type="date"
                  placeholder="Pick a day"
                >
                </el-date-picker>
              </div>
              <div class="col-md-4" style="float: left">
                <el-select v-model="Estado" placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.Estado"
                    :label="item.Estado"
                    :value="item.Estado"
                  >
                  </el-option>
                </el-select>
              </div>
            </div><br>

            <el-button
            type="fileS"
                style="background-color: #51c1ff; width: 900px; color: #ffffff"
                icon="el-icon-search"
                >Agregar ZIP</el-button
              >
            <br /><br />

            <div v-if="dialogVisible">
              <div class="row">
                <div class="col-md-4" style="float: left">Código</div>
                <div class="col-md-4" style="float: left">Descripcion</div>
                <div class="col-md-4" style="float: left">Valor Unitario</div>
              </div>
              <div class="row">
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-md-4" style="float: left">IGV</div>
                <div class="col-md-4" style="float: left">Valor Venta</div>
              </div>
              <div class="row">
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-button>+ agregar</el-button>
                </div>
              </div>
              <br /><br />

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span><h2>ITEMS</h2></span>
                  <el-table :data="tableData2" style="width: 100%">
                    <el-table-column prop="date" label="ITEM" width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="UNIDAD MEDIDA"
                      width="180"
                    >
                    </el-table-column>
                    <el-table-column prop="address" label="CANTIDAD">
                    </el-table-column>
                    <el-table-column prop="address" label="CODIGO">
                    </el-table-column>
                    <el-table-column prop="address" label="DESCRIPCIÓN">
                    </el-table-column>
                    <el-table-column prop="address" label="VALOR UNITARIO">
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
          </el-tab-pane> -->
        <!-- </el-tabs> -->
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
