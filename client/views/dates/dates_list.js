var datesData = [
	{
		name: 'Dinner at Taste',
		location: 'https://maps.google.com/maps?hl=en&q=taste%20CWE',
		url: 'http://tastebarstl.com'
	},
	{
		name: 'Salsa dancing',
		location: 'The salsa dancing place',
	},
	{
		name: 'Go shooting',
		location: 'Gun range',
	}
];

Template.datesList.helpers({
	dates: datesData
});