<template>
  <div class="flex justify-end h-screen bg-orange-400 bg-img">
    <!-- 名言 -->
    <div class="flex justify-center items-center w-1=4/5 md:w-4/5">
      <div class="">
        <img class="img" src="../assets/images/jiushu.jpeg" alt="">
      </div>
      <pre class="shadow-outline desc">
>> 希望是美好的，也许是人间至善，而美好的事物永不消逝。

                                      - 肖生克的救赎</pre>
    </div>
    <!-- 目录 -->
    <div class="text-3xl font-bold">Yongの杂货铺</div>

    <main-list :collections="collections"></main-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BlogList from './config'
import MainList from '../components/MainList.vue'
@Component({
  name: 'Home',
  components: {
    MainList
  }
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
.img {
  width: 200px;
  /* height: 200px; */
  border: 2px slateblue solid;
  border-radius: 4px;
}
.desc {
  padding: 20px 10px;
  margin-left: 10px;
  color: #ff6701;
  background: rgba(0,0,0,.2);
  border-radius: 4px;
  text-shadow:0 0 30px #ff6701;
}
.bg-box {
  background: rgba(0,0,0,.1)
}
.blog-item {
  display: block;
  padding: 12px 0px 2px 0px;
  border-bottom: .5px solid #dd6b20;
  &:hover {
    color: #ff6701;
    border-bottom: .5px solid #ff6701;
    font-size: 20px;
  }
  .size {
    font-size: 16px;
  }
}
</style>
