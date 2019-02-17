const firstPart = [
    "go",
    "ma",
    "sal",
    "bri",
    "lu",
    "fa",
    "si",
];

const secondPart = [
    "li",
    "me",
    "re",
    "ance",
    "dine",
    "ri",
    "vic",
    "go",
    "tar",
];

function generateRandomNumber(max) {
    let r = Math.random();
    return (Math.floor((r * max ) + 0.999999999) );
}


module.exports = {
    generateRandomName: function(){
        let part1 = firstPart[generateRandomNumber(firstPart.length - 1 )];
        let part2 = secondPart[generateRandomNumber(secondPart.length - 1 )];
        return part1 + part2;
    }
};




