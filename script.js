//Загаданное число должно храниться «в замыкании»
function numInMind() {
    let num = 20;

    return function(){
        return num;
    };
}

let displayNum = numInMind(); // displayNum();

// Программа должна быть выполнена с помощью рекурсии, без единого цикла.
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function f1(num){
    let ask = prompt("Угадай число от 1 до 100");

    if (ask === null){
        alert("Игра окончена");
    } else if (ask > num ) {
        alert("Загаданное число меньше");
        f1(num);
    } else if (ask < num){
        alert("Загаданное число больше");
        f1(num);
    } else if (ask == num) {
        alert("Поздравляю, Вы угадали!!!");
    } else if (ask !== isNumber(num)){
        alert("Введи число!");
        f1(num);
    }
}

f1(displayNum());