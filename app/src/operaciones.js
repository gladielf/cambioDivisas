define(function() {
        var operaciones = ( function() {
            function suma(oper1, oper2){
                return parseFloat(oper1 + oper2).toFixed(2);
            }

            function resta(oper1, oper2){
                return parseFloat(oper1 - oper2).toFixed(2);
            }

            function multiplicacion(oper1, oper2){
                return parseFloat(oper1 * oper2).toFixed(2);
            }

            function division(oper1, oper2){
                return parseFloat(oper1 / oper2).toFixed(2);
            }

            return {
                add: function (n1, n2){
                    return suma(n1,n2);
                },
                sub: function (n1, n2){
                    return resta(n1,n2);
                },
                mult: function (n1, n2){
                    return multiplicacion(n1,n2);
                },
                div: function (n1, n2){
                    return division(n1,n2);
                }
            };
        })();
    return operaciones;
});