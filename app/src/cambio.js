define(["operaciones"], function(operaciones) {
    var cambioDivisas = (function () {

        function _cambioDiv (oriValue, constantDest) {
            return operaciones.mult(oriValue, constantDest);
        }

        return{
            change: function (oriValue, constantDest) {
               return _cambioDiv(oriValue, constantDest);
            }
        };
    })();

    return cambioDivisas;
});