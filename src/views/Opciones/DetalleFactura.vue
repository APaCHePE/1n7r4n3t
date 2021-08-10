<template>
  <div class="page-container">
    <!-- <div class="main-content body-full positionRight"> -->
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Detalle Factura {{detalle.serie}} - {{detalle.numero}}</titulo-header><br />
      <div class="container">
           
      <el-row :gutter="10" class="d-flex justify-content-center">
        <el-col :md="24" >
          <el-row :gutter="10">
            <el-row :gutter="10">
              <el-col :xs="24" :md="8">
                <label
                  class="col-form-label"
                >
                  Razón Social
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.proveedor_nombre_comercial"
                  disabled
                />
              </el-col>
              <el-col :xs="24" :md="8">
                <template >
                  <label class="col-form-label"> RUC </label>
                  <input
                    type="text"
                    class="form-control"
                   v-model="detalle.proveedor_numero_documento"
                    disabled
                  />
                </template>
              </el-col>
              <el-col :xs="24" :md="8">
                <label class="col-form-label">N° Orden</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.orden_numero"
                  disabled
                />
              </el-col>
              
            </el-row>

            <el-row :gutter="10">
              <el-col :xs="24" :md="8">
                  <label class="col-form-label">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="detalle.proveedor_direccion"
                    disabled
                  />
                </el-col>
                <el-col :xs="24" :md="8">
                  <label class="col-form-label">Zona</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="detalle.proveedor_zona"
                    disabled
                  />
                </el-col>
              <el-col :xs="24" :md="8">
                <label class="col-form-label"> Observaciones </label>
                <input
                  type="text"
                  class="form-control"
                  :value="detalle.observacion"
                  disabled
                />
              </el-col>
            </el-row>


            <el-row :gutter="10">
              <el-col :xs="24" :md="4">
                <label class="col-form-label">Fecha Emisión </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.fecha_emision"
                  disabled
                />
              </el-col>
              <el-col :xs="24" :md="4" >
                <label class="col-form-label"
                  >SubTotal
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.importe_sub_total"
                  disabled
                />
              </el-col>
              <el-col :xs="24" :md="4" >
                <label class="col-form-label"
                  >IGV
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.importe_igv"
                  disabled
                />
              </el-col>
              <el-col :xs="24" :md="4" >
                <label class="col-form-label"
                  >Importe total
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.importe_total"
                  disabled
                />
              </el-col>
              <el-col :xs="24" :md="4" >
                <label class="col-form-label"
                  > Moneda
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.nombre_moneda"
                  disabled
                />
              </el-col>
              <el-col :xs="24" :md="4" >
                <label class="col-form-label"
                  > Estado
                </label>
                <input
                  type="text"
                  class="form-control"
                  v-model="detalle.nombre_estado"
                  disabled
                />
              </el-col>
              
            </el-row>

            <el-row :gutter="10" v-if="accion==9">
              <el-col :xs="24" :md="12">
                  <el-button type="primary" @click="dialogEstado = true" style="width:400px;height:50px;font-size:17px;" plain>Aprobar</el-button>
                </el-col>
                <el-col :xs="24" :md="12">
                    <el-button type="danger" @click="dialogEstadoDenegado = true" style="width:400px;height:50px;font-size:17px;" plain>Rechazar</el-button>
                </el-col>
            </el-row>

          </el-row>
        <el-row :gutter="10">
            <el-col :md="24">
              <div class="py-3">
                <h4 class="card-title" style="text-align :left; color:#0078cf">Detalle</h4>
                <hr />
              </div>
              <div id="tabTrazabilidad" class="tab-pane active">
                <div class="container d-flex justify-content-center">
                    <table id="example2" class="table table-hover table-sm mb-2">
                      <thead >
                        <tr>
                          <th width="10%">CANTIDAD</th>
                          <th width="20%">UNIDAD DE MEDIDA</th>
                          <th width="40%">DESCRIPCIÓN</th>
                          <th width="15%">VALOR UNITARIO</th>
                          <th width="15%">ICBPER</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item of detalleFactura" :key="'detalleFac ' + item.id_comprobante_detalle">
                          <td width="10%">{{item.cantidad}}</td>
                          <td width="20%">{{item.unidad_medida}}</td>
                          <td width="40%">{{item.descripcion}}</td>
                          <td width="15%">{{item.valor_unitario}}</td>
                          <td width="15%">{{item.icbper}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </el-col>
          </el-row>
        <el-row :gutter="10">
            <el-col :md="24">
              <div class="py-3">
                <h4 class="card-title" style="text-align :left; color:#0078cf">Trazabilidad</h4>
                <hr />
              </div>
              <div id="tabTrazabilidad" class="tab-pane active">
                <div class="container d-flex justify-content-center">
                    <table id="example2" class="table table-hover table-sm mb-2">
                      <thead >
                        <tr>
                          <th width="10%">FECHA REGISTRO</th>
                          <th width="20%">ESTADO</th>
                          <th width="40%">OBSERVACIÓN</th>
                          <th width="20%">USUARIO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item of detalleTrazabilidad" :key="'detalletraza ' + item.id_comprobante_trazabilidad">
                          <td width="10%">{{item.fecha_registro}}</td>
                          <td width="20%">{{item.nombre_estado}}</td>
                          <td width="40%">{{item.observacion}}</td>
                          <td width="15%">{{item.usuario_registro}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </el-col>
          </el-row>
        
        </el-col>
      </el-row>
      <div>

      </div>
      </div>
      </div>
                  <el-dialog
                    title="Estado"
                    :visible.sync="dialogEstado"
                    width="30%">
                  <span>Seguro que desea comfirmar el documento?</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="danger"  @click="dialogEstado = false">No</el-button>
                    <el-button type="primary" @click="Aprobar()">Si</el-button>
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
                    <el-button type="primary" @click="Rechazar()">Guardar</el-button>
                  </span>
                </el-dialog>



      </div>

</template>
      
<script>
import TituloHeader from "@/components/Utils/TituloHeader.vue";
import axios from "axios";
export default {
  components: {
    TituloHeader,
  },
  data(){
      return{
        itemSeleccionado: null,
        dialogEstadoDenegado:false,
        dialogEstado:false,
        IngresarObservacion:false,
        observacion:null,
        accion:null,

          idComprobante :null,
          detalle:null,
          detalleFactura: null,
          detalleTrazabilidad:null
      }
  },
  created(){
      this.consultar();    
  },
  methods:{
      consultar(){
           axios
          .get(
            "http://localhost:8090/api/admin/consultar-comprobante", {
              params:{
                "idcomprobante": this.$route.params.idComprobante
              }
            }
          )
          .then((response) => {
            this.detalle = response.data.result[0]
            this.detalleFactura = response.data.result[0].listaComprobanteDetalle
            this.detalleTrazabilidad = response.data.result[0].listaComprobanteTrazabilidad
            this.accion = response.data.result[0].id_004_estado

            
          })
          .catch((e) => console.log(e));

      },
        Aprobar(){
      this.dialogEstado = false
      let detalle = this.detalle
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
          this.consultar();
          })
        .catch((e) => {
          console.log(e)
        });

    },
    Rechazar(){
      this.dialogEstadoDenegado=false
      this.IngresarObservacion=false
       let detalle = this.detalle
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
          this.consultar();
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
  }
      
}
</script>
      
<style>
      
</style>