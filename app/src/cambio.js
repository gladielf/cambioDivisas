'use strict';
var path = require('path');

var calculator = require(path.join(__dirname, '.', './calculator.js'));

var cambio = (function () {

    function cambioDiv (oriValue, constantDest) {
        return calculator.mult(oriValue, constantDest);
    }

    return{
        change: function (oriValue, constantDest) {
           return cambioDiv(oriValue, constantDest);
        }
    };
})();

//if ( typeof module !== "undefined" ) {
    module.exports = cambio;
//}