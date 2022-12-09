//Загаданное число должно храниться «в замыкании»
function numInMind() {
    let num = Math.floor((Math.random() * 100) + 1);

    return function(){
        return num;
    };
}

let displayNum = numInMind(); // displayNum();

function steps() {
    let num = 10;
    return function(){
        return num;
    };
}

let lessSteps = steps();

// Программа должна быть выполнена с помощью рекурсии, без единого цикла.
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function f1(num, q){
    if (q > 0) {
        let ask = prompt("Угадай число от 1 до 100");
        q--;
        if (ask === null){
            alert("Игра окончена");
        } else if (+ask > num ) {
            alert("Загаданное число меньше, осталось попыток " + q);
            f1(num, q);
        } else if (+ask < num){
            alert("Загаданное число больше, осталось попыток " + q);
            f1(num, q);
        } else if (+ask === num) {
            let answer = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            if (answer) {
                let num = Math.floor((Math.random() * 100) + 1);
                return f1(num, 10);
            }
        } else if (ask !== isNumber(num)){
            alert("Введи число!");
            f1(num, q);
        }
    }
    if (q === 0) {
        let answer = confirm("Попытки закончились, хотите сыграть еще?");
        if (answer){
           let num = Math.floor((Math.random() * 100) + 1);
           return f1(num, 10);
        }
    }
}

f1(displayNum(), lessSteps());