<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from '@/database/firebase-auth'
import LocalStorage from '@/database/local-storage'
export default Vue.extend({
  methods: {
    logout: function () {
      Auth.logout()
        .then(() => {
          LocalStorage.deleteItem('user')
        })
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    }
  }
})
</script>
