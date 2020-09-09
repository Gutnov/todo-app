<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light main-navbar">
		<router-link to="/" class="navbar-brand logo">TODO APP</router-link>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse todo-navbar" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<router-link exact to="/" class="text-sm-center nav-link nav-link__first" active-class="active">
					Создать
				</router-link>
				<router-link to="/todo-list" active-class="active" class="text-sm-center nav-link">
					Список
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar'
	}

</script>

<style lang="scss">
	.navbar.main-navbar {
		padding-top: 30px;
		padding-bottom: 30px;
		background-color: #eee;
		padding: 30px 15px;
		margin-bottom: 50px;
	}

	.todo-navbar {
		justify-content: flex-end;
	}

	.navbar-brand.logo {
		font-size: 30px;
		font-weight: bold;
		margin-right: 100px;
		color: #007bff !important;

		&:hover {
			text-decoration: none;
			color: #007bff;
		}
	}

	.todo-navbar .nav-link {
		font-weight: bold;
		color: #007bff !important;

		&:hover {
			color: #7ea5cf !important;
			border-bottom: none;
		}

		&.active {
			border-bottom: 2px solid #007bff;
			&:hover {
				color: #7ea5cf !important;
				border-color: #7ea5cf !important;
			}
		}
	}

	.nav-link__first {
		margin-left: auto;
		margin-right: 20px;
	}


</style>
