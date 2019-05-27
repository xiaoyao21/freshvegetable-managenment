<template>
	<div id="change">
		<ul>
			<span>上一页</span>
			<li class="{click}">1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>...</li>
			<li>20</li>
			<span>下一页</span>

		</ul>
	</div>
</template>

<script>
	export default {
		name: 'change',

		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	#change li {
		width: 38px;
		height: 38px;
		line-height: 38px;
		text-align: center;
		background-color: #c6c6c6;
		display: inline-block;
		cursor: pointer;
	}

	#change span {
		width: 48px;
		height: 38px;
		line-height: 38px;
		text-align: center;
		cursor: pointer;
	}
</style>
