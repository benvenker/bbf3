Meteor.Router.add({
	'/': 'todosList',

	'/todos/:_id': {
		to: 'todoPage',
		and: function(id) { Session.set('currentTodoId', id); }
	},
	
	'/submit': 'todoSubmit'
});

Meteor.Router.filters({
	'requireLogin': function(page) {
		if (Meteor.user())
			return page;
		else
			return 'accessDenied';
	}
});

Meteor.Router.filter('requireLogin', {only: 'todoSubmit'});