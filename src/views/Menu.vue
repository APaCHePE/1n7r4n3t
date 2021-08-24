<template>
  <div class="dashboard">
    <Sidebar />
    <div class="component">
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {
    // changeLang(){
    //     this.i18n = this.$i18n;
    //     this.i18n.locale = 'ar';
    //     this.$rtl.enableRTL();
    // }
  },
};
</script>

<style>
 
 
</style>