<template>
    <div style="margin:0 15%;margin-top: 10px">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">我的首页</el-menu-item>
        <el-menu-item index="2">我的生活</el-menu-item>
        <el-menu-item index="3">我的练习</el-menu-item>
        <el-menu-item index="4">收藏的网址</el-menu-item>
        <el-menu-item index="5">订单管理</el-menu-item>
        <el-menu-item index="6">订单管理</el-menu-item>
        <el-menu-item index="7">订单管理</el-menu-item>
        <el-menu-item index="8">消息中心</el-menu-item>
        <el-menu-item index="9">关于我们</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop",
      data(){
          return{
            activeIndex:'1'
          }
      },
      mounted() {
      },
      methods:{
        handleSelect(key,keyPath){
          console.log(key,keyPath)
        }
      }
    }
</script>

<style scoped>

</style>
