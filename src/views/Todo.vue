<template>
	<div>
		<form class="todo-update-form" @submit.prevent="updateTodo">
			<div class="form-group">
				<label for="totdo-text-title">Название</label>
				<input 
					type="text" 
					class="form-control" 
					id="totdo-text-title" 
					autocomplete="off" 
					required 
					v-model="title"
				>
			</div>
			<div class="form-group">
				<label for="totdo-text">Описание</label>
				<textarea class="form-control" id="totdo-text" v-model="description"></textarea>
			</div>
			<div class="form-group">
					<date-picker 
						v-model="date"
						:format="'DD.MM.YYYY'"
					/>
				</div>
			<button 
				type="submit" 
				class="btn btn-primary"
				data-toggle="modal" 
				data-target="#exampleModal"
			>Редактировать</button>
		</form>
	</div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ru';

export default {
	name: 'Todo',
	components: {
		DatePicker
	},
	props: ['currentTodo'],
	data() {
		return {
			title: this.$props.currentTodo.title,
			description: this.$props.currentTodo.description,
			date: new Date(this.$props.currentTodo.date)
		}
	},
	computed: {
		todoData() {
			return this.$store.getters.getTodoData
		}
	},
	methods: {
		updateTodo() {
			this.$store.commit('updateTodo', {
				title: this.title,
				description: this.description,
				date: this.date,
				id: this.currentTodo.id,
				isActive: this.date < new Date()
			})
		}
	}
}
</script>

<style lang="scss">
	.todo-update-form {
		padding: 30px;
		.btn {
			display: block;
			margin-left: auto;
			margin-top: 50px;
		}
	}
</style>
