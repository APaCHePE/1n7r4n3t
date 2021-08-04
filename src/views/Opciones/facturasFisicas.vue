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
                                  <td width="30%" class="bgn"><b>RUC</b></td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    20999999990
                                  </td>
                                </tr>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Tipo de comprobante</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <select
                                      style="width: 25%"
                                      id="tip_doc"
                                      class="bg"
                                      name="tip_doc"
                                    >
                                      <option value="">-- Seleccione --</option>
                                      <option value="00 - Factura">
                                        00 - Factura
                                      </option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Número de serie</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <input
                                      type="text"
                                      class="form-text"
                                      name="serie"
                                      maxlength="4"
                                      tabindex="3"
                                      onblur="completar()"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Número del comprobante</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <input
                                      type="text"
                                      class="form-text"
                                      name="correlativo"
                                      maxlength="15"
                                      tabindex="4"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Fecha de emisión</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <input
                                      type="text"
                                      name="myDateFrom"
                                      maxlength="10"
                                      class="form-text"
                                      tabindex="4"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td width="30%" class="bgn"><b>
                                    Número de autorización</b>
                                  </td>
                                  <td width="5%" class="bgn">:</td>
                                  <td width="70%" class="bgn">
                                    <input
                                      type="text"
                                      class="form-text"
                                      name="autorizacion"
                                      maxlength="15"
                                      tabindex="8"
                                    />
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

        <div class="detalle-izquierda"><br><br><br><br><br>
            <el-button @click="agregarDetalle()"> + Insertar Detalle</el-button><br><br><br><br><br>
          </div>
          <div class="total-detalle">
            
            <p><b>Sub total: </b><input></p>
            <p><b>Descuentos: </b><input></p>
            <p><b>IGV: </b><input></p>
            <p><b>Anticipios: </b><input></p>
            <p><b>Otros Tributos: </b><input></p>
            <p><b>Importe Total: </b><input></p>
          </div>

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

      <div><br><el-button type="primary" >Guardar Comprobante <i class="el-icon-upload2"></i></el-button><br><br></div>
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
.cabecera {
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 3px solid rgb(225, 225, 228);
  columns: 2;
}
.cabecera-detalle {
  border: 3px solid #b0b0b0;
}
.cuerpo {
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 3px solid rgb(225, 225, 228);
}
.detalle {
  margin-left: 30px;
  margin-right: 30px;
  columns: 2;
}
.total-detalle{
  border: 1px solid #b0b0b0;
}
</style>
