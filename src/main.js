import Vue from 'vue'
import VueRouter from 'vue-router'
import Show from './Show.vue'
import Create from './Create.vue'
import {init} from './storage.js'

init()
Vue.use(VueRouter)
 

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'show',component: Show },
    { path: '/create', name:'create', component: Create}
  ]
})


new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')