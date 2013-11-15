Template.todoPage.helpers({
	currentTodo: function() {
		return Todos.findOne(Session.get('currentTodoId'));
	},
	comments: function() {
		return Comments.find({todoId: this._id});
	}
});