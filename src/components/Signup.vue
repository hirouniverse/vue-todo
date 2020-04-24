<template>
  <div>
    <input type="text" placeholder="email" v-model="Email" />
    <input type="text" placeholder="password" v-model="Password" />
    <button @click="signup">Signup</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from '@/database/firebase-auth'
export default Vue.extend({
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup: function () {
      Auth.signup(this.email, this.password)
        .then(cred => {
          if (cred) {
            this.$router.push({ name: 'Home' })
          } else {
            this.$router.push({})
          }
        })
    }
  }
})
</script>
