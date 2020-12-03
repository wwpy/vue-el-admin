<template>
	<div>
		<el-container style="position: absolute;left: 0;top: 0;bottom: 0;right: 0;overflow: hidden;">
			<el-header class="d-flex align-items-center" style="background: #545c64;">
				<a class="h5 text-light mb-0 mr-auto">UNI-ADMIN</a>
				<el-menu :default-active="navBarIndex" 
				mode="horizontal" 
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
				@select="handleSelect">
					<el-menu-item index="1">首页</el-menu-item>
					<el-menu-item index="2">商品</el-menu-item>
					<el-menu-item index="3">订单</el-menu-item>
					<el-menu-item index="4">会员</el-menu-item>
					<el-menu-item index="5">设置</el-menu-item>
					<el-submenu index="100">
						<template slot="title">
							<el-avatar size="small" 
							src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
							ww
						</template>
						<el-menu-item index="100-1">修改</el-menu-item>
						<el-menu-item index="100-2">退出</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-header>
			<el-container style="height: 100%;">
				<!-- 侧边栏布局 -->
				<el-aside width="200px" style="padding-bottom: 55px;">
					<el-menu default-active="2" @select="slideSelect">
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">导航二</span>
						</el-menu-item>
						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<!-- 主布局 -->
				<el-main>
					<li v-for="i in 100" :key="i">{{i}}</li>
				</el-main>
			</el-container>
		</el-container>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navBarIndex: '1',
				activeIndex2: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			slideSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
	}
</style>
