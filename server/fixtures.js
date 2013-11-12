if (Todos.find().count() === 0) {
	Todos.insert({
		title: 'Go for a walk',
		frequency: 'Weekly'
	});

	Todos.insert({
		title: 'Do this dishes',
		frequency: 'Daily'
	});

	Todos.insert({
		title: 'Walk the dogs',
		frequency: 'Daily'
	});
}