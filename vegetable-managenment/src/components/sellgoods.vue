<template>

	<div>
		<div class="head">
			<span>分类：</span>
			<select name="classify">
				<option v-for="(classi,index) in classify" :value=index>{{classi}}</option>
			</select>
			<span>供应商：</span>
			<select name="supplier">
				<option v-for="(supp,index) in supplier" :value=index>{{supp}}</option>
			</select>
			<button>筛选</button>
		</div>

		<table>
			<tr style="height: 48px;">
				<td style="padding-left:24.48px;">商品(123)</td>
				<td>价格(元)</td>
				<td>分类</td>
				<td>库存</td>
				<td>总销量</td>
				<td>供应商</td>
				<td>操作</td>
			</tr>
			<div class="middle">
				<img src="../assets/未勾选.png" @click="allshop_push()" class="select_all">
				<span>全选</span>
				<button @click="down_data()">批量下架</button>
				<button @click="delete_data()">批量删除</button>
			</div>
			<template v-for="(item,index) in list">
				<tr>
					<td class="goodsname">

						<img :src=img.one @click='shop_push(item.goodsId)' class="select_all">
						<div class="vege-img"><img :src=cut_img(item.goodsImg) /></div>
						<p>{{item.goodsName}}</p>

					</td>

					<td>
						<p class="origin-cost">{{item.goodsPrice}}</p>
						<p>会员价：￥{{(item.goodsPrice*0.9).toFixed(2)}}</p>
					</td>
					<td v-if="item.goodsState==1"><span>蔬菜</span></td>
					<td v-if="item.goodsState==2"><span>水果</span></td>
					<td><span>{{item.goodsNum}}</span></td>
					<td><span>{{item.goodsVolume}}</span></td>
					<td><span>某某供应商</span></td>
					<td class="model"><span @click="editgoods({num:1,id:item.goodsId})">编辑</span@click="upgoods( {id:item.goodsId})"><span>下架</span><span
							 @click="deletegoods({id:item.goodsId})">删除</span></td>
				</tr>
			</template>

			<!-- <tr>
				<td class="
							 goodsname">

							<img src="../assets/未勾选.png">
							<div class="vege-img"><img src="../assets/蔬菜.png" /></div>
							<p>商品名称商品名称商品名称商品名称商品名称商品名称</p>

					</td>

					<td>
						<p class="origin-cost">9.88</p>
						<p>会员价：￥7.88</p>
					</td>
					<td><span>蔬菜</span></td>
					<td><span>3244</span></td>
					<td><span>244</span></td>
					<td><span>某某供应商</span></td>
					<td class="model"><span @click="edit(1)">编辑</span><span>下架</span><span>删除</span></td>
				</tr> -->
		</table>

		<change :pagesd="page" v-on:listen_page="render_page"></change>
	</div>


</template>

<script>
	import change from './change_pages'
	import {
		Ajax
	} from '../js/ajax.js'

	export default {
		name: "sellgoods",
		components: {
			change
		},
		data() {
			return {
				classify: ['蔬菜', '水果', '海鲜', '肉蛋'],
				supplier: ['某某供应商', '某某供应商', '某某供应商', '某某供应商'],
				obj: undefined, //请求过来对应页数的信息
				list: undefined,
				page: 3, // 点击第几页
				shop_choosed: {}, //勾选商品，以对象的方式存在{3：3}
				img: {
					one: require("../assets/未勾选.png"),
					two: require("../assets/勾选.png")
				},
				batchdata: [], //下架商品的数组集合
				page_data: 1 //翻页组件请求过来的页数
			}
		},
		methods: {
			editgoods(obj) {
				this.$router.push({
					path: "addgoods",
					query: {
						num: obj.num,
						id: obj.id
					}
				})
			},
			upgoods(obj) {
				this.$router.push({
					path: "addgoods",
					query: {
						num: obj.num
					}
				})
			},
			deletegoods(obj) {
				this.$router.push({
					path: "addgoods",
					query: {
						num: obj.num
					}
				})
			},
			shop_push(num) {
				if (this.shop_choosed[num] == num) {
					delete this.shop_choosed[num]
					event.path[0].src = this.img.one
				} else {
					this.shop_choosed[num] = num;
					event.path[0].src = this.img.two
				}
				console.log(this.shop_choosed);
			},
			cut_img(str) { //请求图片的处理
				if (str == null) {
					return (str = require("../assets/蔬菜.png"))
				}
				if (str.search(",") != -1) {
					return (str.split(",")[0]);
				} else {
					return (str)
				}
			},
			allshop_push() { //全选按钮
				var selects = document.getElementsByClassName("select_all") //获取的是对象
				let arr = Array.prototype.slice.call(selects) //将对象转化为数组
				if (Object.getOwnPropertyNames(this.shop_choosed).length - 1 == this.list.length) { //默认长度为 1
					this.shop_choosed = {}
					event.path[0].src = this.img.one
					arr.forEach((item) => {
						item.src = this.img.one
					})

				} else {
					this.list.forEach((item) => {
						this.shop_choosed[item.goodsId] = item.goodsId
						event.path[0].src = this.img.two
					})
					arr.forEach((item) => {
						item.src = this.img.two
					})

				}
			},
			down_date() { //批量下架
				for (let i in this.shop_choosed) {
					this.batchdata.push(this.shop_choosed[i])
				}
				this.$http.post("http://xuptyzh.goho.co:30303/goods/undercarriage", this.batchdata)
					.then((response) => {
						console.log(response)
					});
			},
			delete_data() { //批量删除
				for (let i in this.shop_choosed) {
					this.batchdata.push(this.shop_choosed[i])
				}
				this.$http.post("http://xuptyzh.goho.co:30303/goods/delete", this.batchdata)
					.then((response) => {
						console.log(response)
					});
			},
			render_page(data) { //自定义时间，子向父传值传递点击的页数
				this.page_data = data
			},
			goodsquery() { //根据翻页请求商品的详细信息
				this.$http.get("http://xuptyzh.goho.co:30303/goods/query/1/" + this.page_data)
					.then((response) => {
						console.log(response.body)
						this.page = response.body.pages;
						this.list = response.body.list;
						console.log()
					});
			}
		},
		created() {
			this.goodsquery()
		},
		mounted() {

		},
		watch: {
			page_data() {
				this.goodsquery()
			}
		}
	}
</script>
<style scoped>
	@import '../css/sellgoods.css';
</style>
