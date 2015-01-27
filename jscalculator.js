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

function aleatorio(tag1,tag2){
	
	//sacar dos números aleatorios y meterlos en op (N1+N2)
	
	var num1 = Math.round(Math.random()*10000)
	var num2 = Math.round(Math.random()*10000)
	
	var str = num1.toString() + '+' + num2.toString()
	
	changer(tag1, str);
	changer(tag2, '');
}
