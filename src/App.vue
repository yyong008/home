<template>
  <div id="app">
    <div id="nav">
      <Home></Home>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from './views/Home.vue'

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
