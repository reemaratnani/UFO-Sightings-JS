// from data.js
// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

//function to append data in table row

function buildTable(data) {
	//Remove existing data 
	tbody.html("");

	data.forEach((rowdata) => {
		let row = tbody.append("tr");

		Object.values(rowdata).forEach((val) => {
			let cell = row.append("td");
			cell.text(val);
		
		});

	})
}


function handleclick() {

	d3.event.preventDefault();

	let date = d3.select('#datetime').property('value');
	let filter_data = tableData;

	// Check and filter the data using that date;
	if(date) {
		filter_data = filter_data.filter((row) => row.datetime === date);
	}
	buildTable(filter_data);

}


d3.selectAll('#filter-btn').on('click', handleclick);




buildTable(tableData);