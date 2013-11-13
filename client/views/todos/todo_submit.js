Template.todoSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var todo = {
      title: $(e.target).find('[name=title]').val(),
      frequency: $(e.target).find('[name=frequency]').val(),
      message: $(e.target).find('[name=message]').val()
    }
    
    // create a meteor Method, 'todo', and attach a callback, which will execute
    // when the server-side Method is done.
    Meteor.call('todo', todo, function(error, id) {
      if (error)
        return alert(error.reson);
    });
    Meteor.Router.to('todosList');
  }
});