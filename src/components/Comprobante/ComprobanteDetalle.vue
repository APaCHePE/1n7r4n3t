<template>
  <div class="container" v-if="accion == 9">
    <div class="">
      <div>
        <template v-if="detalleOrden != null">
          <div class="pb-1">
            <div>
              <h4
                class="card-title pl-3 mb-0"
                style="text-align: left; color: #0078cf"
              >
                Orden
              </h4>
            </div>
          </div>
          <hr />
          <table
            cellpadding="0"
            cellspacing="0"
            width="60%"
            style="margin-left: 30px"
          >
            <tbody>
              <tr>
                <td class="beta">
                  <table cellpadding="2" cellspacing="1" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" class="bg" valign="top" width="100%">
                          <table
                            class="cabecera-factura"
                            cellpadding="3"
                            cellspacing="1"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td width="20%" class="bgn">
                                  <b>Número Orden</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="75%" class="bgn">
                                  {{ detalleOrden[0].nroOrden }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Fecha de Emisión </b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ formatoFecha(detalleOrden[0].fecha) }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Moneda</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalleOrden[0].nombreMoneda }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Forma de Pago </b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalleOrden[0].formaPago }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Importe</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalleOrden[0].importe | currency("") }}
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
        </template>
        <template v-else>
          <div class="py-1">
            <h4
              class="card-title pl-3 mb-0"
              style="text-align: left; color: #0078cf"
            >
              Contrato
            </h4>
            <hr />
          </div>
          <table
            cellpadding="0"
            cellspacing="0"
            width="60%"
            style="margin-left: 30px"
          >
            <tbody>
              <tr>
                <td class="beta">
                  <table cellpadding="2" cellspacing="1" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" class="bg" valign="top" width="100%">
                          <table
                            class="cabecera-factura"
                            cellpadding="3"
                            cellspacing="1"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Número Contrato</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalleContrato[0].idContrato }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Descripción</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalleContrato[0].descripcion }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Fecha de Contrato</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ formatoFecha(detalleContrato[0].fecha) }}
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
        </template>
      </div>

      <div id="cuerpo">
        <form method="post" name="selectForm">
          <div class="py-1">
            <h4
              class="card-title pl-3 mb-0"
              style="text-align: left; color: #0078cf"
            >
              Detalle
            </h4>
            <hr />
          </div>
          <table
            cellpadding="0"
            cellspacing="0"
            width="60%"
            style="margin-left: 30px"
          >
            <tbody>
              <tr>
                <td class="beta">
                  <table cellpadding="2" cellspacing="1" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" class="bg" valign="top" width="100%">
                          <table
                            class="cabecera-factura"
                            cellpadding="3"
                            cellspacing="1"
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Razón Social</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalle.proveedorNombreComercial }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>RUC</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalle.proveedorNumeroDocumento }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b> Dirección</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalle.proveedorDireccion }} -
                                  {{ detalle.proveedorZona }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Tipo de Moneda</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalle.nombreMoneda }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Obseraciones</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ detalle.observacion }}
                                </td>
                              </tr>
                              <tr>
                                <td width="30%" class="bgn">
                                  <b>Fecha de Emisión</b>
                                </td>
                                <td width="5%" class="bgn">:</td>
                                <td width="70%" class="bgn">
                                  {{ currentDate }}
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
      </div>

      <div id="detalle" class="detalle">
        <table width="80%" style="margin-top: 40px">
          <tbody>
            <tr>
              <td>
                <div class="detalle-izquierda">
                  <div class="div-items">
                    <table id="example2" class="table table-hover table-sm mb-">
                      <thead>
                        <tr>
                          <th width="10%">CANTIDAD</th>
                          <th width="20%">UNIDAD DE MEDIDA</th>
                          <th width="40%">DESCRIPCIÓN</th>
                          <th width="15%" style="text-align: right">
                            VALOR UNITARIO
                          </th>
                          <!-- <th width="15%">ICBPER</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item of detalleFactura"
                          :key="'detalleFac ' + item.idComprobanteDetalle"
                        >
                          <td width="10%">
                            <div>{{ item.cantidad }}</div>
                          </td>
                          <td width="20%" style="text-align: left">
                            <div>{{ item.unidadMedida }}</div>
                          </td>
                          <td width="40%" style="text-align: left">
                            <div>{{ item.descripcion }}</div>
                          </td>
                          <td width="15%s" style="text-align: right">
                            <div>{{ item.valorUnitario | currency("") }}</div>
                          </td>
                          <!-- <td width="15%">{{ item.icbper }}</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table width="80%">
          <tbody>
            <tr>
              <td style="width: 580px">
                <br />
              </td>
              <td>
                <div class="total-detalle">
                  <table width="100%" style="margin: auto">
                    <tbody style="margin-left: 30px">
                      <tr>
                        <td class="alinieado-izquierda">
                          <div><b>Sub total Ventas </b></div>
                        </td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          <div>{{ subTotalV | currency("") }}</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="alinieado-izquierda">
                          <div><b>Anticipios </b></div>
                        </td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          <div>{{ AnticipiosV | currency("") }}</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="alinieado-izquierda">
                          <div><b>Descuentos </b></div>
                        </td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          <div>{{ DescuentosV }}</div>
                        </td>
                      </tr>
                      <tr>
                        <td class="alinieado-izquierda">
                          <b>Valor de Ventas </b>
                        </td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          {{ ValordeV | currency("") }}
                        </td>
                      </tr>
                      <tr>
                        <td class="alinieado-izquierda"><b>IGV </b></td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          {{ IgvV | currency("") }}
                        </td>
                      </tr>
                      <tr>
                        <td class="alinieado-izquierda">
                          <b>Otros Cargos </b>
                        </td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          {{ OtrosCargosV | currency("") }}
                        </td>
                      </tr>
                      <tr>
                        <td class="alinieado-izquierda">
                          <b>Importe Total </b>
                        </td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          {{ ImporteTotalV | currency("") }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :md="24">
            <div
              class="py-1 d-flex justify-content-between"
              style="margin-top: 0px; display: flex; width: 80%"
            >
              <h4
                class="card-title pl-3 mb-0"
                style="text-align: left; color: #0078cf"
              >
                Trazabilidad
              </h4>
              <div>
                <el-row
                  v-if="accion == 9"
                  style="
                    margin-top: 0px !important;
                    margin-bottom: 0px !important;
                  "
                >
                  <el-col :xs="24" :md="12">
                    <el-button
                      type="primary"
                      @click="dialogEstado = true"
                      style="
                        width: 200px;
                        height: 50px;
                        font-size: 17px;
                        margin-right: 5px;
                      "
                      plain
                      >Aprobar</el-button
                    >
                  </el-col>
                  <el-col :xs="24" :md="12">
                    <el-button
                      type="danger"
                      @click="dialogEstadoDenegado = true"
                      style="width: 200px; height: 50px; font-size: 17px"
                      plain
                      >Rechazar</el-button
                    >
                  </el-col>
                </el-row>
              </div>
            </div>
            <hr
              style="margin-top: 0px !important; margin-bottom: 10px !important"
            />
            <div id="tabTrazabilidad" class="tab-pane active">
              <div
                class="container"
                style="width: 80%; text-align: left; margin-left: 20px"
              >
                <table width="80%" id="example2" class="table table-hover">
                  <thead>
                    <tr>
                      <th width="10%">FECHA</th>
                      <th width="20%">USUARIO</th>
                      <th width="20%">ACCIÓN</th>
                      <th width="40%">OBSERVACIÓN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item of detalleTrazabilidad"
                      :key="'detalletraza ' + item.idComprobanteTrazabilidad"
                    >
                      <td width="10%">
                        {{ formatoFecha(item.fechaRegistro) }}
                      </td>
                      <td width="15%">{{ item.usuarioRegistro }}</td>
                      <td width="20%">{{ item.nombreEstado }}</td>
                      <td width="40%">{{ item.observacion }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-dialog title="Estado" :visible.sync="dialogEstado" width="30%">
        <span>Seguro que desea comfirmar el documento?</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogEstado = false">No</el-button>
          <el-button type="primary" @click="Aprobar()">Si</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="Estado"
        :visible.sync="dialogEstadoDenegado"
        width="30%"
      >
        <span>Seguro que desea rechazar el documento?</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogEstadoDenegado = false"
            >No</el-button
          >
          <el-button type="primary" @click="IngresarObservacion = true"
            >Si</el-button
          >
        </span>
      </el-dialog>
      <el-dialog
        title="Observación"
        :visible.sync="IngresarObservacion"
        width="20%"
      >
        <el-input type="textarea" autosize v-model="observacion"> </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Rechazar()">Guardar</el-button>
        </span>
      </el-dialog>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
    props:["co"]
};
</script>

<style>
</style>