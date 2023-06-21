const powerArrayValues = (myArray, pow) => {
    let newArray = myArray.map(x => Math.pow(x, pow));
    return newArray;
}

const capitaliseNames = (namesArray) => {
    let newArray = namesArray.map(
        (n) => {
            let lowerName = n.toLowerCase();
            let nameFinal = lowerName[0].toUpperCase() + lowerName.slice(1);
            return nameFinal;
        } 
    )
    return newArray
}

const wrapP = (stringsArr) => {
    let newArray = stringsArr.map(
        (s) => {
            return `<p>${s}</p>`
        }
    )
    return newArray;
}

console.log(powerArrayValues([1, 2, 3], 2));
console.log(capitaliseNames(['nOah', 'john', 'janE']));
console.log(wrapP(['s1', 's2', 's3']));