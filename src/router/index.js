/**
 * 路由文件
 * 使用了组件懒加载，把组件按组分块
 */

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const index = r => require.ensure([],() => r(require('@/views/index/index')),'index');
const register = r => require.ensure([], () => r(require('@/views/register/register')), 'register');
const time = r => require.ensure([],() => r(require('@/views/time/time')),'time');
const cash = r => require.ensure([],() => r(require('@/views/cash/cash')),'cash');
const fault = r => require.ensure([],() => r(require('@/views/fault/fault')),'fault');
const machine = r => require.ensure([],() => r(require('@/views/fault/machine')),'fault');

const router =  new Router({
	mode: 'history',
  scrollBehavior: () => {
    y: 0
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
     	component: register
    },
    {
      path: '/time',
      name: 'time',
      component: time,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/cash',
      name: 'cash',
      component: cash,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/fault',
      name: 'fault',
      component: fault,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/machine',
      name: 'machine',
      component: machine,
      meta: {
        requireAuth: true
      }
    }
  ]
});

// 当进行路由跳转前，先判断本地是否保存openid
// 如果没有就跳转到注册页面
// router.beforeEach((to, from, next) => {
//   if(to.meta.requireAuth) {
//     if(localStorage.getItem('openId')) {
//       next();
//     } else {
//       next('/register');
//     }
//   } else {
//     next();
//   }
// });

export default router;
