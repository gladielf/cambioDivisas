//define(function() {
    var constants = (function () {
       
        return constants = {
            EUROS_TO_PTAS: 166.3860,
            PTAS_TO_EUROS: 0.00601012,

            USD_TO_EUROS: 0.895400,
            EUROS_TO_USD: 1.11682,

            GBP_TO_EUROS: 1.34860,
            EUROS_TO_GBP: 0.74133
        };
        //return cambio;
    })();

//    return constants;
//});

if ( typeof module !== "undefined" ) {
  module.exports = constants;
}