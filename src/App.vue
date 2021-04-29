<!--模版部分-->
<template>
  <div id="app">
    <!-- 3 使用子组件 -->
       <el-container>
              <el-header id="headerBook">
                  <Header/>
              </el-header>
              <el-main id="mainBook">
            <!-- <Login/>-->
            <router-view></router-view>
              </el-main>
              <el-footer id="footerBook">
                <Footer/>
              </el-footer>
          </el-container>
  </div>
</template>
<!--脚本部分-->
<script>
//1导入header 子组件
import Header from "./components/Header.vue"
import Login from "./components/Login.vue"
import Footer from "./components/Footer.vue"


export default {
  name: 'App',
  components: {
    //2注册子组件
    Header,
    Login,
    Footer
  
  
  }
}
</script>
<!--样式部分-->
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#headerBook{
  background-color: #244152;
}
#mainBook{
 
  height: 500px;
}
#footerBook{
 
  height: 150px !important;
}

</style>
