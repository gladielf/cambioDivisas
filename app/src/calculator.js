/*! calculator v0.0.0 - MIT license */
'use strict';

//define(function() {
        var calculator = ( function() {
            function addition(oper1, oper2){
                return parseFloat(oper1 + oper2).toFixed(2);
            }

            function subtraction(oper1, oper2){
                return parseFloat(oper1 - oper2).toFixed(2);
            }

            function multiplication(oper1, oper2){
                return parseFloat(oper1 * oper2).toFixed(2);
            }

            function division(oper1, oper2){
                return parseFloat(oper1 / oper2).toFixed(2);
            }

            return {
                add: function (n1, n2){
                    return addition(n1,n2);
                },
                sub: function (n1, n2){
                    return subtraction(n1,n2);
                },
                mult: function (n1, n2){
                    return multiplication(n1,n2);
                },
                div: function (n1, n2){
                    return division(n1,n2);
                }
            };
        })();
    //return calculator;
//});
/*var calculator = function () {
  // your code goes here
}*/

if ( typeof module !== "undefined" ) {
  module.exports = calculator;
}