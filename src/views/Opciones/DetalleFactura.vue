<template>
  <div class="page-container">
    <!-- <div class="main-content body-full positionRight"> -->
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 10px; margin-left: 70px"
    >
      <titulo-header
        >Detalle Factura {{ detalle.serie }} -
        {{ detalle.numero }}</titulo-header
      ><br />
      <div class="container" v-if="accion == 9">
        <div class="">
          <br />
          <div id="cabecera" class="cabecera alinieado-derecha">
            <el-row :gutter="10" v-if="accion == 9">
              <el-col :xs="24" :md="12">
                <el-button
                  type="primary"
                  @click="dialogEstado = true"
                  style="width: 200px; height: 50px; font-size: 17px"
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
            <br />
          </div>

          <div>
            <template v-if="detalleOrden != null">
              <div class="py-3">
                <h4 class="card-title" style="text-align: left; color: #0078cf">
                  Orden
                </h4>
                <hr />
              </div>
              <table
                cellpadding="0"
                cellspacing="0"
                width="80%"
                style="margin-left: 30px"
              >
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
                              <table
                                class="cabecera-factura"
                                cellpadding="3"
                                cellspacing="1"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b>Número Orden</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
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
                                      {{ detalleOrden[0].importe }}
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
              <div class="py-3">
                <h4 class="card-title" style="text-align: left; color: #0078cf">
                  Contrato
                </h4>
                <hr />
              </div>
              <table
                cellpadding="0"
                cellspacing="0"
                width="80%"
                style="margin-left: 30px"
              >
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
                                      {{ detalleContrato[0].fechaContrato }}
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
              <div class="py-3">
                <h4 class="card-title" style="text-align: left; color: #0078cf">
                  Factura
                </h4>
                <hr />
              </div>
              <table
                cellpadding="0"
                cellspacing="0"
                width="80%"
                style="margin-left: 30px"
              >
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
                                    <template
                                      v-if="detalle.ordenNumero != null"
                                    >
                                      <td width="30%" class="bgn">
                                        <b> N° Orden</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{ detalle.ordenNumero }}
                                      </td>
                                    </template>
                                    <template v-else>
                                      <td width="30%" class="bgn">
                                        <b> N° Contrato</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{ detalle.ordenContrato }}
                                      </td>
                                    </template>
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
            <div class="py-3">
              <h4 class="card-title" style="text-align: left; color: #0078cf">
                Detalle
              </h4>
              <hr />
            </div>
            <table width="100%" style="margin-top: -40px">
              <tbody>
                <tr>
                  <td>
                    <div class="detalle-izquierda">
                      <div class="div-items mx-3">
                        <table
                          id="example2"
                          class="table table-hover table-sm mb-"
                        >
                          <thead>
                            <tr>
                              <th width="10%">CANTIDAD</th>
                              <th width="20%">UNIDAD DE MEDIDA</th>
                              <th width="40%">DESCRIPCIÓN</th>
                              <th width="15%">VALOR UNITARIO</th>
                              <th width="15%">ICBPER</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="item of detalleFactura"
                              :key="'detalleFac ' + item.idComprobanteDetalle"
                            >
                              <td width="10%">{{ item.cantidad }}</td>
                              <td width="20%">{{ item.unidadMedida }}</td>
                              <td width="40%">{{ item.descripcion }}</td>
                              <td width="15%s">{{ item.valorUnitario }}</td>
                              <td width="15%">{{ item.icbper }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="total-detalle">
                      <br /><br /><br />
                      <table width="100%" style="margin: auto">
                        <tbody>
                          <tr>
                            <td class="alinieado-izquierda">
                              <div><b>Sub total Ventas </b></div>
                            </td>
                            <td><b> : </b></td>
                            <td class="alinieado-derecha">
                              <div>{{ subTotalV }}</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="alinieado-izquierda">
                              <div><b>Anticipios </b></div>
                            </td>
                            <td><b> : </b></td>
                            <td class="alinieado-derecha">
                              <div>{{ AnticipiosV }}</div>
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
                              {{ ValordeV }}
                            </td>
                          </tr>
                          <tr>
                            <td class="alinieado-izquierda"><b>IGV </b></td>
                            <td><b> : </b></td>
                            <td class="alinieado-derecha">
                              {{ IgvV }}
                            </td>
                          </tr>
                          <tr>
                            <td class="alinieado-izquierda">
                              <b>Otros Cargos </b>
                            </td>
                            <td><b> : </b></td>
                            <td class="alinieado-derecha">
                              {{ OtrosCargosV }}
                            </td>
                          </tr>
                          <tr>
                            <td class="alinieado-izquierda">
                              <b>Importe Total </b>
                            </td>
                            <td><b> : </b></td>
                            <td class="alinieado-derecha">
                              {{ ImporteTotalV }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <br /><br />
            <div>
              <el-row :gutter="10">
                <el-col :md="24">
                  <div class="py-3" style="margin-top: -40px">
                    <h4
                      class="card-title"
                      style="text-align: left; color: #0078cf"
                    >
                      Trazabilidad
                    </h4>
                    <hr />
                  </div>
                  <div id="tabTrazabilidad" class="tab-pane active">
                    <div class="container d-flex justify-content-center">
                      <table
                        id="example2"
                        class="table table-hover table-sm mb-2"
                      >
                        <thead>
                          <tr>
                            <th width="10%">FECHA REGISTRO</th>
                            <th width="20%">ESTADO</th>
                            <th width="40%">OBSERVACIÓN</th>
                            <th width="20%">USUARIO</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item of detalleTrazabilidad"
                            :key="
                              'detalletraza ' + item.idComprobanteTrazabilidad
                            "
                          >
                            <td width="10%">{{ item.fechaRegistro }}</td>
                            <td width="20%">{{ item.nombreEstado }}</td>
                            <td width="40%">{{ item.observacion }}</td>
                            <td width="15%">{{ item.usuarioRegistro }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <el-dialog title="Estado" :visible.sync="dialogEstado" width="30%">
            <span>Seguro que desea comfirmar el documento?</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="danger" @click="dialogEstado = false"
                >No</el-button
              >
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
            <el-input type="textarea" autosize v-model="observacion">
            </el-input>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="Rechazar()">Guardar</el-button>
            </span>
          </el-dialog>
          <div></div>
        </div>
      </div>
      <div v-else>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="Información del Comporbante" name="first">
            <div id="cabecera" class="cabecera alinieado-derecha">
              <el-row :gutter="10" v-if="accion == 9">
                <el-col :xs="24" :md="12">
                  <el-button
                    type="primary"
                    @click="dialogEstado = true"
                    style="width: 200px; height: 50px; font-size: 17px"
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
              <br />
            </div>

            <div>
              <template v-if="detalleOrden != null">
                <div class="py-3">
                  <h4
                    class="card-title"
                    style="text-align: left; color: #0078cf"
                  >
                    Orden
                  </h4>
                  <hr />
                </div>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="80%"
                  style="margin-left: 30px"
                >
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
                                <table
                                  class="cabecera-factura"
                                  cellpadding="3"
                                  cellspacing="1"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td width="30%" class="bgn">
                                        <b>Número Orden</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{ detalleOrden[0].nroOrden }}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="30%" class="bgn">
                                        <b>Fecha de Emisión </b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{
                                          formatoFecha(detalleOrden[0].fecha)
                                        }}
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
                                        {{ detalleOrden[0].importe }}
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
                <div class="py-3">
                  <h4
                    class="card-title"
                    style="text-align: left; color: #0078cf"
                  >
                    Contrato
                  </h4>
                  <hr />
                </div>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="80%"
                  style="margin-left: 30px"
                >
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
                                        {{ detalleContrato[0].fechaContrato }}
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
                <div class="py-3">
                  <h4
                    class="card-title"
                    style="text-align: left; color: #0078cf"
                  >
                    Factura
                  </h4>
                  <hr />
                </div>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="80%"
                  style="margin-left: 30px"
                >
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
                                      <template
                                        v-if="detalle.ordenNumero != null"
                                      >
                                        <td width="30%" class="bgn">
                                          <b> N° Orden</b>
                                        </td>
                                        <td width="5%" class="bgn">:</td>
                                        <td width="70%" class="bgn">
                                          {{ detalle.ordenNumero }}
                                        </td>
                                      </template>
                                      <template v-else>
                                        <td width="30%" class="bgn">
                                          <b> N° Contrato</b>
                                        </td>
                                        <td width="5%" class="bgn">:</td>
                                        <td width="70%" class="bgn">
                                          {{ detalle.ordenContrato }}
                                        </td>
                                      </template>
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
              <div class="py-3">
                <h4 class="card-title" style="text-align: left; color: #0078cf">
                  Detalle
                </h4>
                <hr />
              </div>
              <table width="100%" style="margin-top: -40px">
                <tbody>
                  <tr>
                    <td>
                      <div class="detalle-izquierda">
                        <div class="div-items mx-3">
                          <table
                            id="example2"
                            class="table table-hover table-sm mb-"
                          >
                            <thead>
                              <tr>
                                <th width="10%">CANTIDAD</th>
                                <th width="20%">UNIDAD DE MEDIDA</th>
                                <th width="40%">DESCRIPCIÓN</th>
                                <th width="15%">VALOR UNITARIO</th>
                                <th width="15%">ICBPER</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="item of detalleFactura"
                                :key="'detalleFac ' + item.idComprobanteDetalle"
                              >
                                <td width="10%">{{ item.cantidad }}</td>
                                <td width="20%">{{ item.unidadMedida }}</td>
                                <td width="40%">{{ item.descripcion }}</td>
                                <td width="15%s">{{ item.valorUnitario }}</td>
                                <td width="15%">{{ item.icbper }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="total-detalle">
                        <br /><br /><br />
                        <table width="100%" style="margin: auto">
                          <tbody>
                            <tr>
                              <td class="alinieado-izquierda">
                                <div><b>Sub total Ventas </b></div>
                              </td>
                              <td><b> : </b></td>
                              <td class="alinieado-derecha">
                                <div>{{ subTotalV }}</div>
                              </td>
                            </tr>
                            <tr>
                              <td class="alinieado-izquierda">
                                <div><b>Anticipios </b></div>
                              </td>
                              <td><b> : </b></td>
                              <td class="alinieado-derecha">
                                <div>{{ AnticipiosV }}</div>
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
                                {{ ValordeV }}
                              </td>
                            </tr>
                            <tr>
                              <td class="alinieado-izquierda"><b>IGV </b></td>
                              <td><b> : </b></td>
                              <td class="alinieado-derecha">
                                {{ IgvV }}
                              </td>
                            </tr>
                            <tr>
                              <td class="alinieado-izquierda">
                                <b>Otros Cargos </b>
                              </td>
                              <td><b> : </b></td>
                              <td class="alinieado-derecha">
                                {{ OtrosCargosV }}
                              </td>
                            </tr>
                            <tr>
                              <td class="alinieado-izquierda">
                                <b>Importe Total </b>
                              </td>
                              <td><b> : </b></td>
                              <td class="alinieado-derecha">
                                {{ ImporteTotalV }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <br /><br />
              <div>
                <el-row :gutter="10">
                  <el-col :md="24">
                    <div class="py-3" style="margin-top: -40px">
                      <h4
                        class="card-title"
                        style="text-align: left; color: #0078cf"
                      >
                        Trazabilidad
                      </h4>
                      <hr />
                    </div>
                    <div id="tabTrazabilidad" class="tab-pane active">
                      <div class="container d-flex justify-content-center">
                        <table
                          id="example2"
                          class="table table-hover table-sm mb-2"
                        >
                          <thead>
                            <tr>
                              <th width="10%">FECHA REGISTRO</th>
                              <th width="20%">ESTADO</th>
                              <th width="30%">OBSERVACIÓN</th>
                              <th width="20%">USUARIO</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="item of detalleTrazabilidad"
                              :key="
                                'detalletraza ' + item.idComprobanteTrazabilidad
                              "
                            >
                              <td width="10%">{{ item.fechaRegistro }}</td>
                              <td width="20%">{{ item.nombreEstado }}</td>
                              <td width="30%">{{ item.observacion }}</td>
                              <td width="15%">{{ item.usuarioRegistro }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <el-dialog title="Estado" :visible.sync="dialogEstado" width="30%">
              <span>Seguro que desea comfirmar el documento?</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="danger" @click="dialogEstado = false"
                  >No</el-button
                >
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
              <el-input type="textarea" autosize v-model="observacion">
              </el-input>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="Rechazar()"
                  >Guardar</el-button
                >
              </span>
            </el-dialog>
            <div></div>
          </el-tab-pane>
          <el-tab-pane label="Contabilización" name="second">
            <el-form ref="form" :model="form" label-width="120px">
              <br />
              <el-form-item label="Concepto : ">
                <el-input v-model="conceptoText" disabled></el-input>
              </el-form-item>

              <el-form-item class="segItem">
                <el-row :gutter="10">
                  <el-col :xs="24" :md="4">
                    <el-checkbox v-model="detraccion">Detracción :</el-checkbox>
                  </el-col>
                  <el-col :xs="24" :md="8">
                    <el-select v-model="value" placeholder="Select">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :xs="24" :md="4">
                    <el-checkbox v-model="igvAfecto">Afecto IGV</el-checkbox>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
            <div class="py-3">
              <h4 class="card-title" style="text-align: left; color: #0078cf">
                Distribución de Gasto
                <el-checkbox v-model="distriGasto" class="derecha"
                  >Única</el-checkbox
                >
              </h4>
              <hr />
            </div>
            <div>
              <table id="example2" class="table">
                <tbody>
                  <tr
                    v-for="item of numeroItems"
                    :key="'Gasto ' + item.numeros"
                  >
                    <td width="15%">CC{{ item.numeros }}</td>
                    <td width="15%">
                      <el-input
                        type="number"
                        class="input"
                        v-model="item.cc"
                      ></el-input>
                    </td>
                    <td width="15%">Importe</td>
                    <td width="15%">
                      <el-input
                        type="number"
                        class="input"
                        v-model="item.importe"
                      ></el-input>
                    </td>
                    <td width="15%">Centro de Costos</td>
                    <td width="15%">
                      <el-input
                        type="number"
                        maxlength="3"
                        class="input"
                        v-model="item.costo"
                      ></el-input>
                    </td>
                    <td width="10%"><u style="font-size: 20px">+</u></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="cabecera" class="alinieado-derecha">
              <el-row :gutter="10">
                <el-col :xs="24" :md="12">
                  <el-button
                    type="primary"
                    style="width: 200px; height: 50px; font-size: 17px"
                    plain
                    >Vista Previa</el-button
                  >
                </el-col>
                <el-col :xs="24" :md="12">
                  <el-button
                    type="primary"
                    style="width: 200px; height: 50px; font-size: 17px"
                    plain
                    >Provisionar</el-button
                  >
                </el-col>
              </el-row>
              <br />
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import TituloHeader from "@/components/Utils/TituloHeader.vue";
import axios from "axios";
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      conceptoText: null,
      detraccion: null,
      igvAfecto: null,
      distriGasto: null,

      options: [{
          value: 'Option1',
          label: 'Option1'
        }],
        value:'',

      numeroItems: [{ numeros: 1, importe: null, cc: null, costo: null }],

      activeName: "first",

      detalleOrden: null,
      detalleContrato: null,

      itemSeleccionado: null,
      dialogEstadoDenegado: false,
      dialogEstado: false,
      IngresarObservacion: false,
      observacion: null,
      accion: null,
      currentDate: null,

      idComprobante: null,
      detalle: {},
      detalleFactura: null,
      detalleTrazabilidad: null,

      subTotalV: null,
      AnticipiosV: null,
      DescuentosV: null,
      ValordeV: null,
      OtrosCargosV: null,
      ImporteTotalV: null,
      IgvV: null,
    };
  },
  created() {
    this.consultar();

    console.log("numero converido " + this.financial(30));
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    financial(numro) {
      return Number.parseFloat(numro).toFixed(2);
    },
    formatoFecha(valor) {
      return moment(valor).format("DD-MM-YYYY");
    },
    consultar() {
      axios
        .get("http://localhost:8090/api/admin/consultar-comprobante", {
          params: {
            idComprobante: this.$route.params.idComprobante,
          },
        })
        .then((response) => {
          this.detalle = response.data.result[0];
          this.conceptoText =
            this.detalle.proveedorNombreComercial + ", " + this.detalle.numero;
          this.detalleFactura = response.data.result[0].listaComprobanteDetalle;
          this.detalleTrazabilidad =
            response.data.result[0].listaComprobanteTrazabilidad;
          this.accion = response.data.result[0].id004Estado;
          this.currentDate = moment(
            response.data.result[0].fechaEmision
          ).format("DD-MM-YYYY");
          this.subTotalV = this.financial(this.detalle.importeSubTotal);
          this.AnticipiosV = this.financial(this.detalle.importeAnticipios);
          this.DescuentosV = this.financial(this.detalle.importeDescuentos);
          this.ValordeV = this.financial(this.detalle.importeValorVenta);
          this.OtrosCargosV = this.financial(this.detalle.importeOtrosCargos);
          this.ImporteTotalV = this.financial(this.detalle.importeTotal);
          this.IgvV = this.financial(this.detalle.importeIgv);
          if (this.detalle.ordenNumero != null) {
            axios
              .get("http://localhost:8090/api/admin/getOrdenes", {
                params: {
                  nroOrden: this.detalle.ordenNumero,
                },
              })
              .then((response) => {
                this.detalleOrden = response.data.result;
              })
              .catch((e) => console.log(e));
          } else {
            axios
              .get("http://localhost:8090/api/admin/getContrato", {
                params: {
                  nroContrato: this.detalle.ordenContrato,
                },
              })
              .then((response) => {
                this.detalleContrato = response.data.result;
              })
              .catch((e) => console.log(e));
          }
        })
        .catch((e) => console.log(e));
    },

    Aprobar() {
      this.dialogEstado = false;
      let detalle = this.detalle;
      axios
        .get("http://localhost:8090/api/admin/estado-factura", {
          params: {
            usuarioResponsable: "CFF",
            idComprobante: detalle.idComprobante,
            estado: 10,
            id008Trazabilidad: 28,
            observacion: "ninguna",
            usuarioModificador: localStorage.getItem("User"),
          },
        })
        .then((response) => {
          console.log(response);
          this.consultar();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    Rechazar() {
      this.dialogEstadoDenegado = false;
      this.IngresarObservacion = false;
      let detalle = this.detalle;
      axios
        .get("http://localhost:8090/api/admin/estado-factura", {
          params: {
            idComprobante: detalle.idComprobante,
            estado: 11,
            id008Trazabilidad: 29,
            observacion: this.observacion,
            usuarioModificador: localStorage.getItem("User"),
          },
        })
        .then((response) => {
          console.log(response);
          this.consultar();
          if (response.data.esCorrecto) {
            this.observacion = " ";
          } else {
            this.$swal({
              icon: "error",
              title: "Error",
              text: "Intentelo más tarde",
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  //height: 10px !important;
}
.segItem {
  text-align: left;
  margin-left: -90px;
}
.derecha {
  float: right;
  margin-right: 5%;
}
hr {
  width: 60vw !important;
  position: relative;
}
.alinieado-derecha {
  text-align: right;
  float: right;
}
.alinieado-izquierda {
  text-align: left;
}
.total-detalle {
  align-content: center;
}
</style>
