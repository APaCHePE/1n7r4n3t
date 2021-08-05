<template>
  <div class="main-content body-full positionRight">
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Registro de Facturas Físicas</titulo-header><br />
      <div class="body-registro"><br>
        <div id="cabecera" class="cabecera">
          <div style=" text-align:left;">
            <p><b>Razon Social: </b><input></p>
            <p><b>Dirección: </b><input></p>
          </div>
          <br/>
          <div class="cabecera-detalle">
            <p><b>REGISTRO FACTURA</b></p>
            <p><b>Ruc: </b><input></p>
          </div>
          <br>
        </div>

        <br />
        <div id="cuerpo" class="cuerpo">
          <form method="post" name="selectForm">
            <table cellpadding="0" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <td class="beta">
                    <table cellpadding="2" cellspacing="1" width="100%">
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            class="bg"
                            valign="top"
                            width="100%"
                          >
                            <table cellpadding="3" cellspacing="1" width="100%">
                              <tbody>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Tipo de comprobante</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                   <el-select v-model="value" placeholder="Select">
                                      <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                      </el-option>
                                    </el-select>
                                  </td>
                                </tr><br>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Número de serie</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <el-input style="width:30%"></el-input>
                                  </td>
                                </tr><br>
                                <tr>
                                  <td width="30%" class="bgn"><b>RUC</b></td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <el-input style="width:30%"></el-input>
                                  </td>
                                </tr><br>
                                
                                
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Número del comprobante</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                   <el-input style="width:30%"></el-input>
                                  </td>
                                </tr><br>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Fecha de emisión</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <el-date-picker
                                    style="width:30%"
                                      v-model="value1"
                                      type="date"
                                      placeholder="Pick a day">
                                    </el-date-picker>
                                  </td>
                                </tr>
                               
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        <br></div>
        <br />
        <div id="detalle" class="detalle">

        <div >
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
          </div><br>

        </div>

          <el-dialog
                width="30%"
                title="Detalle de la Factura"
                :visible.sync="innerVisible"
                append-to-body
              >
              <div><p>Cantidad: <el-input v-model="Cantidad"></el-input></p></div>
                <div>Descripción:
                   <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="Ingrese el descripción"
                  v-model="observacion"
                >
                </el-input>
                </div><br>
               
              <div><p>Valor Unitario:<el-input v-model="valorUnitario"></el-input></p></div>
              <div><p>Importe:<el-input v-model="valorUnitario"></el-input></p></div>
               
              
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

      <div style="margin-right: 7%;"><br><el-button type="primary" >Guardar Comprobante <i class="el-icon-upload2"></i></el-button><br><br></div>
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

        //select
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: '',

        //variables
      value1:null,
      innerVisible:false,
      Cantidad:null,
      observacion:null,
      valorUnitario:null,

    }
  },
  methods:{
    agregarDetalle(){
      this.innerVisible= true
    }
  }
};
</script>

<style>
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
