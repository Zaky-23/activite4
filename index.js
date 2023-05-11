
let xhr = new XMLHttpRequest();
let fileContent = new String();
xhr.open('GET', 'resumes\\resume_1.html', false);
xhr.onreadystatechange = function () {
	if(xhr.readyState == 4 && xhr.status == 200) {
		fileContent = xhr.responseText;
	}
}
xhr.send();
document.getElementById('resume1').innerHTML = fileContent;