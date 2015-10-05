function cambioDivisas(obj){
	this.cambio = obj.cambio;
	this.cambioDiv = function(){
		return this.cambio.multiplicacion();
	};
}