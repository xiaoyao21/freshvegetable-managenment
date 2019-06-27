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
				<button>批量下架</button>
				<button>批量删除</button>
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
					<td class="model"><span @click="editgoods({num:1,id:item.goodsId})">编辑</span@click="upgoods(
							 {id:item.goodsId})@click="deletegoods({id:item.goodsId})><span>下架</span><span>删除</span></td>
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

		<change :pagesd="page"></change>
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
				obj: undefined,
				list: undefined,
				page: 3,
				shop_choosed: {},
				img: {
					one: require("../assets/未勾选.png"),
					two: require("../assets/勾选.png")
				}
			}
		},
		methods: {
			editgoods(obj) {
				this.$router.push({
					path: "addgoods",
					query: {
						num: obj.num
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
				// console.log(typeof(num))
				if (this.shop_choosed[num] == num) {
					delete this.shop_choosed[num]
					event.path[0].src = this.img.one
				} else {
					this.shop_choosed[num] = num;
					event.path[0].src = this.img.two
				}
				console.log(this.shop_choosed);
			},
			cut_img(str) {
				// console.log(str);
				return (str.split(",")[0]);
			},
			all_shop_push(){
				var selects = document.getElementsByClassName("select_all")  //获取的是对象
				let arr = Array.prototype.slice.call(selects)  //将对象转化为数组
				if(Object.getOwnPropertyNames(this.shop_choosed).length-1 == this.list.length){  //默认长度为 1
					this.shop_choosed = {}
					event.path[0].src = this.img.one
					arr.forEach((item)=>{
						item.src = this.img.one
					})

				}else{
					this.list.forEach((item)=> {
					this.shop_choosed[item.goodsId] = item.goodsId
					event.path[0].src = this.img.two
					})
					arr.forEach((item)=>{
						item.src = this.img.two
					})

				}
			}
		},
		created() {
			this.page = 8;
			var global_obj;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					var status = xhr.status;
					if (status >= 200 && status < 300) {

						global_obj = JSON.parse(xhr.responseText);


					} else {

					}
				}
			};
			xhr.open("get", "http://xuptyzh.goho.co:30303/goods/query/1/1", false);
			xhr.send(null);
			this.page = global_obj.pages;
			this.list = global_obj.list;

			console.log(this.list, '123')

		},
		mounted() {

		}
	}
</script>

<style scoped>
	@import '../css/sellgoods.css';
</style>
