<template>
<div>
    <div class="header">
        <p >邻里鲜生后台管理系统</p>
          <router-view ></router-view>
    </div>
    <div class="content">
    <div class="left">
        <ul  style="margin-top:21px;"> <img :src= goodsManage.img class="img"> <span>商品管理</span>

        <img src="../assets/更多.png"  @click="showScroll1 = !showScroll1" v-if="showScroll1" class="scroll"  >
        <img src="../assets/展开.png"  @click="showScroll1 = !showScroll1" v-else  class="scroll" >

       <li v-for="(i,index) in goodsManage.message"  v-show="showScroll1">
           <router-link  :to= goodsManage.router[index]> {{i}}</router-link>
       </li>

        </ul>
        <ul> <img :src= ordersManage.img class="img"><span>订单管理</span>
        <img src="../assets/更多.png" @click="showScroll2 = !showScroll2" v-if="showScroll2"  class="scroll"  >
        <img src="../assets/展开.png" @click="showScroll2 = !showScroll2" v-else  class="scroll" >
        <li v-for="(i,index) in ordersManage.message" v-show="showScroll2">
             <router-link  :to= ordersManage.router[index]> {{i}}</router-link>
        </li>
        </ul>
        <ul><img :src= memberManage.img class="img"><span>  <router-link  :to= memberManage.router>会员管理</router-link></span></ul>
        <ul> <img :src= dataManage.img class="img"><span><router-link  :to=  dataManage.router>数据统计</router-link></span></ul>   
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
    </div>
</div>
</template>
<script>
export default{
    name:'main',
    data(){
        return{
            showScroll1:true,
            showScroll2:false,
            goodsManage:{
                img:require('../assets/商品管理.png'),
                message:['在售商品管理','添加新商品','促销商品','积分商品','已下架商品'],
                router:['sellgoods','addgoods','promotegoods','accumgoods','pullgoods']
            },
            ordersManage:{
                  img:require('../assets/订单管理.png'),
                message:['所有订单','待发货','已发货','售后'],
                router:['allorders','waitorders','deliverorders','service']
            },
            memberManage:{
                img:require('../assets/会员管理.png'),
                router:'memanage'
            },
            dataManage:{
                img:require('../assets/数据统计.png'),
                router:'damanage'
            }
        }
    },
    methods:{
        changeShow(change){
            console.log(1)
            console.log(change)
        }
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.header{
    width: 1920px;
    height: 80px;
    background-color: bisque;
}
.header p {
    color: #1CB906;
    font-size: 24px;
    margin-left: 20px;
    margin-top: 23px;
    display: inline-block;
    font-family: MicrosoftYaHei;
}
.left{
float: left;
width: 232px;
height: 1001px;
background-color:#1CB906;
}
.right{
    margin-left: 28px;
    display: inline-block;
    background-color: darkgrey;
    height: 981px;
    width: 1632px;
    margin-top: 20px;
}
.content{
    width: 1920px;
    height: 1001px;
}

ul{
    width: 232px;
    background-color:  #1CB906;
    padding-bottom: 12px;
}
.img{
    width: 16px;
    height: 16px;
    margin-left: 19px;
    margin-top: 16px;
    margin-right: 10px;
}
ul span{
    /* margin-top: 5px; */
    vertical-align: bottom;
    display: inline-block;
    color: white;
    font-size: 14px;
}
.scroll{
    /* margin-right: 40px; */
    float: right;
    margin-right: 18px;
    margin-top:17px;
    cursor: pointer;
    width: 18px;
    height: 18px;
}
ul li{
    height: 48px;
    /* background-color: rgb(25, 166, 5); */
    font-size: 14px;
    margin-left: 46px;
    color:white;
    line-height: 48px;
    cursor: pointer;
}
</style>