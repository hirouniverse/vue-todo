<template>
  <div>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Password" v-model="password" />
    <button @click="login">login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from '@/database/firebase-auth'
import LocalStorage from '@/database/local-storage'

export default Vue.extend({
  data () {
    return {
      email: '',
      password: '',
      loggedIn: false
    }
  },
  methods: {
    login: function () {
      Auth.login(this.email, this.password).then(credential => {
        if (credential) {
          LocalStorage.setItem('user', credential.user)
          console.log('login success!!')
          this.loggedIn = true
          if (this.$route.query.redirect && typeof this.$route.query.resirect !== 'object') {
            let path = '/'
            if (typeof this.$route.query.redirect === 'string') {
              path = this.$route.query.redirect
            }
            this.$router.push({ path })
          } else {
            this.$router.push({ name: 'Home' })
          }
        } else {
          console.log('login fail!!')
        }
      })
    }
  }
})
</script>
