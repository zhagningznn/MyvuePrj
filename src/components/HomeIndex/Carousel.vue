<template>
  <el-carousel :interval="4000" arrow="always" style="width: 100%" indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item" style="width: 100%">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: "Caro" +
          "usel",
      data(){
          return{
            imgList:[
              require('@/assets/img/lun1.jpg'),
              require('@/assets/img/lun2.jpg'),
              require('@/assets/img/lun3.jpg'),
              require('@/assets/img/lun4.jpg')
            ]
          }
      },
      mounted() {
          console.log(this.imgList,'imgList')
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
