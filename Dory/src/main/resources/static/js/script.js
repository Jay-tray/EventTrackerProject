window.addEventListener('load', function(evt) {
	console.log('Page loaded')
	init();
});

let divingLogs;

function init() {
	document.diveForm.lookup.addEventListener('click', function(evt) {
		evt.preventDefault();
		let diveId = document.diveForm.diveId.value;
		if (!isNaN(diveId) && diveId > 0) {
			getDive(diveId);
		}
	});

	newDivingLog.addDiveButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		let newDive = {
			siteName: newDivingLog.siteName.value,
			siteLocation: newDivingLog.siteLocation.value,
			date: newDivingLog.date.value,
			visibility: newDivingLog.visibility.value,
			diveStart: newDivingLog.diveStart.value,
			diveEnd: newDivingLog.diveEnd.value
		};

		addDive(newDive);
	});

	document.diveLoadForm.diveLoad.addEventListener('click', function(evt) {
		evt.preventDefault();
		loadDivingLogs(divingLogs);

	});
	


}




function addDive(newDive) {
	let xhr = new XMLHttpRequest();
	console.log(newDive);
	xhr.open('POST', 'api/divinglogs');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let dive = JSON.parse(xhr.responseText);
				displayDiveLog(dive);
			}
			else {
				displayError("Error creating dive: " + xhr.status);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(newDive));
}


function displayError(message) {
	let div = document.getElementById('diveData')
	div.textContent = message;
	}


function getDive(diveId) {
	console.log(diveId)
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/divinglogs/' + diveId, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dive = JSON.parse(xhr.responseText);
				displayDiveLog(dive);
			} else if (xhr.status === 404) {
				displayError("ERROR: Event not found. Please search for another dive!");
			} else {
				console.log(xhr.status);
			}
		}
	};
	xhr.send();
}

function displayDiveLog(dive) {
	console.log('Displaying Dive Log')
	console.log(dive)
	let diveDataDiv = document.getElementById('diveData');
	diveDataDiv.textContent = '';
	let id = document.createElement('div');
	id.textContent = dive.id;
	id.style.display="none";
	diveDataDiv.append(id);
	let h1 = document.createElement('h1');
	h1.textContent = dive.siteName;
	diveDataDiv.appendChild(h1);
	let h2 = document.createElement('h2');
	h2.textContent = dive.siteLocation;
	diveDataDiv.appendChild(h2);
	let ul = document.createElement('ul');
	diveDataDiv.appendChild(ul);
	let li = document.createElement('li');
	li.textContent = dive.date;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = dive.visibility;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = dive.diveStart;
	ul.appendChild(li);
	li = document.createElement('li');
	li.textContent = dive.diveEnd;
	ul.appendChild(li);
	let br = document.createElement("br");
	li.appendChild(br)


	let deleteBtn = document.createElement('input');
	deleteBtn.type = 'button';
	deleteBtn.name = 'delete';
	deleteBtn.value = 'Delete';
	deleteBtn.addEventListener('click', deleteDiveButton);
	li.appendChild(deleteBtn);


	let edit = document.createElement("input");
	edit.type = "button";
	edit.name = "edit";
	edit.value = "Edit";
	edit.addEventListener('click', updateDiveLogForm);
	li.append(edit);
	
	let totalTime = document.createElement("input");
	totalTime.type = "button";
	totalTime.name = "totalTime";
	totalTime.value = "Total Dive time";
	totalTime.addEventListener('click', totalDiveTime);
	li.append(totalTime);
}

function loadDivingLogs() {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/divinglogs');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let divingLogs = JSON.parse(xhr.responseText);
				console.log(divingLogs);
				displayDivingLogs(divingLogs);
			}
			else if (xhr.readyState === 404) {
				displayError('Logs not found')
			}
			else {
				displayError("Error retrieving logs")
			}
		}
	};
	xhr.send();
}

function displayDivingLogs(divingLogs) {
	//DOM
	console.log('FUNCTION INVOKED: displayDivingLogs');
	createTable(divingLogs);
}

//CREATE TABLE
let createTable = function(divingLogs) {
	console.log('creating table')
	console.log(divingLogs)
	let diveOutput = document.getElementById('output');
	diveOutput.textContent = '';
	let table = document.createElement('table');
	createHead(table);
	createBody(table, divingLogs)
	diveOutput.appendChild(table);
}

