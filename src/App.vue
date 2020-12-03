<template>
  <div id="app">
	<router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data() {
	return {
		radio: 3
	}
  },
  methods: {
	change(e) {
		console.log(e)
	}
  }
}
</script>

<style>

</style>
