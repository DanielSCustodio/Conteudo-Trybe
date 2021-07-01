document.getElementById('container').style.background = "#f3f3f3f";
document.getElementById('header-container').style.background = "#00b069";

let emergencyTasks = document.getElementsByClassName('emergency-tasks');
for (let index = 0; index < emergencyTasks.length; index += 1) {
	emergencyTasks[index].style.background = "#FF9F84";
}

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
	noEmergencyTasks[index].style.background = "#F9DB5E";
}

let emergency = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergency.length; i += 1) {
	emergency[i].style.background = "#A52FF3"
}

let noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergency.length; i += 1) {
	noEmergency[i].style.background = "#232525";
}
