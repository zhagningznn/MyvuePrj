<template>
  <el-container>
    <!-- 菜单栏 -->
    <el-aside :width="asideWidth">
      <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap" view-class="default-scrollbar__view">
        <div :class="isCollapse ? 'menu-collapsed' : 'menu-expanded'">
          <el-menu
            :default-active="defActive"
            class="el-menu-vertical-demo"
            unique-opened
            router
            :collapse="isCollapse">
            <main-left-total :menu="item" :key="item.name" v-for="item in $router.options.routes" v-if="item.menu"></main-left-total>
          </el-menu>
        </div>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <!-- 右边上面的栏目 -->
      <el-header class="clear">
        <div class="collapse-btn" @click.prevent="changeCollapse">
          <i class="fas fa-bars" :class="{ rotate90: isCollapse }"></i>
        </div>
      </el-header>
      <!-- 路由容器 -->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
  import _ from 'lodash'
  import mainLeftTotal from '@/components/HomeIndex/mainLeftTotal'
    export default {
        name: "mainLeft",
      components:{mainLeftTotal},
      data () {
        return {
          isCollapse: false,
          asideWidth: '230px',
          vmenus: [],
          defActive: this.activePath()
        }
      },
      watch: {
        $route () {
          this.defActive = this.activePath()
          this.setPageTitle()
        }
      },
      methods: {
        // 改变菜单栏的宽度
        changeCollapse () {
          this.isCollapse = !this.isCollapse
          this.$emit('collapse-change', this.isCollapse)
          if (this.isCollapse) {
            this.asideWidth = '65px'
          } else {
            this.asideWidth = '230px'
          }
        },
        // 设置页面标题
        setPageTitle () {
          let path = this.$route.path
          let pathArr = _.split(path, '/')
          let l = pathArr.length
          let menus = this.$router.options.routes
          if (_.isEmpty(menus) || l < 2) {
            return
          }
          let ts = ['vue全家福']
          let i = 1
          let children = menus
          while (i < l) {
            path = _.join(_.slice(pathArr, 0, i + 1), '/')
            let index = _.findIndex(children, menu => {
              let menuPath = menu.path
              let i = menuPath.indexOf('/:')
              if (i > 0) {
                menuPath = menuPath.substring(0, i)
              }
              return menuPath === path
            })
            if (index < 0) {
              break
            }
            if (!children[index]) {
              break
            }
            if (children[index]['text']) {
              ts.push(children[index]['text'])
            }
            if (!children[index]['children'] || _.isEmpty(children[index]['children'])) {
              break
            }
            children = children[index]['children']
            i++
          }
          this.title = _.clone(ts)
        },
        // 计算菜单当前选中的路径
        activePath () {
          let path = this.$route.path
          let pathArr = _.split(path, '/')
          let l = pathArr.length
          if (l <= 2) {
            return path
          }
          let menus = this.$router.options.routes
          if (_.isEmpty(menus)) {
            return path
          }
          let i = 1
          let children = menus
          while (i < l) {
            path = _.join(_.slice(pathArr, 0, i + 1), '/')
            let index = _.findIndex(children, {'path': path})
            if (index < 0) {
              break
            }
            if (!children[index]) {
              break
            }
            if (children[index]['hasChildren'] === false || !children[index]['children'] || _.isEmpty(children[index]['children'])) {
              break
            }
            children = children[index]['children']
            i++
          }
          return path
        }
      }
    }
</script>

<style scoped>
  .collapse-btn {
    float: left;
    font-size: 24px;
    cursor: pointer;
  }
  .rotate90 {
    filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
</style>
