<template>
	<ul>
		<li v-for="val in list">{{val}}</li>
	</ul>
</template>
<style type="text/css" media="screen">
	
</style>
<script type="text/javascript">
	export default{
	    data(){
	        return{
	            list:['apple','banana','orange']
			}
		}
	}
</script>