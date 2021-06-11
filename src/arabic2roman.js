let romanNumerals = {0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M"};

 let boundaries = Object.keys(romanNumerals).map((n)=>parseInt(n)).sort((a,b)=>a-b);

function arabic2roman(arabic) {
    let foundNum;
    let foundIndex;
    let result = "";
    for(i=0; i<boundaries.length; i++) {
        if(arabic == boundaries[i]) return romanNumerals[boundaries[i]];
        if(arabic < boundaries[i]) {
            foundIndex = i;
            foundNum = boundaries[i-1];
            break;
        }
    }
    result += romanNumerals[foundNum];
    return result + "I";
}

module.exports = {arabic2roman};