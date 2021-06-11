let romanNumerals = {0: "", 1: "I", 5: "V", 
 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};

//  let romanNumerals = {0: "", 1: "I", 4: "IV", 5: "V", 9: "IX",
//  10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"};

 let boundaries = Object.keys(romanNumerals).map((n)=>parseInt(n)).sort((a,b)=>b-a);

function arabic2roman(arabic) {
    let base = getBase(arabic);
    if(base.arabic == arabic) return base.roman;
    let baseArabic = (arabic >= 4*base.arabic)?4*base.arabic:base.arabic;
    let baseRoman = (arabic >= 4*base.arabic)?base.roman + base.nextRoman:base.roman;
    return baseRoman + arabic2roman(arabic - baseArabic);//bazni broj + ostatak
}

function getBase(arabic) {
    let lowerOrEqualNumber = boundaries.find((val)=>(val <= arabic));
    let index = boundaries.indexOf(lowerOrEqualNumber);
    return {
        arabic: lowerOrEqualNumber,
        roman: romanNumerals[lowerOrEqualNumber],
        nextRoman: romanNumerals[boundaries[index - 1]]
    };
}

module.exports = {arabic2roman};