function changer (id, newValue) {
		 var element = document.getElementById(id);
		 element.innerHTML = newValue;
	   }
	   function adder (sumtag, restag) {
		 var operation = document.getElementById(sumtag);
		 var operands = operation.innerHTML.split ("+");
		 var result = parseInt(operands[0]) + parseInt(operands[1]);
		 changer (restag, '=' + result);
	   }
