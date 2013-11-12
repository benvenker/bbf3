Template.todoPage.helpers({
	currentTodo: function() {
		return Todos.findOne(Session.get('currentTodoId'));
	}
});