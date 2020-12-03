## vue-router安装和使用

`yarn add vue-router`

main.js

```js
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
	router,
    render: h => h(App),
}).$mount('#app')
```

router.js

```js
import Vue from "vue"
import Router from "vue-router"
import layout from './views/layout.vue';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'layout',
			component: layout,
			children: [{
				path: '/index',
				name: 'index',
				component: () => import('./views/index/index.vue')
			}]
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('./views/login/index.vue')
		}
	]
})
```

App.vue

```vue
<template>
  <div id="app">
		<router-view />
  </div>
</template>
```

### 子路由的使用

layout.vue

```vue
<template>
	<div>
		主布局
		<router-view></router-view>
	</div>
</template>
```

