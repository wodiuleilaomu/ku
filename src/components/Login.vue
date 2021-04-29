<template>
       <div id="yper">
           <div id="yper2">
           <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>系统登入</span>
                       <el-button style="float: right; padding: 3px 0" type="text">忘记密码</el-button>
                   </div>
                   <div id="srk">
                       <el-input id="usename" v-model="user.usename" clearable></el-input>
                       <el-input id="password" v-model="user.password" show-password clearable></el-input>
                   </div>
                   <div id="tijiao">
                       <el-button id="tijiao2" @click="loginSystem">登入</el-button>
                   </div>
                  </el-card>
           </div>
       </div>
</template>

<script>
import Axios from 'axios'
export default {
    name:"login",
    data(){
    return {
        user:{
            username:"",
            password:""

           }
             }
        },

methods:{
    loginSystem() {
        Axios.get('http://localhost:3000/login').then(function(response) {
            alert(response);
        });
    },
  },
};

</script>

<style>
#yper{

    height: 100%;
}
#yper2{
    width: 400px;
    margin: 0 auto;
    padding-top: 150px;
}
#password{
    margin-top: 5px;
    margin-bottom: 8px;
}
#tijiao2{
      display: block;
      margin: 0 auto;
      background-color: #0a9588;
      color:white;
      border:#0a9588;
}
</style>