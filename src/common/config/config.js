export default {
	logo: 'UNI-ADMIN',
	navBar: {
		active: '0',
		list: [
			{ 
				index: '0', name: '首页',
				subActive: '0',
				subMenu: [
					{
						index: '0',
						icon: 'el-icon-s-home',
						name: '后台首页'
					},
					{
						index: '1',
						icon: 'el-icon-s-claim',
						name: '商品列表'
					}
				]
			},
			{ 
				index: '1', name: '商品' ,
				subActive: '0',
				subMenu: []
			},
			{ 
				index: '2', name: '订单',
				subActive: '0',
				subMenu: []
			},
			{ 
				index: '3', name: '会员',
				subActive: '0',
				subMenu: []
			},
			{ 
				index: '4', name: '设置',
				subActive: '0',
				subMenu: []
			}
		]
	}
}