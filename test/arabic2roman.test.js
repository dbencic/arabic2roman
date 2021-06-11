var chai = require("chai");
var expect = chai.expect;
let {arabic2roman} = require ("../src/arabic2roman");
// const { trigramGenerator, generateChunks, whitespaceHandler } = require("../src/trigramGenerator");


describe('arabic 2 roman', function () {

    it('arabic2roman should be a function', function () {
        expect(arabic2roman).to.be.a('function');
    });

    it("Should return I for 1", function() {
        expect(arabic2roman(1)).to.equal("I");
    });

    it("Should return II for 2", function() {
        expect(arabic2roman(2)).to.equal("II");
    });

    it("Should return III for 3", function() {
        expect(arabic2roman(3)).to.equal("III");
    });

    it("Should return IV for 4", function() {
        expect(arabic2roman(4)).to.equal("IV");
    });

    it("Should return V for 5", function() {
        expect(arabic2roman(5)).to.equal("V");
    });

    it("Should return VI for 6", function() {
        expect(arabic2roman(6)).to.equal("VI");
    });

    it("Should return X for 10", function() {
        expect(arabic2roman(10)).to.equal("X");
    });

    it("Should return L for 50", function() {
        expect(arabic2roman(50)).to.equal("L");
    });

    it("Should return C for 100", function() {
        expect(arabic2roman(100)).to.equal("C");
    });

    it("Should return D for 500", function() {
        expect(arabic2roman(500)).to.equal("D");
    });

    it("Should return M for 1000", function() {
        expect(arabic2roman(1000)).to.equal("M");
    });

    // it("Should return MMM for 3000", function() {
    //     expect(arabic2roman(3000)).to.equal("MMM");
    // });

    // it("Should return XIII for 13", function() {
    //     expect(arabic2roman(13)).to.equal("XIII");
    // });

    // it("Should return XXXII for 32", function() {
    //     expect(arabic2roman(32)).to.equal("XXXII");
    // });

    // it("Should return IX for 9", function() {
    //     expect(arabic2roman(9)).to.equal("IX");
    // });

    // it("Should return XIV for 14", function() {
    //     expect(arabic2roman(14)).to.equal("XIV");
    // });

    // it("Should return XIX for 19", function() {
    //     expect(arabic2roman(19)).to.equal("XIX");
    // });

    // it("Should return XXIV for 24", function() {
    //     expect(arabic2roman(24)).to.equal("XXIV");
    // });

    // it("Should return XL for 40", function() {
    //     expect(arabic2roman(40)).to.equal("XL");
    // });

});


