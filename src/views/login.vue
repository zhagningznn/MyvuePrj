<template>
  <div>
    <div class="header">
        <img src='../assets/img/headerlogo.png' style="float: left;">
    </div>
    <div class="main">
      <div class="login" >
        <div style="text-align: center;color: white"><h3>用户登录</h3></div>
        <div>
          <el-form :model="form" :rules="rules" class="demo-ruleForm" ref="form" status-icon>
            <el-form-item prop="username">
              <span class="icon-login el-icon-user"></span>
              <el-input type="text" v-model="form.username" placeholder="请输入用户名" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item prop="password" >
              <span class=" icon-login el-icon-unlock"></span>
              <el-input type="password" v-model="form.password" placeholder="请输入密码" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item>
              <div style="text-align: center">
                <el-button type="danger" plain @click="loginClick()">登录</el-button>
                <el-button type="danger" plain @click="resetClick()">重置</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            form:{
              username:'',//用户名
              password:'',//密码
            },
            rules:{
              username:[{required:true,message:'用户名不能为空!'}],
              password:[{required:true,message:'密码不能为空!'}]
            }
          }
      },
      created() {
      },
      mounted() {
      },
      methods:{
        loginClick(){
          this.$refs['form'].validate((valid) => {
            if (valid){
              if (this.form.username=='张宁'&&this.form.password=='666') {
                  this.$message.success("登录成功!")
                  this.$router.push({ path: "/home" });
              }else{
                if (this.form.username!='张宁') {
                  this.$message.warning("用户名错误!")
                }else if (this.form.password!='666'){
                  this.$message.warning("密码错误!")
                }
              }
            }
          })
        },
        resetClick(){
          this.form.username=''
          this.form.password=''
        }

      }
    }
</script>

<style scoped>
.header{
  width: 100%;
  height: 13%;
  position: fixed;
  top: 0;
  left: 0;
}
  .main{
    width: 100%;
    height: 80%;
    top: 13%;
    left: 0;
    position: fixed;
    background-image: url("../assets/img/back2.jpg");
    background-size:80%;
  }
  .login{
    width: 20%;
    height: 45%;
    border: 1px solid white;
    border-radius: 25px;
    top: 20%;
    right: 13%;
    position: absolute;
    color: white;
  }
  .icon-login{
    font-size: 25px;
    vertical-align: bottom;
  }
</style>
