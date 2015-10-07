define(function() {

        var operaciones = ( function() {
            var result = 0;
            function _suma(oper1, oper2){
                return parseFloat(oper1 + oper2).toFixed(2);
            }

            function _resta(oper1, oper2){
                return parseFloat(oper1 - oper2).toFixed(2);
            }

            function _multiplicacion(oper1, oper2){
                return parseFloat(oper1 * oper2).toFixed(2);
            }

            function _division(oper1, oper2){
                return parseFloat(oper1 / oper2).toFixed(2);
            }

            return {
                add: function (n1, n2){
                    return _suma(n1,n2);
                },
                sub: function (n1, n2){
                    return _resta(n1,n2);
                },
                mult: function (n1, n2){
                    return _multiplicacion(n1,n2);
                },
                div: function (n1, n2){
                    return _division(n1,n2);
                }
            };
        })();
    return operaciones;
});