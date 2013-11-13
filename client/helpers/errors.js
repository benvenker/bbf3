// Local (client-only) collection
Errors = new Meteor.Collection(null);

throwerror = function(message) {
	Errors.insert({message: message, seen: false})
}

clearErrors = function() {
	Errors.remove({seen: true});
}