function operaciones(n1,n2){
    this.suma = function(){
        return parseFloat(n1 + n2).toFixed(2);
    };

    this.resta = function(){
        return parseFloat(n1 - n2).toFixed(2);
    };

    this.multiplicacion = function(){
        return parseFloat(n1 * n2).toFixed(2);
    };

    this.division = function(){
        return parseFloat(n1 / n2).toFixed(2);
    };
}