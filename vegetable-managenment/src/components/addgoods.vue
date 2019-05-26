<template>
	<div class="all">
		<p v-if="number==undefined" class="title">添加新商品</p>
		<p v-else-if="number==1" class="title">在线商品管理<img src="../assets/箭头.png"><span>编辑</span></p>
		<p v-else-if="number==2" class="title">已下架商品<img src="../assets/箭头.png"><span>编辑</span></p>
		<div class="content">
			<div class="left">
				<span>商品名称：</span><input type="text" value="" placeholder="请输入21字以内的商品名称"><br><br>
				<span>商品简介：</span>
				<textarea placeholder="请输入商品简介"></textarea><br><br><br><br><br><br>

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
				<span class="dis-left">单位（元）：</span><input type="text" value="" class="dis-right" placeholder="请输入商品单价"><br><br><br>
				<span class="dis-left">会员价（元）：</span><input type="text" value="" class="dis-right" placeholder="请输入会员专属价"><br><br><br>
				<span class="dis-left">商品分类：</span>
				<select name="sel" class="dis-right">
					<option value="1">蔬菜</option>
					<option value="2">水果</option>
					<option value="3">海鲜</option>
					<option value="4">肉蛋</option>
				</select><br><br><br>
				<span class="dis-left">供应商：</span><input type="text" value="" class="dis-right" placeholder="请选择商品供应商"><br><br><br>
				<span class="dis-left">库存：</span><input type="text" value="" class="dis-right" placeholder="请输入商品库存量"><br><br><br>
			</div>

			<div class="right">

				<template v-for="(name,index) in left.name">
					<span class="dit-left">{{name}}：</span><input type="text" value="" class="dit-right" v-bind:placeholder="left.top[index]"><br><br><br>
				</template>

				<span class="dit-left">设置：</span>
				<img src="../assets/未勾选.png" @click="one=!one" v-if="one" />
				<img src="../assets/勾选.png" @click="one=!one" v-else />

				<span>是否加入促销（元）</span><br><br>
				<input type="text" value="" class="dit-right" placeholder="请输入报销价"><br><br>
				<img src="../assets/未勾选.png" @click="two=!two" v-if="two" />
				<img src="../assets/勾选.png" @click="two=!two" v-else />

				<span>是否加入积分兑换商品（积分）</span><br><br>
				<input type="text" value="" placeholder="请输入兑换积分" class="dit-right"><br><br>
			</div>
		</div>

		<div>
			<button class="backd">取消</button>
			<button class="opend">确定</button>
		</div>
	</div>

</template>
<script>
	export default {
		name: "addgoods",
		hash: 'location.hash',
		data() {
			return {
				number: undefined,
				pic_list: [],
				one: true,
				two: true,
				left: {
					name: ["产地", "净含量", "保质期", "保存条件"],
					top: ["请输入商品产地", "请输入商品净含量", "请输入商品保质期", "请输入商品保存条件"],

				},

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
			}
		},
		mounted() {
			this.number = this.$route.query.num;
		},
		watch: {
			$route: {
				handler: function() {
					this.number = undefined
				}
			}
		}
	}
</script>


<style scoped>
	@import '../css/addgoods.css';
</style>
