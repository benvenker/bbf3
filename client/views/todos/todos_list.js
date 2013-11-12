var todosData = [
	{
		title: 'Back massage',
		frequency: 'Weekly'
	},
	{
		title: 'Take out the garbage',
		frequency: 'Daily'
	},
	{
		title: 'Pay a compliment',
		frequency: 'Monthly'
	}
];
Template.todosList.helpers({
	todos: todosData
});