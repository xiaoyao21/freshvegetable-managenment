<template>
	<div class="bg">
		<p>邻里鲜生后台管理系统</p>
		<img src="../assets/蔬菜.png" class="veg" />
		<div class="all">
			<h3>账号登陆</h3>
			<input type="text" v-model="username" placeholder="请输入账号">
			<input v-if="eye" v-model="password" type="text" placeholder="请输入密码">
			<input v-else v-model="password" type="password" placeholder="请输入密码">

			<img class="eyes" v-if="eye" src="../assets/明文显示.png" @click="eye=!eye;">
			<img class="eyes" v-else src="../assets/密文显示.png" @click="eye=!eye">

			<img v-if="choose" class="choo" src="../assets/未勾选.png" @click="choose=!choose" />
			<img v-else class="choo" src="../assets/勾选.png" @click="choose=!choose" />
			<button @click="login">登陆</button>
		</div>
	</div>

</template>
<!-- <script src="../js/ajax.js"></script> -->
<script>
	// import {
	// 	Ajax
	// } from '../js/ajax.js'
	export default {
		data() {
			return {
				choose: false,
				eye: false,
				username: '',
				password: '',
			}
		},
		methods: {
			login() {
				let data = {
					"username": this.username,
					"password": this.password
				}
				data = JSON.stringify(data);
				if (this.choose == true) {
					this.$http.post("http://xuptyzh.goho.co:30303/superman/rememberMe", data)
						.then((response) => {
							console.log(response.body)
							if (response.body.state == -1) {  //账号错误
								console.log(response.body.desc)
							} else if (response.body.state == 0) {  //密码错误
								
							}else{  //登陆成功
								this.$router.push({
									path: '/'
								})
							}
							
						});
				} else {
					this.$http.post("http://xuptyzh.goho.co:30303/superman/login", data)
						.then((response) => {
							console.log(response.body)
							if (response.body.state == -1) {  //账号错误
								console.log(response.body.desc)
							} else if (response.body.state == 0) {  //密码错误
								
							}else{  //登陆成功
								this.$router.push({
									path: '/'
								})
							}
							
						});
				}
			}
		}
	}
</script>

<style scoped>
	.bg {

		background-repeat: no-repeat;
		background-image: url('../assets/bg.png');
		/* background-color: #19A605; */
		background-size: 100% auto;

		width: 100%;
		height: 100%;

	}

	.eyes {
		display: inline-block;
	}

	.bg p {
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: #FFFFFF;
		letter-spacing: 0;
		/* text-align: center; */
		padding: 20px;

	}

	.choo {
		width: 14px;
		height: 14px;
	}

	.veg {
		width: 30%;
		height: auto;
		margin-top: 13%;
		margin-left: 19%;
	}

	.all h3 {
		font-weight: 400;
		text-align: center;
		margin-top: 20px;

		text-align: center;
	}


	.all input {
		background: #F2F4F6;
		border-radius: 4px;
		c width: 80%;
		height: 13%;
		margin: 0 auto;
		padding: 7px;
	}

	.all {
		float: right;
		margin-right: 20%;
		width: 22%;
		height: auto;
		background-color: #222222;
		background: #FFFFFF;
		box-shadow: 0 2px 48px 0 rgba(176, 192, 237, 0.42);
		border-radius: 6px;
		border-radius: 6px;
	}
</style>
