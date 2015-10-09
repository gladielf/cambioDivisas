'use strict';
var path = require('path');

var calculator = require(path.join(__dirname, '.', './calculator.js'));
//define(["operaciones"], function(operaciones) {
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

//    return cambio;
//});

if ( typeof module !== "undefined" ) {
  module.exports = cambio;
}