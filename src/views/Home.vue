<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <logout-button />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LogoutButton from '@/components/common/LogoutButton'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LogoutButton
  }
}
</script>
