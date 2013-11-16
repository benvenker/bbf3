Meteor.publish('todos', function() {
	// only show the logged in user their own posts
	return Todos.find({userId: this.userId});
});

Meteor.publish('comments', function() {
	return Comments.find({todoId: todoId});
});