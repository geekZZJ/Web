<template>
	<div id="app">
		<NavView></NavView>
		<router-view></router-view>
		<FooterView></FooterView>
	</div>
</template>
<script type="text/javascript">
	import NavView from './components/Nav.vue'
	import FooterView from './components/Footer.vue'
	export default{
		components:{
			NavView,
			FooterView
		}
	}
</script>
<style type="text/css">
	@import './assets/css/index.css'
</style>