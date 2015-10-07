define(["operaciones"], function(operaciones) {
    var cambioDivisas = (function () {

        function cambioDiv (oriValue, constantDest) {
            return operaciones.mult(oriValue, constantDest);
        }

        return{
            change: function (oriValue, constantDest) {
               return cambioDiv(oriValue, constantDest);
            }
        };
    })();

    return cambioDivisas;
});