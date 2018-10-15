import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'

export default[
	{
		path:'/home',
		component:Home
	},
	{
		path:'/follow',
		component:Follow
	},
	{
		path:'/column',
		component:Column
	},
	{
		path:'/user-info',
		component:UserInfo
	},
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'*',
		redirect:'/home'
	}
]