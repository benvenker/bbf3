Todos = new Meteor.Collection('todos');

Todos.allow({
	update: ownsDocument,
	remove: ownsDocument
});

/*Todos.deny({
	update: function(userId, todo, fieldNames) {
		// may only edit the following two fields:
		return (_.without(fieldNames, 'title', 'frequency').length > 0);
	}
}); */

// define Meteor method 'todo'
Meteor.methods({
	todo: function(todoAttributes) {
		// define our user variable and check if a post with the same link already exists.
		var user = Meteor.user(),
			todoWithSameLink = Todos.findOne({url: todoAttributes.url});

		// ensure the user is logged in, throwing an error if not
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new todos");

		// ensure todo has a title, throwing an error if not
		if (!todoAttributes.title)
			throw new Meteor.Error(422, "Please fill in a name for your todo");

		// pick out the whitelisted keys
		var todo = _.extend(_.pick(todoAttributes, 'title', 'frequency', 'message'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime(),
			commentsCount: 0
		});

		var todoId = Todos.insert(todo);

		return todoId;
	}
});