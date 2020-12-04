<template>
	<div>
		<el-container style="position: absolute;left: 0;top: 0;bottom: 0;right: 0;overflow: hidden;">
			<el-header class="d-flex align-items-center" style="background: #545c64;">
				<a class="h5 text-light mb-0 mr-auto">
					{{$conf.logo}}
				</a>
				<el-menu :default-active="navBar.active" 
				mode="horizontal" 
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
				@select="handleSelect">
					<el-menu-item :index="item.index" v-for="(item, index) in navBar.list" :key="index">{{item.name}}</el-menu-item>
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
				<el-aside width="200px">
					<!-- 侧边栏菜单 -->
					<el-menu default-active="0" @select="slideSelect" style="height: 100%;">
						<el-menu-item :index="item.index" 
						v-for="(item, index) in slideMenues" :key="index">
							<i :class="item.icon"></i>
							<span slot="title">{{item.name}}</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<!-- 主布局 -->
				<el-main>
					<!-- 面包屑导航 -->
					<div class="border-bottom" style="padding: 20px;margin: -20px;">
						<el-breadcrumb separator-class="el-icon-arrow-right">
							<el-breadcrumb-item>首页</el-breadcrumb-item>
							<el-breadcrumb-item>活动管理</el-breadcrumb-item>
							<el-breadcrumb-item>活动列表</el-breadcrumb-item>
							<el-breadcrumb-item>活动详情</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
				</el-main>
			</el-container>
		</el-container>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	import common from '@/common/mixins/common.js';
	
	export default {
		mixins: [common],
		data() {
			return {
				navBar: [],
				bran: []
			}
		},
		created() {
			// 初始化菜单
			this.navBar = this.$conf.navBar
			// 获取面包屑导航
			this.getRouterBran()
		},
		computed: {
			slideMenuActive: {
				get() {
					return this.navBar.list[this.navBar.active].subActive || '0'
				},	
				set(val) {
					this.navBar.list[this.navBar.active].subActive = val
				}
			},
			slideMenues() {
				return this.navBar.list[this.navBar.active].subMenu || []
			}
		},
		methods: {
			// 获取面包屑导航
			getRouterBran() {
				console.log(this.$route.matched)
				let b = this.$route.matched.filter(v => v.name)
				let arr = []
				b.forEach((v, k) => {
					// 过滤layout和index
					if (v.name === 'index' || v.name === 'layout') return
					arr.push({
						name: v.name,
						path: v.path,
						title: v.meta.title
					})
				})
				if (arr.length > 0) {
					arr.unshift({ name:'index',path:'/index',title:'后台首页'})
				}
				this.bran = arr
			},
			// 头部导航
			handleSelect(key, keyPath) {
				this.navBar.active = key
				console.log(keyPath)
			},
			// 侧边导航
			slideSelect(key, keyPath) {
				this.slideMenuActive = key
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
