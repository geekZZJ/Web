<template>
	<div id="news">
		<h3>我们新闻页</h3>
		<ul>
			<li v-for="(val,index) in news">{{val}}</li>
		</ul>	
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'news',
		data(){
			return {
				news:['123456','4567612745','33333333']
			}
		}
	}
</script>