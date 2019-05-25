<template>
    <div>
        <div class="head">
            <span class="start">开始时间</span>
            <input type="text" class="date">
            <span class="end">结束时间</span>
            <input type="text" class="date">
            <button>确定</button>
        </div>
        <div id="maintable">
            <div class="header">
                <div>
                <span v-for="i in headIntro "> {{i}}</span>
                </div>
            </div>
            <div class="middle">

			</div>
            <div class="content">
                <!-- 循环包裹的大div -->
                <div class="content-index">
                    <div class="nav">
                        <img src="../assets/未勾选.png">
                        <span class="time">2019-05-01 12:20:20</span>
                        <span>订单号:</span>
                        <span class="num">123445667889900</span>
                        <span class="detail">订单详情>></span>
                    </div>
                    <table class="content-table" >
                        <tr>
                            <td>
                                <div class="img">
                                    <img src="../assets/蔬菜.png" width = "67px" height = "58px">
                                </div>
                                <p>菜名称菜名称菜名称菜名称菜名称菜</p>
                            </td>
                            <td>22</td>
                            <td>X3</td>
                            <td>66</td>
                            <td>某某人</td>
                            <td>某小区</td>
                            <td>已发货</td>
                        </tr>
                    </table>
                </div>
               <div class="content-index">
                    <div class="nav">
                        <img src="../assets/未勾选.png">
                        <span class="time">2019-05-01 12:20:20</span>
                        <span>订单号:</span>
                        <span class="num">123445667889900</span>
                        <span class="detail">订单详情>></span>
                    </div>
                    <table class="content-table" >
                        <tr>
                            <td>
                                <div class="img">
                                    <img src="../assets/蔬菜.png" width = "67px" height = "58px">
                                </div>
                                <p>菜名称菜名称菜名称菜名称菜名称菜</p>
                            </td>
                            <td>22</td>
                            <td>X3</td>
                            <td>66</td>
                            <td rowspan="2">某某人</td>
                            <td rowspan="2">某小区</td>
                            <td rowspan="3">已发货</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="img">
                                    <img src="../assets/蔬菜.png" width = "67px" height = "58px">
                                </div>
                                <p>菜名称菜名称菜名称菜名称菜名称菜</p>
                            </td>
                            <td>22</td>
                            <td>X3</td>
                            <td>66</td>
                        
                            
                        </tr>
                    </table>
                </div> 
                
            </div>
           
        </div>
        
    </div>
</template>
<script>
export default{
    data(){
        return{
            showbutton:'1',
            headIntro:['订单','单价(元)','数量','总额(元)','收货人','地址','状态'],
            check:require('../assets/未勾选.png'),
            one:require('../assets/未勾选.png'),
            two:require('../assets/勾选.png')
        }
    },
    methods:{
        sendgoods(){
            console.log(1)
        },
        checked(){
            this.check = (this.check == this.one? this.check = this.two:this.check = this.one)
        }
    },

}
</script>
<style scroped>
.head span{
    font-family: PingFangSC-Regular;
font-size: 12px;
color: #666666;
line-height: 17px;
}
.head button{
    background: #1CB906;
    border-radius: 4px;
    border-radius: 4px;
    width: 64px;
    height:32px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    border-width: 0px;
    cursor: pointer;
    margin-left: 35px;
}

#maintable{
    margin-top:20px;
    /* background-color: antiquewhite; */
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #666666;
    width: 1632px;
}
.header{
    width: 1632px;
    height: 48px;
    background: #F5FAFF;
    border-radius: 12px 12px 0 0;
}
.header div{
    padding-top:13px;
}
.header div span{
    display: inline-block;
    width: 120px;
}
.header div span:nth-child(1){
    width: 300px;
    margin-left: 295px;
}
.header div span:nth-child(2){
    margin-left: 245px;
}
.date{
    width: 128px;
    height: 32px;
    border-radius: 4px;
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    padding:0;
    margin-left: 10px;
    margin-right: 15px;

}

.middle{
    margin-top: 13px;
	margin-bottom: 40px;
}
.middle img{
    width: 14px;
    height: 14px;
    margin-right: 5px;
    margin-left: 50px;
    cursor: pointer;
}
.middle span{
    margin-right: 10px;
}
.middle button{
    border: 1px solid #979797;
    border-radius: 4px;
    border-radius: 4px;
    width:76px;
    height:28px;
    background-color: rgb(255, 255, 255);
    outline:none;
    cursor: pointer;
}
.detail{
    float: right;
    margin-right:35px;
}
.content-index{
    margin-bottom: 20px;
}
.content{
    background: #FFFFFF;
width: 1546px;
margin-left: 24px;
}
.nav{
    width: 1546px;
    height: 28px;
    background-color: #F1F1F1;
    padding:10px 0px 10px 0px;
}
.nav img{
    margin-left: 25px;
border-radius: 2px;
border-radius: 2px;
width: 14px;
height: 14px;
margin-right: 18px;
cursor: pointer;
}
.time{
    font-family: MicrosoftYaHei;
font-size: 18px;
color: #222222;
letter-spacing: 0;
margin-right: 34px;
}
.num{
font-family: MicrosoftYaHei;
font-size: 16px;
color: #222222;
letter-spacing: 0;
margin-left: 10px;
}
.content-table tr{
    height: 116px;
}
.img{
    width: 78px;
    height: 78px;
    border: 1px solid #F1F1F1;
border-radius: 4px;
margin-left: 24px;
display: inline-block;
}
.content-table p{
    display: inline-block;
    width: 221px;
    height:48px;
    font-family: MicrosoftYaHei;
font-size: 18px;
color: #222222;
letter-spacing: 0;
margin-left: 19.2px;
}
.content-table tr td:nth-child(1){
    width: 770px;
    text-align:left
}
.content-table tr td{
    width:120px;
    text-align: center;
}
.content-table tr td:nth-child(7){
    width: 130px;  
}
.fh{
    background: #1CB906;
    display:block;
border-radius: 3px;
width: 84px;
height: 32px;
margin: 0;
padding: 0;
outline: none;
cursor: pointer;
margin-top:10px;
color: white;
}
table{
    border:rgb(241, 241, 241) 1px solid;
}
td{
    border-left:rgb(241, 241, 241) 1px solid;

}
</style>
