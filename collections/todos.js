Todos = new Meteor.Collection('todos');

// define Meteor method 'todo'
Meteor.methods({
	todo: function(todoAttributes) {
		var user = Meteor.user(),
			todoWithSameLink = Todos.findOne({url: todoAttributes.url});

		// ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new todos");

		// ensure todo has a title
		if (!todoAttributes.title)
			throw new Meteor.Error(422, "Please fill in a headline");

		// pick out the whitelisted keys
		var todo = _.extend(_.pick(todoAttributes, 'title', 'frequency', 'message'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		var todoId = Todos.insert(todo);

		return todoId;
	}
});