<template>
  <div class="flex justify-center items-center h-screen bg-orange-400 bg-img">
    <div
      class="flex flex-col bg-box p-8 w-3/5 md:w-2/5 rounded-lg shadow-xl text-orange-600 text-sm font-medium"
    >
      <a v-for="(item) in collections" :href="item.href" :key="item.id">{{item.name}}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BlogList from './config'

@Component({
  name: 'Home'
})
export default class Home extends Vue {
  private collections = BlogList
}
</script>

<style lang="scss">
.bg-img {
  background-image: url('../assets/bg01.jpg');
  background-size: cover;
  opacity: .9;
}
.bg-box {
  background: rgba(0,0,0,.9)
}
a {
  display: block;
  padding: 12px 0px 2px 0px;
  border-bottom: .5px solid #dd6b20;
  /* text-align: center; */
  &:hover {
    color: #fff;
    border-bottom: .5px solid #fff;
    font-size: 20px;
  }
}
</style>
