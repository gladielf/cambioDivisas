var path = require('path');
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var calculator = require(path.join(__dirname, '..', 'app/src/calculator.js'));
var cambio = require(path.join(__dirname, '..', 'app/src/cambio.js' ));
var constants = require(path.join(__dirname, '..', 'app/src/constants.js' ));

describe('calculator()', function () {
  'use strict';
  
  it('exists', function () {
    expect(calculator).to.be.a('object');

  });

  it ("suma 1+12", function(){
    expect(calculator.add(1,1)).to.equal('2.00');
  });
  
  it ("suma 4+7", function(){
    expect(calculator.add(4,7)).to.equal('11.00');
  });

  it ("resta 1-1", function(){
    expect(calculator.sub(1,1)).to.equal('0.00');
  });
  it ("resta 7-4", function(){
    expect(calculator.sub(7,4)).to.equal('3.00');
  });

  it ("multiplicacion 1*1", function(){
    expect(calculator.mult(1,1)).to.equal('1.00');
  });
  it ("multiplicacion 7*4", function(){
    expect(calculator.mult(7,4)).to.equal('28.00');
  });

  it ("division 1/1", function(){
    expect(calculator.div(1,1)).to.equal('1.00');
  });
  it ("division 12/3", function(){
    expect(calculator.div(12,3)).to.equal('4.00');
  });
});

//define(["cambio","constants"], function ( cambioDivisas, constants){
    describe("Cambio.testSpec", function(){

        it("Spy Cambio de divisa",function(){
            var cb = sinon.spy();
            
            cb(cambio.change(1,constants.EUROS_TO_PTAS));
            expect(cb).to.have.been.called;
        });


        //EURO TO PESETAS
        it("532.32 Euro a Ptas",function(){
            expect(cambio.change(532.32,constants.EUROS_TO_PTAS)).to.equal('88570.60');
        });


        //PESETAS TO EURO
        it("4332 Ptas a Euro",function(){
            expect(cambio.change(4332,constants.PTAS_TO_EUROS)).to.equal('26.04');
        });

        //USD TO EURO
        it("363 Usd a Euro",function(){
            expect(cambio.change(363,constants.USD_TO_EUROS)).to.equal('325.03');
        });

        //EURO TO USD
        it("839 Euro a Usd",function(){
            expect(cambio.change(839,constants.EUROS_TO_USD)).to.equal('937.01');
        });

        //GBP TO EURO
        it("363 Gbp a Euro",function(){
            expect(cambio.change(363,constants.GBP_TO_EUROS)).to.equal('489.54');
        });

        //EURO TO GBP
        it("839 Euro a Gbp",function(){
            expect(cambio.change(839,constants.EUROS_TO_GBP)).to.equal('621.98');
        });
    });
//});