<template>
    <yd-layout id="app">
        <navbar slot="navbar" :title="$route.meta.title" v-show="$route.meta.navShow"></navbar>
      <transition mode="out-in" name="route-fade">
          <keep-alive>
            <router-view v-show="$route.meta.keepAlive" class="top"></router-view>
          </keep-alive>
      </transition>
      <transition>
          <router-view v-show="!$route.meta.keepAlive" class="top"></router-view>
      </transition>
        <tabbar slot="tabbar" v-show="$route.meta.tabShow"></tabbar>
    </yd-layout>
</template>

<script>
  import navbar from './components/NavBar.vue'
  import tabbar from './components/TabBar.vue'
   export default {
     name: 'App',
     components:{
        navbar,
        tabbar
     },
     watch:{
        '$route':{
          handler(){
            document.title = 'GANK'
        }
        }
     }
   }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
