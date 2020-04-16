<template>
  <div>
    <header-part />
    <login />
    <footer-part />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderPart from '@/components/common/Header.vue'
import Login from '@/components/Login.vue'
import FooterPart from '@/components/common/Footer.vue'
export default Vue.extend({
  components: {
    HeaderPart,
    Login,
    FooterPart
  }
})
</script>
