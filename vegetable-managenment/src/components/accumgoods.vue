<template>
	
	<div>
		

		<table>
			<tr style="height: 48px;">
				<td style="padding-left:24.48px;">积分商品(123)</td>
				<td>积分</td>
				<td>分类</td>
				<td>库存</td>
				<td>已兑换</td>
				<td>供应商</td>
				<td>操作</td>
			</tr>
			<div class="middle">
				<img src="../assets/未勾选.png">
				<span>全选</span>
				<button>批量下架</button>
				
			</div>

			<tr>
				<td class="goodsname">
			
					<img src="../assets/未勾选.png">
					<div class="vege-img"><img src="../assets/蔬菜.png" /></div>
					<p>商品名称商品名称商品名称商品名称商品名称商品名称</p>
			
				</td>
			
				<td>
					<input value="300积分"  type="text" :disabled=disabled :class="{edid,noedid}"/> 
					<img src="../assets/编辑.png" @click="edid_money"/>
				</td>
				<td><span>蔬菜</span></td>
				<td><span>3244</span></td>
				<td><span>244</span></td>
				<td><span>某某供应商</span></td>
				<td class="model"><span @click="edit(1)">编辑</span><span>下架</span></td>
			</tr>
			<tr>
				<td class="goodsname">
			
					<img src="../assets/未勾选.png">
					<div class="vege-img"><img src="../assets/蔬菜.png" /></div>
					<p>商品名称商品名称商品名称商品名称商品名称商品名称</p>
			
				</td>
			
				<td>
					<input value="300积分"  type="text" :disabled=disabled :class="{edid,noedid}"/> 
					<img src="../assets/编辑.png" @click="edid_money"/>
				</td>
				<td><span>蔬菜</span></td>
				<td><span>3244</span></td>
				<td><span>244</span></td>
				<td><span>某某供应商</span></td>
				<td class="model"><span @click="edit(1)">编辑</span><span>下架</span></td>
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
				disabled:true,
				edid:true,
				noedid:false
			}
		},
		methods: {
			edit(num) {
				this.$router.push({path:"addgoods",query:{num:num}})
			},
			edid_money(){
				this.disabled=!this.disabled;
				this.edid=!this.edid;
				this.noedid=!this.noedid;
			}
		},
	}
</script>

<style scoped>
	@import '../css/sellgoods.css';
	
	.edid{
		background-color: white;
		border: none;
		width: 65px;
		
	}
	.noedid{
		width: 65px;
		box-sizing: border-box;
		
	}
</style>
