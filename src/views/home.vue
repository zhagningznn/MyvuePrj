<template>
  <div style="overflow-y: auto">
    <div class="header">
      <div class="headerstate">
        <header-top></header-top>
      </div>
    </div>
    <div class="main">
      <div class="maincenter">
        <div class="mainleft">
          <main-left></main-left>
        </div>
        <div class="maintop">
          <Carousel></Carousel>
        </div>
        <div class="mainbottom">
          <el-row class="mainyi">
            <el-col style="height: 100%">
              <el-card :body-style="{ padding: '0px' }" style="height: 100%">
                <div style="padding: 14px;height: 50%" >
                  <div class="bottom clearfix">
                    喜欢一个人的感觉，就像五六月的梅雨，总带着一些唯美一点毒，却又自愿深陷其中。
                    曾许黄泉碧落，死生契阔，而今人影婆娑，爱恨蹉跎。
                    那年未见尘世繁华，未负半生牵挂，而今岁月飒沓，人已天涯。<br>
                    <span><el-button type="text" class="button">...查看更多</el-button></span>
                  </div>
                </div>
                <img src="../assets/img/tu1.jpg" style="width: 100%;height: 50%">
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mainyi">
            <el-col style="height: 100%">
              <el-card :body-style="{ padding: '0px' }" style="height: 100%">
                <img src="../assets/img/tu2.jpg" style="width: 100%;height: 50%">
                <div style="padding: 14px;height: 50%" >
                  <div class="bottom clearfix">
                    前尘如故地唯美白雪，芳时明月，空悲切，终离别。
                    谁的眼如初清浅，谁的眸如初安然，谁的过往成了谁的思念。
                    你轻言无关风月的轻描淡写，一如旧欢搁浅惊艳的满地残雪。<br>
                    <span><el-button type="text" class="button">...查看更多</el-button></span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mainyi">
            <el-col style="height: 100%">
              <el-card :body-style="{ padding: '0px' }" style="height: 100%">
                <div style="padding: 14px;height: 50%" >
                  <div class="bottom clearfix">
                    曾经朝思暮念的少年，如今错落成了谁的姻缘，曾经清明通透的凡心一点，如今荒芜了谁的人烟。
                    我要像果仁一样洁净，在你的心中安睡。我要汇入你的湖泊，在水底静静地长成大树。
                    或轻、或淡、或深、或浅，在心的流离之处，存放安然。<br>
                    <span><el-button type="text" class="button">...查看更多</el-button></span>
                  </div>
                </div>
                <img src="../assets/img/tu3.jpg" style="width: 100%;height: 50%">
              </el-card>
            </el-col>
          </el-row>
          <el-row class="mainyi">
            <el-col style="height: 100%">
              <el-card :body-style="{ padding: '0px' }" style="height: 100%">
                <img src="../assets/img/tu4.jpg" style="width: 100%;height: 50%">
                <div style="padding: 14px;height: 50%" >
                  <div class="bottom clearfix">
                    伊人一笑便倾城，使吾见之醉半生，为再次观伊人笑，烽火台上戏众生。
                    年轻的我们 ，容易把感动当成爱情， 也容易把过客当成挚爱。
                    别忧郁，你的前面是阳光，你的背后还有我，如果你看不到阳光了，就回头来看我。<br>
                    <span><el-button type="text" class="button">...查看更多</el-button></span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from "@/components/HomeIndex/HeaderTop"; //标签
  import MainLeft from "@/components/HomeIndex/mainLeft"; //左边导航栏
  import Carousel from "@/components/HomeIndex/Carousel"; //轮播图
  export default {
    name: "home",
    components: {Carousel, MainLeft, HeaderTop},
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 8%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .header .headerstate {
    width: 80%;
    height: 100%;
    text-align: center;
    margin: 0 10%;
  }

  .main {
    border: 1px rgb(84, 92, 100) solid;
    top: 8%;
    position: fixed;
    width: 100%;
    height: 92%;
    left: 0;
  }

  .main .maincenter {
    width: 80%;
    height: 100%;
    margin: 0 10%;
  }

  .main .maincenter .mainleft {
    width: 19%;
    height: 100%;
    background-color: rgb(84, 92, 100);
    float: left;
  }

  .main .maincenter .maintop {
    width: 79%;
    height: 40%;
    top: 0;
    left: 20%;
    float: left;
  }

  .mainbottom {
    width: 79%;
    height: 60%;
    margin-top: 20px;
    left: 20%;
    float: left;
    display: flex;
    justify-content: center;
  }

  .mainyi {
    width: 23%;
    height: 90%;
    margin: 0 30px;
    float: left;
    /*border: 1px solid rgb(84, 92, 100);*/
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 25px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
