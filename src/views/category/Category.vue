<template>
    <div id="category">
<!--       头部-->
        <Header/>
<!--        内容-->
        <div class="listWrapper" v-if="!showLoading">
<!--左边-->
        <div class="leftWrapper">
            <ul class="wrapper">
                <li
                        class="categoryItem "
                        v-for="( cate,index) in categoriesData"
                        :class="{selected:currentIndex===index}"
                        @click="clickLeftLi(index)"
                        :key=" cate.id"
                        ref="menuLists"


                >
                    <span class="textWrapper">{{cate.name}}</span>
                </li>


            </ul>

        </div>
<!--            右边-->
            <ContentView :categoriesDetailData="categoriesDetailData"/>
        </div>


        <van-loading
                v-else
                type="spinner"
                color="#75a342"
                style="position: absolute;
                left: 50%;
                top: 40%;
                transform: translate(-50%); ">
            菜菜正在拼命加载中...
        </van-loading>
    </div>

</template>

<script>
    //1.引入组件
    import Header from './components/Header'
    import ContentView from './components/ContentView'

    //2.引入滚动 组件
    import BScroll from 'better-scroll'

    //3.引入接口
    import {getCategories,getCategoriesDetail} from './../../service/api/index'

    //4.引入通知插件
    import PubSub from 'pubsub-js';
    import {Toast} from "vant";

     export default {
        name: "Category",
         data(){
            return {
                //是否显示加载图标
                showLoading: false,
                //左边列表数据
                categoriesData:[],
                //右边列表数据
                categoriesDetailData:[],
                //左边选中与否
                currentIndex:0,
            }

         },
         created(){
            this.initData()
         },
         mounted(){
             //订阅消息（添加到购物车）
             PubSub.subscribe('categoryAddToCart',(msg,goods)=>{
                 if (msg==='categoryAddToCart'){
                     this.ADD_GOODS({
                         goodsId:goods.id,
                         goodsName:goods.name,
                         smallImage:goods.small_image,
                         goodsPrice:goods.price
                     });
                     //提示用户
                     Toast({
                         message:'添加到购物车成功！',
                         duration:800,
                     });
                 }
             });
         },
         components:{
           Header,
             ContentView,
         },
         methods:{
            //1.初始化操作
          async initData(){
              //1.获取左边数据
              let  leftRes = await  getCategories();

              if(leftRes.success){
                  this.categoriesData  =  leftRes.data.cate;

              }

              //获取右边数据
              let  rightRes = await getCategoriesDetail('/lk001');

              if(rightRes.success){
                  this.categoriesDetailData  =  rightRes.data.cate;
              }

              //隐藏loading框
              this.showLoading = false;

              //4.初始化滚动框架
              this.$nextTick(()=>{
                  this.leftScroll = new BScroll('.leftWrapper', {
                      probeType: 3,
                      click: true,
                      scrollY: true,
                      tap: true,
                      mouseWheel: true
                  })
              });
          },

          //2.处理左边点击
          async   clickLeftLi(index){
              //2.1改变索引
                 this.currentIndex = index;
              //2.2滚动到对应位置
                 let menuLists = this.$refs.menuLists;
                 let el = menuLists[index];
              //2.3滚动到对应的元素上
                 this.leftScroll.scrollToElement(el, 300);

              //2.4获取右边的数据
                 let rightRes = await getCategoriesDetail(`/lk00${index + 1}`);

                 if(rightRes.success){
                     this.categoriesDetailData  =  rightRes.data.cate;
                 }

             }
         }
    }
</script>

<style scoped lang="less" >
    #category {
        width: 100%;
        height: 100%;
        background-color: #F5F5F5;
        overflow: hidden;
    }

    .listWrapper {
        display: flex;
        position: absolute;
        top: 2.75rem;
        bottom: 3rem;
        width: 100%;
        overflow: hidden;
    }

    .leftWrapper {
        background-color: #F4F4F4;
        width: 5.3125rem;
        flex: 0 0 5.3125rem;

    }

    .categoryItem {
        padding: 0.75rem 0;
        border-bottom: solid 1px #E8E9E8;
        position: relative;
    }

    .categoryItem .textWrapper {
        line-height: 1.25rem;
        border-left: solid 0.1875rem transparent;
        padding: 0.3125rem 0.6875rem;
        font-size: 0.8125rem;
        color: #666666;
    }

    .categoryItem.selected {
        background: #FFF;
    }

    .categoryItem.selected .textWrapper {
        border-left-color: #3cb963;
        font-weight: bold;
        font-size: 0.875rem;
        color: #333333;
    }

    @media (min-width: 960px) {
        .wrapper {
            border-right: 1px solid #E8E9E8;
        }

        .wrapper .categoryItem {
            background: #fff;
        }
    }

</style>
