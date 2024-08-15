const input = 'heavy metal rules'
const vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = []
const resultString = resultArray

for (let i = 0; i < input.length; i++) {
    const phrase = input[i];
    if(phrase === 'e')
    resultArray.push(input[i])

    if(phrase === 'u')
    resultArray.push(input[i])
    
    for (let j = 0; j < vowels.length; j++) {
        const whaleTalk = vowels[j];
            if(phrase === whaleTalk)
            resultArray.push(whaleTalk)       
    }
}
console.log(resultString.join('').toUpperCase());
