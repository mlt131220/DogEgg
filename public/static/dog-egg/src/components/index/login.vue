<template>
  <div style="height: 100%" id="login">
    <div id="login_box">
      <div id="login_title">后台管理系统</div>
      <el-form :model="form" :rules="rules" ref="loginForm" size="small" status-icon>
        <el-form-item label-width="0" prop="username" >
          <el-input placeholder="username" v-model="form.username">
            <template slot="prepend"><i class="el-icon-user"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item label-width="0" prop="password" >
          <el-input placeholder="password" v-model="form.password" show-password>
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item label-width="0" >
          <el-button type="primary" @click="onSubmit('loginForm')" style="width: 100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {Message} from "element-ui";
  import router from "../../router";
  import store from "../../vuex/store";

  export default {
    name: "login",
    data() {
      return {
        form: {
          username: '',
          password:""
        },
        rules:{
          username:[
            {required:true,message:"请输入用户名",trigger:"blur"},
            {min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}
          ],
          password:[
            {required:true,message:"请输入密码",trigger:"blur"},
            {min:6,max:15,message:"长度在 6 到 15个字符",trigger:"blur"}
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let that =this;
            this.$ajax.login(this.form)
              .then(res=>{
                let data = res.data;
                if(data.state == 0 ){
                  Message({
                    showClose: true,
                    message: data.message,
                    type: 'error'
                  });
                }else{
                  Message({
                    showClose: true,
                    message: data.message,
                    type: 'success'
                  });
                  store.commit('setToken',data.token);
                  setTimeout(function () {
                    const redirect = that.$route.query.redirect;
                    redirect ? router.replace(redirect) : router.replace('/admin');
                  },1000)
                }
              })
              .catch(() => console.log('promise catch err')); //捕获异常
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  #login {
    width: 100%;
    height: 100%;
    background: url("../../assets/login_pc_bg.png") no-repeat;
    background-size: 100% 100%;
  }

  #login_box{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: hsla(0, 0%, 100%, .3);
    overflow: hidden;
  }

  #login_title{
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
  }

  .el-form {

    padding: 30px 30px;
  }
</style>
