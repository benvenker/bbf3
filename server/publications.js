Meteor.publish('todos', function() {
	return Todos.find({userId: this.userId});
});

Meteor.publish('comments', function() {
	return Comments.find({todoId: todoId});
});