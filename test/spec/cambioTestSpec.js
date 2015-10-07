define(["cambio","constants"], function ( cambioDivisas, constants){
    describe("Cambio.testSpec", function(){

        //EURO TO PESETAS
        it("Spy Cambio de divisa",function(){

            spyOn(cambioDivisas,"change");
            cambioDivisas.change();
            expect(cambioDivisas.change).toHaveBeenCalled();
        });
        
        it("532.32 Euro a Ptas",function(){
            expect(cambioDivisas.change(532.32,constants.EUROS_TO_PTAS)).toBe('88570.60');
        });


        //PESETAS TO EURO
        it("4332 Ptas a Euro",function(){
            expect(cambioDivisas.change(4332,constants.PTAS_TO_EUROS)).toBe('26.04');
        });

        //USD TO EURO
        it("363 Usd a Euro",function(){
            expect(cambioDivisas.change(363,constants.USD_TO_EUROS)).toBe('325.03');
        });

        //EURO TO USD
        it("839 Euro a Usd",function(){
            expect(cambioDivisas.change(839,constants.EUROS_TO_USD)).toBe('937.01');
        });

        //GBP TO EURO
        it("363 Gbp a Euro",function(){
            expect(cambioDivisas.change(363,constants.GBP_TO_EUROS)).toBe('489.54');
        });

        //EURO TO GBP
        it("839 Euro a Gbp",function(){
            expect(cambioDivisas.change(839,constants.EUROS_TO_GBP)).toBe('621.98');
        });
    });
});