//TABLE HEAD
let createHead = function(table) {
	//create thead
	let headers = ['siteName', 'siteLocation', 'date', 'visibility', 'diveStart', 'diveEnd']
	let thead = document.createElement('thead');
	let trow = document.createElement('tr');
	for (i = 0; i <= headers.length; i++) {
		let th = document.createElement('th');
		th.textContent = headers[i];
		trow.appendChild(th);
	}
	table.appendChild(thead);
	thead.appendChild(trow);

}
//TABLE BODY
let createBody = function(table, divingLogs) {
	let tbody = document.createElement('tbody');
	//ITERATION
	divingLogs.forEach(function(divingLogs) {

		let trow = document.createElement('tr');

		// Assign the site name to a column for current row
		let siteName = document.createElement('td');
		siteName.textContent = divingLogs.siteName;
		trow.appendChild(siteName);


		// Assign the site location to a column for current row
		let siteLocation = document.createElement('td');
		siteLocation.textContent = divingLogs.siteLocation;
		trow.appendChild(siteLocation);


		// Assign the date to a column for current row
		let date = document.createElement('td');
		date.textContent = divingLogs.date;
		trow.appendChild(date);

		// Assign the visibility to a column for current row
		let visibility = document.createElement('td');
		visibility.textContent = divingLogs.visibility;
		trow.appendChild(visibility);

		// Assign the dive start to a column for current row
		let diveStart = document.createElement('td');
		diveStart.textContent = divingLogs.diveStart;
		trow.appendChild(diveStart);

		// Assign the dive end to a column for current row
		let diveEnd = document.createElement('td');
		diveEnd.textContent = divingLogs.diveEnd;
		trow.appendChild(diveEnd);

		tbody.appendChild(trow);
		table.appendChild(tbody);


		// Assign a button with an event listener to edit an entry, tied to an update function
		//let editBtn = document.createElement('button');
		//editBtn.type = 'submit';
		//editBtn.name = 'edit';
		//editBtn.innerHTML = 'Edit';

		//let deleteBtn = document.createElement('button');
		//deleteBtn.type = 'submit';
		//deleteBtn.name = 'delete';
		////deleteBtn.innerHTML = 'Delete';
		//deleteBtn.addEventListener('click', deleteDive);

		//editBtn.addEventListener('click', function(evt) {
		//evt.preventDefault();
		//updateDivingLog.style.display = "initial";
		//newDivingLog.style.display = "none";
		//console.log(divingLogs)
		// Send the object to update function
		//updateDiveLogEvent();

		//});


		//trow.appendChild(editBtn);
		//trow.appendChild(deleteBtn);

	});
}

function getDiveId(id) {
	let xhr = new XMLHttpRequest();
	console.log('Getting Dive ID: ')
	console.log("id is: " + id)
	xhr.open("GET", "api/divinglogs/" + id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dive = JSON.parse(xhr.responseText);
				updateDiveLogInfo(dive);
			} else {
				console.log(xhr.status);
			}
		}
	};

	xhr.send();



};


function updateDiveLogForm() {
	let div = document.getElementById("diveData");
	console.log('update Dive log Form')
	let id = div.firstElementChild.textContent;
	console.log(id)
	div.textContent = "";
	console.log('test')
	getDiveId(id);
	console.log('test')
	console.log(id);

	let hiddenId = document.createElement("div");
	hiddenId.textContent = id;
	hiddenId.style.display = "none";
	console.log(id);

	let editForm = document.createElement("form");
	let siteName = document.createElement("input");
	let siteLocation = document.createElement("input");
	let date = document.createElement("input");
	let visibility = document.createElement("input");
	let diveStart = document.createElement("input");
	let diveEnd = document.createElement("input");

	let submit = document.createElement("button");


	editForm.name = "editForm";
	siteName.type = "text";
	siteName.name = "siteName";
	siteLocation.type = "text;"
	siteLocation.name = "siteLocation"
	date.type = "date";
	date.name = "date";
	visibility.type = "text";
	visibility.name = "visibility";
	diveStart.type = "time";
	diveStart.name = "diveStart";
	diveEnd.type = 'time';
	diveEnd.name = 'diveEnd';
	submit.name = "submit";
	submit.value = "Submit";
	submit.innerHTML = "Submit"

	editForm.appendChild(hiddenId);
	console.log('after hiddenId')
	console.log(id)
	editForm.appendChild(siteName);
	editForm.appendChild(siteLocation);
	editForm.appendChild(date);
	editForm.appendChild(visibility);
	editForm.appendChild(diveStart);
	editForm.appendChild(diveEnd);
	editForm.appendChild(submit);
	div.appendChild(editForm);

	for (input of editForm) {
		let br = document.createElement('br');
		input.after(br);
	}

}

function updateDiveLogInfo(dive) {
	console.log('updateDiveLogInfo')
	console.log(dive)
	console.log(dive.id)
	let form = document.editForm;
	form.siteName.value = dive.siteName;
	form.siteLocation.value = dive.siteLocation;
	form.date.value = dive.date;
	form.visibility.value = dive.visibility;
	form.diveStart.value = dive.diveStart;
	form.diveEnd.value = dive.diveEnd;


	form.submit.addEventListener('click', updateDiveLog);
}

function updateDiveLog(e) {
	e.preventDefault();
	console.log('updateDiveLog')
	let editForm = document.editForm;

	let id = editForm.firstElementChild.textContent;
	console.log(id);
	let dive = {
		siteName: editForm.siteName.value,
		siteLocation: editForm.siteLocation.value,
		date: editForm.date.value,
		visibility: editForm.visibility.value,
		diveStart: editForm.diveStart.value,
		diveEnd: editForm.diveEnd.value
	}
	console.log(JSON.stringify(dive));

	let xhr = new XMLHttpRequest();

	xhr.open(`PUT`, 'api/divinglogs/' + id);
	console.log(id);

	xhr.setRequestHeader("Content-Type", "Application/JSON");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let update = "The diving log has been updated!";
				alert(update);
			} else {
				displayError("Error updating this event: " + xhr.status);
			}
		}
	}



	xhr.send(JSON.stringify(dive));
}


function deleteDiveButton() {
	console.log('deletedivebutton')
	let id = document.getElementById("diveData").firstElementChild.textContent;
	console.log('id is: ' + id);
	deleteDive(id);
}

function totalDiveTime() {
	console.log('totalDiveTime')
	let id = document.getElementById("diveData").firstElementChild.textContent;
	let totalTime = id.diveEnd - id.diveStart;
		console.log(totalTime);
	}

function deleteDive(id) {
	console.log('In delete');

	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/divinglogs/' + id);
	console.log('Id is: ')
	console.log(id)

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204 || 200) {
				alert("The record has been deleted.");
			} else if (xhr.status === 404) {
				displayError("ERROR: Event not found.");
			}
		}
	}

	xhr.send();
}


