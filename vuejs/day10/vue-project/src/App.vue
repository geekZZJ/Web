<template>
	<div id="app">
		<NavView></NavView>
		<HomeView></HomeView>
		<FooterView></FooterView>
	</div>
</template>
<script type="text/javascript">
	import NavView from './components/Nav.vue'
	import HomeView from './components/Home.vue'
	import FooterView from './components/Footer.vue'
	export default{
		components:{
			NavView,
			HomeView,
			FooterView
		}
	}
</script>
<style type="text/css">
	@import './assets/css/index.css'
</style>