console.log('script loaded');

window.addEventListener('load', function(evt) {
	console.log('Page loaded')
	init();
});

function init() {
	loadDivingLogs();
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
				displayError('Films not found')
			}
			else {
				displayError("Error retrieving films")
			}
		}
	};
	xhr.send();
}

function displayDivingLogs() {
	//DOM
	//let div = document.getElementById('');
	//div.textContent = '';

}