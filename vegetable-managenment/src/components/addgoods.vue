<template>
	<div class="all">
		<p v-if="number==undefined" class="title">添加新商品</p>
		<p v-else>jiayou </p>

		<div class="left">
			<span>商品名称：</span><input type="text" value=""><br>
			<span>商品简介：</span><input type="textarea" value=""><br>
			<span>添加图片：</span>
			<div><span>+</span></div><br>
			<span>添加视频：</span>
			<div><span>+</span></div><br>
		</div>

		<div class="mid">
			<span>单位（元）：</span><input type="text" value="">
			<span>会员价（元）：</span><input type="text" value="">
			<span>商品分类：</span>
			<select name="sel">
				<option value="1">蔬菜</option>
				<option value="2">水果</option>
				<option value="3">海鲜</option>
				<option value="4">肉蛋</option>
			</select>
			<span>供应商：</span><input type="text" value="">
			<span>库存：</span><input type="text" value="">
		</div>

		<div class="right"></div>
	</div>

</template>
<script>
	export default {
		name: "addgoods",
		data() {
			return {
				number: undefined
			}
		},
		mounted() {
			console.log(this.$route.query.num)
			this.number = this.$route.query.num;
		}

	}
</script>


<style scoped>
	.all span {
		font-family: MicrosoftYaHei;
		font-size: 18px;
		color: #222222;
		font-weight: 900;
	}

	.title {
		font-family: MicrosoftYaHei;
		font-size: 20px;
		color: #222222;
		margin-left: 50px;
	}

	.left {
		width: 460px;
		height: 630px;
		background-color: #1CB906;
	}

	.left input :nth-child(1){
		width: 362px;
		height: 35px;
		background: #F6F6F6;
		border-radius: 4px;
	}

	.mid {
		width: ;
		height: ;
	}

	.right {
		width: ;
		height: ;
	}
</style>
