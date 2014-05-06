// Fixture data
if (Todos.find().count() === 0) {
	var now = new Date().getTime();

	// create two users
	// user one
	var tomId = Meteor.users.insert({
		profile: { name: 'Tom Coleman' }
	});
	var tom = Meteor.users.findOne(tomId);
	
	// user two
	var sachaId = Meteor.users.insert({
		profile: { name: 'Sacha Grief'}
	});
	var sacha = Meteor.users.findOne(sachaId);

	var betterBoyfriendId = Todos.insert({
		title: 'Go for a walk',
		frequency: 'Weekly',
		commentsCount: 2
	});

	Comments.insert({
		todoId: betterBoyfriendId,
		userId: tom._id,
		author: tom.profile.name,
		submitted: now - 5 * 3600 * 1000,
		body: 'Interesting todo Sacha, can I get involved?'
	});

	Comments.insert({
		todoId: betterBoyfriendId,
		userId: sacha._id,
		submitted: now -3 * 3600 * 1000,
		body: 'You sure can Tom!'
	});

	Todos.insert({
		title: 'Do this dishes',
		userId: tom._id,
		author: tom.profile.name,
		frequency: 'Daily',
		commentsCount: 0
	});

	Todos.insert({
		title: 'Walk the dogs',
		userId: tom._id,
		author: tom.profile.name,
		frequency: 'Daily',
		commentsCount: 0
	});
}