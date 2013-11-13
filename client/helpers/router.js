Meteor.Router.add({
	'/': 'todosList',

	'/todos/:_id': {
		to: 'todoPage',
		and: function(id) { Session.set('currentTodoId', id); }
	},
	'/todos/:_id/edit': {
		to: 'todoEdit',
		and: function(id) { Session.set('currentTodoId', id); }
	},
	
	'/submit': 'todoSubmit'
});

Meteor.Router.filters({
	'requireLogin': function(page) {
		if (Meteor.user())
			return page;
		else if (Meteor.loggingIn())
			return 'loading';
		else
			return 'accessDenied';
	}
});

Meteor.Router.filter('requireLogin', {only: 'todoSubmit'});