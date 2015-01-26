function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function sumador (sumtag, restag) {
	var arraysumandos = document.getElementById(sumtag);
	var sumandos = arraysumandos.innerHTML.split ("+",2);
	var res = parseInt(sumandos[0]) + parseInt(sumandos[1]);
	changer (restag, '=' + res);
}
