<template>
       <div id="yper">
           <div id="yper2">
           <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>用户注册</span>
                   </div>
                   <div id="srk">
                       <el-input id="newusename" v-model="user.usename" clearable></el-input>
                       <el-input id="newpassword" v-model="user.password" show-password clearable></el-input>
                   </div>
                   <div id="tijiao">
                       <el-button id="tijiao2" @click="registerSystem">注册</el-button>
                   </div>
                  </el-card>
           </div>
       </div>
</template>

<script>
import Axios from 'axios'
export default {
    name:"register",
    data(){
    return {
        newuser:{
            newusername:"",
            newpassword:""

           }
             }
        },

methods:{
    registerSystem() {
        Axios.get('http://localhost:3000/login',{
            params:this.newUser
        }).then(function(response) {
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
#newpassword{
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