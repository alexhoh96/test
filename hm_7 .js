//1. Функция, принимающую на вход возраст.
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
   const age_1 = 10
   const age_2 = 18
   const age_3 = 60 
    const checkAge = function(age){
        if(age < age_2){
            console.log("You don't have access cause your age is" + " "+ age + " " + "It’s less then" + " " + age_2)
        }
        else if(age >= age_2 && age < age_3){
            console.log("Welcome !")
        }
        else if((age > age_3)){
            console.log ("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    }
    checkAge(17)
    checkAge(18)
    checkAge(61)
    // Преобразовать задание 1 таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
    const age_1 = 10
    const age_2 = 18
    const age_3 = 60 
    const checkAge = function(age){
    if( age && !isNaN(age)){
        if(age < age_2){
            console.log("You don't have access cause your age is" + " "+ age + " " + "It’s less then" + " " + age_2)
        }
        else if(age >= age_2 && age < age_3){
            console.log("Welcome !")
        }
        else if((age > age_3)){
            console.log ("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else{
        console.log("error")
    }
    }
    checkAge("d")
    checkAge(12)
    checkAge("12")
    checkAge("0")
    checkAge("")
    //Преобразовать задание предыдущий код таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке + 1.html
    const age_1 = 10
    const age_2 = 18
    const age_3 = 60 
    const checkAge = function(age){
    if( age && !isNaN(age)){
        if(age < age_2){
            console.log("You don't have access cause your age is" + " "+ age + " " + "It’s less then" + " " + age_2)
        }
        else if(age >= age_2 && age < age_3){
            console.log("Welcome !")
        }
        else if((age > age_3)){
            console.log ("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else{
        console.log("error")
    }
    }
let a = prompt("Enter your age")
checkAge(a)