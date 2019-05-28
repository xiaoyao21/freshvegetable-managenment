<template>
	<div id="change">
		<ul @click="delegate()" ref="ulul">
			<span @click="page_left()" :class="style">上一页</span>

			<li v-for="(page,index) in pages" v-if="pages<=5">
				{{page}}
			</li>

			<template v-if="pages>5">
				<li class="{click}">1</li>
				<span v-show="show_left">...</span>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<span v-show="show_right">...</span>
				<li>{{pages}}</li>
			</template>

			<span @click="page_right()">下一页</span>

		</ul>

	</div>
</template>

<script>
	export default {
		name: 'change',

		data() {
			return {
				pages: null,
				show_left: false,
				show_right: true,
				li: null,
				style: {
					one: !this.show_left,
					two: this.show_left
				}
			}
		},
		methods: {
			delegate() {
				var e = e || window.event;
				var target = e.target || e.srcElement;
				//console.log(target.innerHTML);

			},
			page_left() {
				if (this.li[1].innerHTML > 2) {
					this.li[1].innerHTML--;
					this.li[2].innerHTML--;
					this.li[3].innerHTML--;
				}

				if (this.pages - this.li[3].innerHTML > 1) {

					this.show_right = true
				}
				if (this.li[1].innerHTML - 1 <= 1) {
					this.show_left = false
				}
			},
			page_right() {
				if (this.li[3].innerHTML < this.pages - 1) {
					this.li[1].innerHTML++;
					this.li[2].innerHTML++;
					this.li[3].innerHTML++;

				}
				if (this.li[1].innerHTML - 1 > 1) {
					this.show_left = true
				}
				if (this.pages - this.li[3].innerHTML <= 1) {

					this.show_right = false
				}
			}

		},
		mounted() {
			this.pages = 15;
			console.log(this.$refs.ulul);
			this.li = this.$refs.ulul.getElementsByTagName("li")
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

	.two {
		cursor: default;
		background-color: #fff;
		color: red;
	}
</style>
