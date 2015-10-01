function cambioDivisas(obj){
	this.num=obj.num;
	this.constant= obj.constant;
	this.cambio= obj.cambio;
	this.cambioDiv = function(){
		return this.cambio.multiplicacion();
	};
};