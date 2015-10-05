describe("Operaciones.testSpec", function(){
	it ("suma 1+1", function(){
		var oper= new operaciones(1,1);
		expect(oper.suma()).toBe('2.00');
	});
	it ("suma 4+7", function(){
		var oper= new operaciones(4,7);
		expect(oper.suma()).toBe('11.00');
	});

	it ("resta 1-1", function(){
		var oper= new operaciones(1,1);
		expect(oper.resta()).toBe('0.00');
	});
	it ("resta 7-4", function(){
		var oper= new operaciones(7,4);
		expect(oper.resta()).toBe('3.00');
	});

	it ("multiplicacion 1*1", function(){
		var oper= new operaciones(1,1);
		expect(oper.multiplicacion()).toBe('1.00');
	});
	it ("multiplicacion 7*4", function(){
		var oper= new operaciones(7,4);
		expect(oper.multiplicacion()).toBe('28.00');
	});

	it ("division 1/1", function(){
		var oper= new operaciones(1,1);
		expect(oper.division()).toBe('1.00');
	});
	it ("division 12/3", function(){
		var oper= new operaciones(12,3);
		expect(oper.division()).toBe('4.00');
	});
});

describe("Cambio-de-divisa.testSpec", function(){

	//EURO TO PESETAS
	it("Spy Cambio de divisa",function(){
		var obj={	};
		var change= new cambioDivisas(obj);

		spyOn(change,"cambioDiv");
		change.cambioDiv();
		expect(change.cambioDiv).toHaveBeenCalled();
	});
	
	it("532.32 Euro a Ptas",function(){
		var params={
			num:532.32,
			constant: constants.EUROS_TO_PTAS
		};
		var obj={
			cambio: new operaciones(params.num,params.constant)
		};
		var change= new cambioDivisas(obj);
		expect(change.cambioDiv()).toBe('88570.60');
	});


	//PESETAS TO EURO
	it("4332 Ptas a Euro",function(){
		var params={
			num:4332,
			constant: constants.PTAS_TO_EUROS
		};
		var obj={
			cambio: new operaciones(params.num,params.constant)
		};
		var change= new cambioDivisas(obj);
		expect(change.cambioDiv()).toBe('26.04');
	});

	//USD TO EURO
	it("363 Usd a Euro",function(){
		var params={
			num:363,
			constant: constants.USD_TO_EUROS
		};
		var obj={
			cambio: new operaciones(params.num,params.constant)
		};
		var change= new cambioDivisas(obj);
		expect(change.cambioDiv()).toBe('325.03');
	});

	//EURO TO USD
	it("839 Euro a Usd",function(){
		var params={
			num:839,
			constant: constants.EUROS_TO_USD
		};
		var obj={
			cambio: new operaciones(params.num,params.constant)
		};
		var change= new cambioDivisas(obj);
		expect(change.cambioDiv()).toBe('937.01');
	});

	//GBP TO EURO
	it("363 Gbp a Euro",function(){
		var params={
			num:363,
			constant: constants.GBP_TO_EUROS
		};
		var obj={
			cambio: new operaciones(params.num,params.constant)
		};
		var change= new cambioDivisas(obj);
		expect(change.cambioDiv()).toBe('489.54');
	});

	//EURO TO GBP
	it("839 Euro a Gbp",function(){
		var params={
			num:839,
			constant: constants.EUROS_TO_GBP
		};
		var obj={
			cambio: new operaciones(params.num,params.constant)
		};
		var change= new cambioDivisas(obj);
		expect(change.cambioDiv()).toBe('621.98');
	});
});