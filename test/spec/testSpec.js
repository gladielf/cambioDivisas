/*(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(true).toBe(true);
      });
    });
  });
})();
*/

describe("Operaciones", function(){
	it ("suma 1+1", function(){
		expect(suma(1,1)).toBe('2.00');
	});
	it ("suma 4+7", function(){
		expect(suma(4,7)).toBe('11.00');
	});

	it ("resta 1-1", function(){
		expect(resta(1,1)).toBe('0.00');
	});
	it ("resta 7-4", function(){
		expect(resta(7,4)).toBe('3.00');
	});

	it ("multiplicacion 1-1", function(){
		expect(multiplicacion(1,1)).toBe('1.00');
	});
	it ("multiplicacion 7-4", function(){
		expect(multiplicacion(7,4)).toBe('28.00');
	});

	it ("division 1-1", function(){
		expect(division(1,1)).toBe('1.00');
	});
	it ("division 7-4", function(){
		expect(division(12,4)).toBe('3.00');
	});
});

describe("Cambio de divisa", function(){
	it("1 Euro a Ptas",function(){
		expect(euroToPtas(1)).toBe('166.39');
	});
	it("1643 Euro a Ptas",function(){
		expect(euroToPtas(1643)).toBe('273372.20');
	});
	it("532.32 Euro a Ptas",function(){
		expect(euroToPtas(532.32)).toBe('88570.60');
	});

	it("100 Ptas a Euro",function(){
		expect(ptasToEuro(100)).toBe('0.60');
	});
	it("1000 Ptas a Euro",function(){
		expect(ptasToEuro(1000)).toBe('6.01');
	});
	it("4332 Ptas a Euro",function(){
		expect(ptasToEuro(4332)).toBe('26.04');
	});
});