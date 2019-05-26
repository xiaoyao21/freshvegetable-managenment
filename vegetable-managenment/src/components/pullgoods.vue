<template>
	
	<div>
		

		<table>
			<tr style="height: 48px;">
				<td style="padding-left:24.48px;">已下架商品(123)</td>
				<td>价格(元)</td>
				<td>分类</td>
				<td>库存</td>
				<td>总销量</td>
				<td>供应商</td>
				<td>操作</td>
			</tr>
			<div class="middle">
				<img src="../assets/未勾选.png">
				<span>全选</span>
				<button>批量下架</button>
				<button>批量删除</button>
			</div>

			<tr>
				<td class="goodsname">

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
				<td class="model"><span @click="edit(2)">编辑</span><span>重新上架</span><span>删除</span></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: "sellgoods",
		data() {
			return {
				classify: ['蔬菜', '水果', '海鲜', '肉蛋'],
				supplier: ['某某供应商', '某某供应商', '某某供应商', '某某供应商'],

			}
		},
		methods: {
			edit(num) {
				this.$router.push({path:"addgoods",query:{num:num}})
			}
		},
	}
</script>

<style scoped>
	@import '../css/sellgoods.css';
</style>
