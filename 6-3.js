// Задание 6.3
// Запросите у пользователя любое число. На основании ответа создайте массив и заполните его числами от нуля до введённого числа. 
// Не забудьте привести полученное от пользователя значение к типу number.


let numbA = +prompt('Введи число от 0 до 5');

let arr = [];

for (let i = 0; i <= numbA; i++) {
        arr.push(i);
}
console.log(arr);