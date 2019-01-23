{
    const firstPart = [
      "go",
      "ma",
      "sal",
      "bri",
      "lu",
      "fa"
    ];

    const secondPart = [
        "li",
        "me",
        "re",
        "ance",
        "dine",
    ];

    function generateRandomNumber(max){
        let r = Math.random();
        return (Math.floor(r * (max + 0.99999) ))  ;
    }


    function generateName(){
        let part1 = firstPart[ generateRandomNumber(firstPart.length )];
        let part2 = secondPart[ generateRandomNumber(secondPart.length)];
        return part1 + part2;
    }
}
