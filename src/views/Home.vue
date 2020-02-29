<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      aa: 0
    }
  },
  methods: {
    noCoverageFunction () {
      let a = 0
      a++
      this.aa = a
    }
  },
  beforeCreate () {
    let a = 10
    a++
    this.aa = a
  }
}
</script>
