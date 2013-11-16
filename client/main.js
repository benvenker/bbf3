Meteor.subscribe('todos');
Deps.autorun(function() {
	Meteor.subscribe('comments', Session.get('currentTodoId'));
});