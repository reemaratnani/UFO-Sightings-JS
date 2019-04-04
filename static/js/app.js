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
buildTable(tableData);