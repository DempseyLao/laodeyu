import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/hello'
import hw from '@/components/newcomponents/helloworld'
import wechat from '@/components/wechat/wechat'
import mail from '@/components/wechat/mail_list'
import find from '@/components/wechat/find'
import my from '@/components/wechat/my'
import search from '@/components/wechat/search'
import chat from '@/components/wechat/chat'
import  VueResource  from 'vue-resource'
Vue.use(VueResource) 
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
    ,{
      path: '/wechat',
      name: 'wechat',
      component: wechat
    }
    ,{
      path: '/mail',
      name: 'mail',
      component: mail
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
    ,
    {
      path: '/search',
      name: 'search',
      component: search
    }
    ,
    {
      path: '/chat/:name',
      name: 'chat',
      component: chat
    }
  ]
})
