Meteor.Router.add({
	'/': 'todosList',
	'/todos/:_id': {
		to: 'todoPage',
		and: function(id) { Session.set('currentTodoId', id); }
	}
});