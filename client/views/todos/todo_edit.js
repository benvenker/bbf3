Template.todoEdit.helpers({
	todo: function() {
		return Todos.findOne(Session.get('currentTodoId'));
	}
});

Template.todoEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var currentTodoId = Session.get('currentTodoId');

		var todoProperties = {
			title: $(e.target).find('[name=title]').val(),
      		frequency: $(e.target).find('[name=frequency]').val(),
     		message: $(e.target).find('[name=message]').val()
		}

		Todos.update(currentTodoId, {$set: todoProperties}, function(error) {
			if (error) {
				// display the error to the user
				alert(error.reason);
			} else {
				Meteor.Router.to('todoPage', currentTodoId);
			}
		});
	},

	'click .delete': function(e) {
		e.preventDefault();

		if (confirm("Delete this todo?")) {
			var currentTodoId = Session.get('currentTodoId');
			Todos.remove(currentTodoId);
			Meteor.Router.to('todosList');
		}
	}
});