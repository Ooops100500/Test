$(document).ready(function() {
	$('.form').validate({
		rules: {
			email: {
				require: true,
				email: true
			}
		},
		messages: {
			email: 'Поля email обязательно для заполнения'
		}
	})
})