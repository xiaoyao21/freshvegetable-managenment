<template>
	<div class="shade_box" @click="disappear()">
		<div class="shade_content">
			<p>{{warning[object.state]}}</p>
			<div>
				<button @click="yes()">确定</button>
				<button @click="no()">取消</button>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				object:{},  //1删除   2.下架   3.添加商品
				warning:["ahaha,程序走神了","亲，你确定要删除小可爱我嘛?","主人，你下架了就再也见不到我了?","请再检查一下，添加了之后别人就可以看到我了"]
				        
			}
		},
		methods: {
			disappear() {
				if (event.target.getAttribute("class") == "shade_box")
				{
					event.target.style.display="none"
				}
			},
			handleParentClick(obj) {
				this.object=obj;
				document.getElementsByClassName("shade_box")[0].style.display="block"
			},
			deletegoods() {  
				
				this.$http.delete("http://xuptyzh.goho.co:30303/goods/delete/" + this.object.id)
					.then((response) => {
						alert("删除")
						console.log(response)
					});
					document.getElementsByClassName("shade_box")[0].style.display="none"
			},
			yes(){
				if(this.object.state==1){  //删除
					deletegoods()
					
				}
			},
			no(){
				document.getElementsByClassName("shade_box")[0].style.display="none"
			}
		}
	}
</script>

<style>
	.shade_box {
		width: 1920px;
		height: 1080px;
		position: absolute;
		left: 0;
		top: 0;
		background-color: slategray;
		opacity: .4;
		transition: .1s;
		display: none;
		
	}

	.shade_content {
		width: 30%;
		height: 30%;
		margin: 10% auto;
		background-color: white;
		z-index: 5;
		border-radius: 10px;
	}
	.shade_content p{
		text-align: center;
		padding:80px 20px;
		font-size: 30px;
	}
	.shade_content button{
		text-align: center;
		font-size: 27px;
		margin-left: 100px;
		padding: 5px 10px;
		border-radius: 5px;
		color: white;
		background-color: brown;
		cursor: pointer;
	}
	.shade_content button:nth-child(1){
		background-color: #19A605;
	}
	
	.shade_content div{
		margin-left: 60px;
		
	}
</style>
