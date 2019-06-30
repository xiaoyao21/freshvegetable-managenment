<template>
	<div id="change">
		<ul ref="ulul">
			<li v-for="(page,index) in pages" v-if="pages<=5">
				{{page}}
			</li>

			<span @click="page_left(2)" :class=style>上一页</span>

			<template v-if="pages>5">
				<li @click="start()" class="sty">1</li>
				<span v-show="show_left">...</span>
				<li @click="delegate(),page_left(1)">2</li>
				<li @click="delegate()">3</li>
				<li @click="delegate(),page_right(1)">4</li>
				<span v-show="show_right">...</span>
				<li @click="end()">{{pages}}</li>
			</template>

			<span @click="page_right(2)" :class=style1>下一页</span>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'change',
		props: ["pagesd"],
		data() {
			return {
				pages: null, //传入的参数
				show_left: false,
				show_right: true,
				li: null,
				style: {
					one: true, //不可点
					two: false, //可点
				},
				style1: {
					one1: false, //不可点
					two1: true, //可点
				},
				currentPage: 1,
				now: 1
			}
		},
		methods: {
			delegate() {
				var e = e || window.event;
				var target = e.target || e.srcElement;
				this.currentPage = target.innerHTML;
			},
			page_left(haha) {
				if (haha == 2)
					if (this.currentPage > 1) {
						this.currentPage--;
					}

				if (this.currentPage >= 3 && this.pages - this.currentPage >= 3) {
					this.li[1].innerHTML--;
					this.li[2].innerHTML--;
					this.li[3].innerHTML--;
				}
				if (this.pages - this.li[3].innerHTML > 1) {

					this.show_right = true
				}
				if (this.currentPage == 3) {
					this.show_left = false
				}
			},
			page_right(haha) {
				if (haha == 2) {
					if (this.currentPage < this.pages) {
						this.currentPage++;
					}
				}

				// 当前页数大于4的时候就要改变Li[1][2][3]中的值
				if (this.currentPage >= 4 && this.pages - this.currentPage >= 2) {
					this.li[1].innerHTML++;
					this.li[2].innerHTML++;
					this.li[3].innerHTML++;
				}
				if (this.li[1].innerHTML - 1 > 1) {
					this.show_left = true
				}
				if (this.currentPage == this.pages - 2) {
					this.show_right = false
				}
			},
			start() {
				this.delegate()
				this.li[1].innerHTML = "2";
				this.li[2].innerHTML = "3";
				this.li[3].innerHTML = "4";

				this.style1.one1 = false;
				this.style1.two1 = true;
				this.style.one = true;
				this.style.two = false;

				this.show_left = false
				this.show_right = true;
			},
			end() {
				this.delegate()
				this.li[1].innerHTML = this.pages - 3;
				this.li[2].innerHTML = this.pages - 2;
				this.li[3].innerHTML = this.pages - 1;

				this.style1.one1 = true;
				this.style1.two1 = false;
				this.style.one = false;
				this.style.two = true;

				this.show_right = false;
				this.show_left = true;
			},
			transmit_page() {
				this.$emit("listen_page", this.currentPage)
			}
			

		},

		mounted() {
			this.pages = this.pagesd;
			console.log(this.pagesd, this.pages, "hgdjksaghdjkasgdk")
			this.currentPage = 1;
			this.li = this.$refs.ulul.getElementsByTagName("li")
		},
		watch: {
			currentPage: function(val) {

				if (this.currentPage == 1) {
					this.style.one = true;
					this.style.two = false;
				} else {
					this.style.one = false;
					this.style.two = true;
				}

				if (this.currentPage == this.pages) {
					this.style1.one1 = true;
					this.style1.two1 = false;
				} else {
					this.style1.one1 = false;
					this.style1.two1 = true;
				}
				if (this.pages <5) {
					for (var i = 0; i < this.pages; i++) {

						if (this.li[i].innerHTML == val) {
							this.li[i].className = "sty"
						} else {
							this.li[i].className = ""
						}
					}
				} else {
					for (var i = 0; i < 5; i++) {

						if (this.li[i].innerHTML == val) {
							this.li[i].className = "sty"
						} else {
							this.li[i].className = ""
						}
					}
				}

				this.transmit_page()
			},
			pagesd: function() { //父向子传值
				this.pages = this.pagesd
			}
		}
	}
</script>

<style scoped>
	#change {
		margin-top: 10px;
		/* position: absolute;
		left: 50%;
		transform: translate(-50%); */
	}

	#change li {
		width: 38px;
		height: 38px;
		line-height: 38px;
		text-align: center;
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

	/* one one1不可以点 */
	.one,
	.one1 {
		cursor: default;
		background-color: #fff;
		color: red;
	}

	/* two two1可以点 */
	.two,
	.two1 {
		color: #222222;
	}

	.sty {
		background-color: #19A605;
	}
</style>
