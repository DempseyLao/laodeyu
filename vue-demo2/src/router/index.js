import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/hello'
import hw from '@/components/newcomponents/helloworld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/hello',
      name: 'HelloWorld2',
      component: Hello
    }
    ,{
      path: '/hw',
      name: 'HelloWorld3',
      component: hw
    }
  ]
})
