<template>
  <div class="bloglist">
    <div
      class="flex flex-col w-full text-sm font-medium text-orange-600 bg-box"
    >
      <div
        class="w-full"
        v-for="(item) in collections"
        :key="item.id"
        @mouseenter="onMouseEnter(item)"
        @mouseleave="onMouseLeave(item)"
        >
        <div class="flex justify-between blog-item" @click="toggleShowState(item)">
          <a :href="item.href">{{item.name}}</a>
          <i class="align-bottom iconfont iconjiantouxiangyou"></i>
        </div>
        <transition name="fade">
         <main-list v-if="shouldActiveId === item.id && hasChildrenAndShowChild" :collections="item.childrens"></main-list>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { BlogItem, BlogList } from '../views/config'

@Component
export default class MainList extends Vue {
  hasChildrenAndShowChild = false
  shouldActiveId = '001'
  @Prop(Array) collections!: undefined | Object

  private onMouseEnter (item: BlogItem) {
    this.shouldActiveId = item.id
    if (item.childrens && item.childrens.length > 0) {
      if (this.hasChildrenAndShowChild === true) {
        this.noop()
      } else {
        if (item.id === this.shouldActiveId) {
          this.hasChildrenAndShowChild = true
        }
      }
    }
  }
  private onMouseLeave () {
    this.hasChildrenAndShowChild = false
  }
  private noop () {}
}

</script>

<style>
.bloglist {
  width: 200px;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
