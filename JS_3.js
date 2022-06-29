// // 1) Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for(i=1; i<11; i++){
    console.log(2**i)
}
// // Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
x = function(a){
    for(i=1; i<=a; i++){
        console.log(2**i)
    }
}
x(10)
// // 2) Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
let result = ""
let smile = ";)"
let result = ""
for(i=0; i<6; i++){
    console.log(resut +=smile)
}
// or
let smile =";)"
for(i=0; i<6; i++){
    console.log(smile.reapet(i))
}
// Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик),
// а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)
y =function (str, numberOfRows){
    for(i=0; i<=numberOfRows; i++){
        console.log(str.repeat(i))
}}
y(":(",2)
// 3) Написать функцию, которая принимает на вход слово. 
//Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
getWordStructure =function(word){
    vowels = "aeiouy".split('')
    consonants = "bcdfhjklmnpqrsttvwxz".split("")
    let vowelsCount = 0
    let consonantsCount = 0
    for (char of word.toLowerCase){
        if(vowels.includes(char)) vowelsCount++
        else if (consonants.includes(char)) consonantsCount++
    }
    console.log(`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}
getWordStructure("frft")