<template>
  <div class="bloglist">
    <div
      class="flex flex-col w-full text-sm font-medium text-orange-600 bg-box"
    >
      <div class="w-full" v-for="(item) in collections" :key="item.id">
        <div class="flex justify-between blog-item" @click="toggleShowState(item)">
          <a :href="item.href">{{item.name}}</a>
          <i class="align-bottom iconfont iconjiantouxiangyou"></i>
        </div>
        <main-list v-if="item.childrens" :collections="item.childrens"></main-list>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { BlogItem, BlogList } from '../views/config'

@Component()
export default class MainList extends Vue {
  @Prop()
  collections
}

</script>

<style>
.bloglist {
  width: 200px;
}
</style>
