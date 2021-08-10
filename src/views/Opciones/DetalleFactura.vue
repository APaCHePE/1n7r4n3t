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
                        <tr v-for="item of detalleTrazabilidad" :key="'detalleFac ' + item.id_comprobante_detalle">
                          <td width="10%">{{item.fecha_registro}}</td>
                          <td width="20%">{{item.id_008_estado_trazabilidad}}</td>
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
          idComprobante :null,
          detalle:null,
          detalleFactura: null,
          detalleTrazabilidad:null
      }
  },
  created(){
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
            
          })
          .catch((e) => console.log(e));
    
  }
      
}
</script>
      
<style>
      
</style>