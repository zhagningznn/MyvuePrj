<template>
  <component v-bind:is="currentItemComponent" :index="menu.path" :key="menu.path">
    <i :class="menu.icon" v-if="menu.icon && !hc"></i><span v-if="!hc" slot="title">{{menu.text}}</span>
    <template slot="title" v-if="hc">
      <i :class="menu.icon" v-if="menu.icon"></i><span slot="title">{{menu.text}}</span>
    </template>
    <!-- 这里用了递归生成菜单项 -->
    <main-left-total :menu="child" :key="child.name" v-for="child in menu.children" v-if="hc && child.menu"></main-left-total>
  </component>
</template>

<script>
  export default {
    name: 'mainLeftTotal',
    props: {
      menu: Object
    },
    data () {
      return {
        hc: false
      }
    },
    computed: {
      currentItemComponent: function () {
        return this.hasChildren() ? 'el-submenu' : 'el-menu-item'
      }
    },
    methods: {
      hasChildren () {
        this.hc = this.menu.hasChildren !== false && this.menu.children && this.menu.children.length > 0
        return this.hc
      }
    }
  }
</script>
