Template.todoSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var todo = {
      title: $(e.target).find('[name=title]').val(),
      frequency: $(e.target).find('[name=frequency]').val(),
      message: $(e.target).find('[name=message]').val()
    }
    
    todo._id = Todos.insert(todo);
    Meteor.Router.to('todoPage', todo);
  }
});