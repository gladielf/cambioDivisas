function operaciones(n1,n2){
	'use strict';
	this.suma = function(){
		return (n1 + n2).toFixed(2);
	};

	this.resta = function(){
		return (n1 - n2).toFixed(2);
	};

	this.multiplicacion = function(){
		return (n1 * n2).toFixed(2);
	};

	this.division = function(){
		return (n1 / n2).toFixed(2);
	};
}
/*function operaciones(n1,n2){
	'use strict';
	this.n1 = n1;
	this.n2 = n2;
	this.suma = function(){
		return (this.n1 + this.n2).toFixed(2);
	};

	this.resta = function(){
		return (this.n1 - this.n2).toFixed(2);
	};

	this.multiplicacion = function(){
		return (this.n1 * this.n2).toFixed(2);
	};

	this.division = function(){
		return (this.n1 / this.n2).toFixed(2);
	};
};*/