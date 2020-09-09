<template>
	<div id="app">
		<Navbar/>
		<div class="container">
			<router-view/>
		</div>	
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'


export default {
	data() {
		return {
			lang: {
				months: ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'],
				monthsShort: ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'],
			}
		}
	},
	components: {
		Navbar
	}
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import '~vue2-datepicker/scss/index.scss';

.table td {
	padding: 30px 10px;
}

.title {
	text-align: center;
}
.btn {
	font-weight: bold;
}
form {
	
	.form-group {
		margin-bottom: 30px;
		textarea{min-height: 100px;}
	}
}
.mx-datepicker {
	width: 100%;
}
</style>
