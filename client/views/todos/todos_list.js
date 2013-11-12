Template.todosList.helpers({
	todos: function() {
		return Todos.find();
	}
});