import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'new-todo',
		component: () => import('../views/NewTodo')
	},
	{
		path: '/todo-list',
		name: 'todo-list',
		component: () => import('../views/TodoList')
	},
	{
		path: '/todo/:id',
		name: 'todo',
		component: () => import('../views/Todo')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
