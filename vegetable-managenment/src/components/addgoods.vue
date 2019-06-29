<template>
	<div class="all">
		<p v-if="number==0" class="title">添加新商品</p>
		<p v-else-if="number==1" class="title">在线商品管理<img src="../assets/箭头.png"><span>编辑</span></p>
		<p v-else-if="number==2" class="title">已下架商品<img src="../assets/箭头.png"><span>编辑</span></p>
		<div class="content">
			<div class="left">
				<span>商品名称：</span><input type="text" value="" placeholder="请输入21字以内的商品名称" v-model="goodsDeteil2.goodsName"><br><br>
				<span>商品简介：</span>
				<textarea placeholder="请输入商品简介" v-model="goodsDeteil2.goodsDesc"></textarea><br><br><br><br><br><br>

				<div class="add-pic">
					<span>添加图片：</span>
					<span>+</span>
					<input type="file" @change="uploadImg" id="filepicker" accept="image/*">
					<div>
						<template v-for="(pic,index) in pic_list">
							<img :src="pic" />
							<img class="delete" src="../assets/删除.png" @click="delete_img(index)" />
						</template>
					</div>
				</div><br>


				<div class="add-vid">
					<span>添加视频：</span>
					<span>+</span>

				</div><br>
			</div>

			<div class="mid">
				<span class="dis-left">单位（元）：</span><input type="text" value="" class="dis-right" placeholder="请输入商品单价" v-model="goodsDeteil2.goodsPrice"><br><br><br>
				<span class="dis-left">会员价（元）：</span><input type="text" value="" class="dis-right" placeholder="请输入会员专属价" v-model="goodsDeteil2.goodsPrice*0.9"><br><br><br>
				<span class="dis-left">商品分类：</span>
				<select name="sel" class="dis-right" v-model="goodsDeteil2.goodsType">
					<option value="1">蔬菜</option>
					<option value="2">水果</option>
					<option value="3">海鲜</option>
					<option value="4">肉蛋</option>
				</select><br><br><br>
				<span class="dis-left">供应商：</span><input type="text" value="" class="dis-right" placeholder="请选择商品供应商"><br><br><br>
				<span class="dis-left">库存：</span><input type="text" value="" class="dis-right" v-model="goodsDeteil2.goodsNum"
				 placeholder="请输入商品库存量"><br><br><br>
			</div>

			<div class="right">

				<template v-for="(name,index) in left.name">
					<span class="dit-left">{{name}}：</span><input type="text" value="" class="dit-right" v-bind:placeholder="left.top[index]"
					 v-model="left.message[index]"><br><br><br>
				</template>

				<span class="dit-left">设置：</span>
				<img src="../assets/未勾选.png" @click="one=!one" v-if="one" />
				<img src="../assets/勾选.png" @click="one=!one" v-else />

				<span>是否加入促销（元）</span><br><br>
				<input type="text" value="" class="dit-right" placeholder="请输入报销价" ><br><br>
				<img src="../assets/未勾选.png" @click="two=!two" v-if="two" />
				<img src="../assets/勾选.png" @click="two=!two" v-else />

				<span>是否加入积分兑换商品（积分）</span><br><br>
				<input type="text" value="" placeholder="请输入兑换积分" class="dit-right"><br><br>
			</div>
		</div>

		<div>
			<button class="backd">取消</button>
			<button class="opend" @click="addgoods()">确定</button>
		</div>
	</div>

</template>
<script src="../js/ajax.js"></script>
<script>
	export default {
		name: "addgoods",
		hash: 'location.hash',
		data() {
			return {
				number: 0,
				pic_list: [], //添加图片绑定的数组
				one: true,
				two: true,
				left: {
					name: ["产地", "净含量", "保质期", "保存条件"],
					top: ["请输入商品产地", "请输入商品净含量", "请输入商品保质期", "请输入商品保存条件"],
					message: [""],
				},
				goodsDeteil1: {
					// goodsId: ""
					goodArea: "", //产地
					goodContent: "", //净含量
					goodDate: "", //保质期
					goodKeep: "冷藏", //存储方式
					// goodsDesc: "营养丰富，味道可口",
					file: "", //图片
					goodsName: "", //商品名称
					goodsNum: "", //库存
					goodsPrice: 21478.3, //价格
					goodsType: 1, //分类（eg：蔬菜）
					goodsVolume: "", //总销量
				},
				goodsDeteil2: {}
			}
		},
		methods: {
			uploadImg(e) {
				let _this = this;
				let files = e.target.files[0];
				if (!e || !window.FileReader) return; // 看支持不支持FileReader
				let reader = new FileReader();
				reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
				reader.onloadend = function() {
					_this.src = this.result;
					_this.isShow = true;
					_this.pic_list.push(_this.src);
				}
			},
			delete_img(value) {
				console.log(value)
				this.pic_list.splice(value, 1);
			},
			addgoods() { //添加新商品
			console.log(this.goodsDeteil2)
			this.goodsDeteil2.goodsPrice=parseFloat(this.goodsDeteil2.goodsPrice)
			// console.log(typeof(this.goodsDeteil2.goodsPrice))
			this.goodsDeteil2.goodsNum=parseInt(this.goodsDeteil2.goodsNum)
			this.goodsDeteil2.goodsVolume=parseInt(this.goodsDeteil2.goodsVolume)
			this.goodsDeteil2.goodsCountent=parseInt(this.goodsDeteil2.goodsCountent)
			this.goodsDeteil2.goodsData=parseInt(this.goodsDeteil2.goodsData)
				this.$http.post("http://xuptyzh.goho.co:30303/goods/insert", this.goodsDeteil2)
					.then((response) => {
						console.log(response)
					});
			},
			editgoods() { //在售商品的编辑
			this.goodsDeteil2._method = "put"
				this.$http.post("http://xuptyzh.goho.co:30303/goods/update", this.goodsDeteil2)
					.then((response) => {
						console.log(response)
					});
			},
			detail_goods() { //请求商品的详细信息
				this.$http.get("http://xuptyzh.goho.co:30303/goods/queryById/" + this.goodsId)
					.then((response) => {
						this.goodsDetail = response.body
					});
			},
			judge_router() { //判断路由 执行渲染操作
				if (this.number == 0) {
					this.goodsDeteil2 = this.goodsDeteil1
					this.left.message = [this.goodsDeteil2.goodArea, this.goodsDeteil2.goodContent, this.goodsDeteil2.goodDate, this.goodsDeteil2
						.goodKeep
					]
					console.log("000")
				} else if (this.number == 1) {
					// this.detail_goods();
					editgoods()
					this.goodsDeteil2 = {}
					this.left.message = [this.goodsDeteil2.goodArea, this.goodsDeteil2.goodContent, this.goodsDeteil2.goodDate, this.goodsDeteil2
						.goodKeep
					]
					console.log("11111")
				} else if (this.number == 2) {
					// this.detail_goods();
					
					console.log("22222")
				}
			}
		},
		created() {
			this.judge_router()
		},
		mounted() {
			this.number = this.$route.query.num;
			this.goodsId = this.$route.query.id;

		},
		watch: {
			$route: { //可以监听一个组件里面路由的变化  从编辑-->添加
				handler: function() {
					this.number = 0
					this.judge_router()
				},

			},
			number: function() {
				console.log(this.number)
				this.judge_router()
				// console.log(this.number,this.goodsId)

			}

		}
	}
</script>


<style scoped>
	@import '../css/addgoods.css';
</style>
