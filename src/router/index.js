import Vue from  'vue'
import Router from 'vue-router'

//引入一级组件
import DashBoard from '../views/dashboard/DashBoard'
//(懒加载未支持)
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Cart from '../views/cart/Cart'
import Mine from '../views/mine/Mine'
//const Home = ()=> import('./../views/home/Home.vue');
//const Category = ()=> import('./../views/category/Category.vue');
//const Cart = ()=> import('./../views/cart/Cart.vue');
//const Mine = ()=> import('./../views/mine/Mine.vue');


//引入组件相关
import Order from './../views/order/Order'
import MyAddress from '../views/order/children/MyAddress'
import AddAddress from '../views/order/children/children/AddAddress'
import EditAddress from '../views/order/children/children/EditAddress'

//声明使用
Vue.use(Router);

//输出路由对象
export default new Router({
   routes:[
       {path:'/', redirect:'/dashboard'},
       {
           path:'/dashboard',
           name:'dashboard',
           component:DashBoard,
           children:[
               {path:'/', redirect: '/dashboard/home'},
               {path:'home',name:'home', component:Home},
               {path:'category', name:'category', component:Category},
               {path:'cart', name:'cart', component:Cart},
               {path:'mine', name:'mine', component:Mine},
           ]

       },
       {
           path:'/confirmOrder'  ,
           name:'order',
           component:Order,
           children: [
               {path:'myAddress',
                   name:'myAddress',
                   component:MyAddress,
                   children: [
                       //添加地址
                       {path:'addAddress', name:'addAddress', component:AddAddress},
                       //编辑地址
                       {path:'editAddress', name:'editAddress', component:EditAddress},
                   ]
               }
           ]
       },
   ]
});
