<template>
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<div class="form-wr">
				<h1 class="title">Добавить Задачу</h1>
				<form @submit.prevent="addTodo">
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
						<textarea 
							class="form-control" 
							id="totdo-text"
							v-model="description"
						>
						</textarea>
					</div>
					<div class="form-group">
						<date-picker 
							v-model="date"
							:format="'DD.MM.YYYY'"
							:disabled-date="(date) => date < disabledDate"
						/>
					</div>
					<button type="submit" class="btn btn-primary">Добавить</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/ru';

export default {
	name: 'NewTodo',
	components: {
		DatePicker
	},
	data() {
		return {
			title: '',
			description: '',
			date: new Date(),
			currentDate: new Date()
		}
	},
	computed: {
		disabledDate() {
			const date = new Date()
			return date.setDate(date.getDate() -1)
		}
	},
	methods: {
		addTodo() {
			const todoData = {
				title: this.title,
				description: this.description,
				date: this.date,
				id: Date.now(),
				isActive: true
			}
			this.$store.commit('addTodo', todoData)

			this.$router.push('/todo-list')
		}	
	}

}

</script>

<style lang="scss">
	textarea.form-control {
		min-height: 100px;
		max-height: 300px;
	}
	.form-wr {
		box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
		border-radius: 10px;
		padding: 40px 20px;

		.btn {
			width: 100%;
		}
		.title{margin-bottom: 30px;}

		.form-group--picker{margin-bottom: 30px;}
	}
	.qs-square {
		height: 40px;
	}
	.qs-datepicker-container {
		width: 100%;
	}
</style>
