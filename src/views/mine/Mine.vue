<template>
    <div id="mine">
        <van-nav-bar
                title="我的"
                :fixed=true
                :border=false

        />

        <van-cell-group  style="margin-top: 2.5rem">
            <van-cell  style="background-color:#3bba63;color: #fff" :center=true>
                <!-- 使用 title 插槽来自定义标题 -->
                <template slot="title">
                    <div class="personMsg">
                        <img src="./images/cat.jpg" alt="">
                        <div class="personInfo">
                            <span>菜菜</span>
                            <span>微信号:123456</span>
                        </div>
                    </div>

                </template>
            </van-cell>
        </van-cell-group>


        <van-cell-group >
         <van-cell  icon="label" title="我的订单" value="查看全部订单" is-link></van-cell>
            <van-grid>
                <van-grid-item icon="cart-circle-o" text="待支付" />
                <van-grid-item icon="gift-o" text="待收货" />
                <van-grid-item icon="gem-o" text="待评价" />
                <van-grid-item icon="cash-back-record" text="售后/退款" />
            </van-grid>
        </van-cell-group>

        <van-cell-group style="margin-top:0.625rem">
            <van-cell  icon="gold-coin" title="我的优惠券" value="1张" is-link></van-cell>
            <van-cell  icon="todo-list" title="我的收货地址" value="1张" is-link></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top:0.625rem">
            <van-cell  icon="phone" title="联系客服" value="客服时间07:00-22:00" is-link></van-cell>
            <van-cell  icon="comment" title="意见反馈" is-link></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top:0.625rem">
            <van-cell  icon="point-gift" title="菜菜" value="下载APP体验更加" is-link></van-cell>

        </van-cell-group>

    </div>
</template>

<script>
    export default {
        name: "Mine",

    }
</script>

<style scoped lang="less" >
    #mine{
        width: 100%;
        height: 100%;
        background-color:#f5f5f5;
    }
    .van-nav-bar{
        background-color: #3bba63;
    }
    .van-nav-bar__title{
        color: #fff;
        font-size: 1rem;
    }
    .personMsg{
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    .personMsg img{
        width: 4rem;
        height: 4rem;
        border-radius: 2rem;
        //border: 0.2rem solid #fff;
    }
    .personInfo{
        display: flex;
        flex-direction: column;
        margin-left: 0.8rem;
    }

</style>
