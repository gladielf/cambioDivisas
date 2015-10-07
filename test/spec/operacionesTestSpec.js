define(["operaciones"], function (operaciones){
	
	describe("Operaciones.testSpec", function(){
		it ("suma 1+1", function(){
			expect(operaciones.add(1,1)).toBe('2.00');
		});
		it ("suma 4+7", function(){
			expect(operaciones.add(4,7)).toBe('11.00');
		});

		it ("resta 1-1", function(){
			expect(operaciones.sub(1,1)).toBe('0.00');
		});
		it ("resta 7-4", function(){
			expect(operaciones.sub(7,4)).toBe('3.00');
		});

		it ("multiplicacion 1*1", function(){
			expect(operaciones.mult(1,1)).toBe('1.00');
		});
		it ("multiplicacion 7*4", function(){
			expect(operaciones.mult(7,4)).toBe('28.00');
		});

		it ("division 1/1", function(){
			expect(operaciones.div(1,1)).toBe('1.00');
		});
		it ("division 12/3", function(){
			expect(operaciones.div(12,3)).toBe('4.00');
		});
	});
});