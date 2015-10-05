var flagDot=0;
var flagOper=0;
var sig;

function clearScreen(){
	document.getElementById("screen").value="";
	flagDot=0;
	flagOper=0;
}

function bckspScreen(){
	var screenValue;
	var screenExit="";
	screenValue=document.getElementById("screen").value;
	for (var i = 0; i < screenValue.length-1; i++) {
		screenExit=screenExit+screenValue.charAt(i);
		
	}
	if (screenValue.charAt(screenValue.length-1)=='.') {
		flagDot=0;
	}
	
	if (screenValue.charAt(screenValue.length-1)=='+' || screenValue.charAt(screenValue.length-1)=='-' || screenValue.charAt(screenValue.length-1)=='*' || screenValue.charAt(screenValue.length-1)=='/' ) {
		flagOper=0;
		flagDot=checkDot(screenExit);
		

	}
	document.getElementById("screen").value=screenExit;
}

function checkDot (screenExit) {
	for (var i = 0; i < screenExit.length; i++) {
			if (screenExit.charAt(i)=='.') {
				return true;
			}
		}
	return false;
}

function insertNum (x) {
	var screenValue;
	screenValue=document.getElementById("screen").value;
	if (x==10 && flagDot===0) {
		document.getElementById("screen").value=screenValue+".";
		flagDot=1;
	}
	else if(x!=10){
		document.getElementById("screen").value=screenValue+x;
		
	}
}

function insertOper(x) {
	var screenValue;
	screenValue=document.getElementById("screen").value;
	if(flagOper===0){
		switch(x){
			case 0:
				//SUMA
				document.getElementById("screen").value=screenValue+"+";
				flagDot=0;
				flagOper=1;
				sig=0;
				break;
			case 1:
				//RESTA
				document.getElementById("screen").value=screenValue+"-";
				flagDot=0;
				flagOper=1;
				sig=1;
				break;
			case 2:
				//MULTIPLICACION
				document.getElementById("screen").value=screenValue+"*";
				flagDot=0;
				flagOper=1;
				sig=2;
				break;
			case 3:
				//DIVISION
				document.getElementById("screen").value=screenValue+"/";
				flagDot=0;
				flagOper=1;
				sig=3;
				break;
		}
	}
}

function calcRes() {
	var num;
	var oper1;
	var oper2;

	var screenValue;
	screenValue=document.getElementById("screen").value;
	flagDot=0;
	flagOper=0;
	switch(sig){
		case 0:
			//SUMA
			num=screenValue.split('+');
			oper1=num[0];
			oper2=num[1];
			if(oper1!=="" && oper2!==""){
				document.getElementById("screen").value=parseFloat(parseFloat(oper1)+parseFloat(oper2)); 
			}
			else{
				alert("NO se puede hacer una operacion con un solo operador");
			}
			break; 
		case 1:
			//RESTA
			num=screenValue.split('-');
			oper1=num[0];
			oper2=num[1];
			if(oper1!=="" && oper2!==""){
				document.getElementById("screen").value=parseFloat(parseFloat(oper1)-parseFloat(oper2)); 
				}
			else{
				alert("NO se puede hacer una operacion con un solo operador");
			}
			break;
		case 2:
			//MULTIPLICACION
			num=screenValue.split('*');
			oper1=num[0];
			oper2=num[1];
			if(oper1!=="" && oper2!==""){
				document.getElementById("screen").value=parseFloat(parseFloat(oper1)*parseFloat(oper2)); 
				}
			else{
				alert("NO se puede hacer una operacion con un solo operador");
			}
			break;
		case 3:
			//DIVISION
			num=screenValue.split('/');
			oper1=num[0];
			oper2=num[1];
			if(oper1!=="" && oper2!==""){
				document.getElementById("screen").value=parseFloat(parseFloat(oper1)/parseFloat(oper2)); 
				}
			else{
				alert("NO se puede hacer una operacion con un solo operador");
			}
			break;
	}

}