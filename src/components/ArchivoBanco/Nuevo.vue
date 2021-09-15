<template>
  <div>
    <div class="contenedor-header">
        <el-col :md="7">
          <label>Fecha:</label>
          <el-date-picker
            v-model="fecha"
            type="date"
            placeholder="Seleccione fecha"
          >
          </el-date-picker>
        </el-col>
        <el-col :md="4">
          <div style="margin-top: 23px; margin-left: 40px"></div>
          <el-button type="primary" style="width: 100%; margin-left: 40px"
            >Buscar</el-button
          >
        </el-col>
        <el-col :md="4" style="margin-left: 40px">
          <div style="margin-top: 23px; margin-left: 40px"></div>
          <el-button type="primary" style="width: 100%; margin-left: 40px"
            >Crear</el-button
          >
        </el-col>
    </div>

    <div class="contenedor-body">
      <table id="example2" class="table table-hover table-sm mb-2">
        <thead>
          <tr>
            <th class="text-center">Comprobante</th>
            <th class="text-center">Fecha</th>
            <th class="text-center">Responsable</th>
            <th class="text-center">Monto</th>
            <th class="text-center">Estado</th>
            <th class="text-center"></th>
            <!-- <th class="text-center" width="7%"></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of tableData" :key="'facturas ' + item.numeroFactura">
            <td>
              <template>{{ item.numeroFactura }}</template>
            </td>
            <td>
              <template>{{ item.fechaDocumento }}</template>
            </td>
            <td>
              <template>{{ item.responsable }}</template>
            </td>
            <td>
              <template>{{ item.monto }}</template>
            </td>
            <td>
              <template>{{ item.estado }}</template>
            </td>
            <td>
              <el-button type="text"><u>Quitar</u></el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          numeroFactura: "E001-21054",
          fechaDocumento: "12-09-2021",
          responsable: "Contabilidad",
          estado: "PROGRAMADO",
          monto: "1, 930.25",
        },
      ],
    };
  },
};
</script>

<style>
</style>