import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map((t) =>{
			let date = new Date(t.date)
			date.setHours(23)
			date.setMinutes(59)
			date.setSeconds(59)

			if (new Date(date) < new Date()) {
				t.isActive = false
			}
			return t
		})
	},
	mutations: {
		addTodo(state, task) {
			state.tasks.push(task)
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		updateTodo(state, {
				id,
				description,
				title,
				date,
				isActive
			}) {
			const tasks = state.tasks.concat()
			const currentIndex = tasks.findIndex(t => t.id == id)

			tasks[currentIndex] = {
				...tasks,
				date,
				title,
				description,
				isActive
			}
			state.tasks = tasks
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		},
		removeTodo(state, {id}) {
			const tasks = state.tasks.concat()
			const currentIndex = tasks.findIndex(t => t.id == id)
	
			tasks.splice(currentIndex, 1)
			state.tasks = tasks
			localStorage.setItem('tasks', JSON.stringify(state.tasks))
		}
	},
	getters: {
		getTodoData: s => s.tasks
	}
})
