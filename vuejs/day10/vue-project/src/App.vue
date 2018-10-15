<template>
	<div id="app">
		<NavView v-show="headerShow"></NavView>
		<router-view></router-view>
		<FooterView></FooterView>
	</div>
</template>
<script type="text/javascript">
	import NavView from './components/Nav.vue'
	import FooterView from './components/Footer.vue'
	import {mapGetters,mapActions} from 'vuex'


	export default{
		computed:mapGetters([
			'headerShow'
		]),
		watch:{
			$route(to,from){
				console.log(to.path);
				if (to.path == '/user-info') {
					this.$store.dispatch('hideHeader')
				}else{
					this.$store.dispatch('showHeader')
				}
			}
		},
		components:{
			NavView,
			FooterView
		}
	}
</script>
<style type="text/css">
	@import './assets/css/index.css'
</style>