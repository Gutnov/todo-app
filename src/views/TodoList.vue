<template>
	<div class="todo-list-wr">
		<div v-if="todos.length">
			<h1 class="title">Список задач</h1>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Статус</th>
						<th scope="col">Название</th>
						<th scope="col">Дата</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in filterTodos" :key="index">
						<td>
							<span v-if="item.isActive" class="badge badge-success">Активно</span>
							<span v-else class="badge badge-danger">Просрочено</span>
						</td>
						<td class="todo-name">{{item.title}}</td>
						<td>{{new Date(item.date).toLocaleDateString()}}</td>
						<td>
							<div class="todo-list-buttons">
								<button type="button" class="btn btn-primary" :data-id="item.id" @click="getCureentTodo"
									data-toggle="modal" data-target="#exampleModal">Редактировать
								</button>
								<button type="button" class="btn btn-danger" :data-remove="item.id"
									@click="removeTodo">Удалить</button>
							</div>
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<h1 class="title" v-else>
			Нет задач
		</h1>
		<div class="modal fade modal-todo" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<Todo :currentTodo="currentTodo" :key="+Math.floor(Math.random() * 1000000000000000)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Todo from '@/views/Todo'

	export default {
		data() {
			return {
				currentTodo: {
					title: '',
					description: '',
					date: '',
					id: null
				},
				filteredTodos: this.todos
			}
		},
		components: {
			Todo
		},
		computed: {
			todos() {
				return this.$store.getters.getTodoData
			},
			filterTodos() {
				let arr = this.todos.concat();
				for (let j = arr.length - 1; j > 0; j--) {
					for (let i = 0; i < j; i++) {
						if (new Date(arr[i].date)> new Date(arr[i + 1].date)) {
							let temp = arr[i];
							arr[i] = arr[i + 1];
							arr[i + 1] = temp;
						}
					}
				}
				return arr
			}
		},
		methods: {
			getCureentTodo(e) {
				for (let item of this.todos) {
					if (item.id == e.target.dataset.id) {
						this.currentTodo = item
					}
				}
			},
			removeTodo(e) {
				this.$store.commit('removeTodo', {
					id: e.target.dataset.remove
				})
			},
			

		}
	}

</script>

<style lang="scss">
	.todo-list-wr {
		.title {
			margin-bottom: 100px;
		}
	}

	.table {
		th {
			border: none;
		}

		td {
			vertical-align: middle;
			white-space: nowrap;
			max-width: 250px;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}

	.todo-list-buttons {
		display: flex;
		justify-content: flex-end;

		.btn {
			font-size: 14px;
			line-height: 22px;
			width: max-content;
			padding: 0 10px;
			padding-bottom: 2px;
		}

		.btn-primary {
			margin-right: 20px;
		}

	}

	.todo-name {
		font-weight: 500;
	}

	.badge {
		padding-bottom: 6px;
	}

	.modal-todo.show {
		display: flex !important;
		align-items: center;

		.modal-dialog {
			flex-grow: 1;
		}
	}

</style>
