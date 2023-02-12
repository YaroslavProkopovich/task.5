/*1 Написать функцию, которая принимает два параметра и складывает их.

Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться cообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.*/
function sum(a, b) {
    if (a == undefined || b == undefined) {
        console.log('введите два параметра')
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('введенные данные не являются числами')
    } else {
        console.log(a + b)
    }
}

sum(2, 4); // 6

sum('d', 4); // введенные данные не являются числами

sum(1, [2]); // введенные данные не являются числами

sum(1); // введите два параметра

sum(); // введите два параметра

/*2 Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
"Функция "square" не может быть вызвана без аргумента" */


function square(a) {
    if (a == undefined) {
        console.log('Функция "square" не может быть вызвана без аргумента')
    } else {
        console.log(a * a)
    }
}

square(10) // 100

square()
    // ДО: NaN
    // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента


/*3 Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
Написать функцию в стрелочном синтаксисе. */

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let guessNumber = (a) => {
    let random = getRandomInteger(1, 10)
    if (a < 0 || a >= 10) {
        console.log('Введите правильное число')
    } else {
        if (a == random) {
            console.log('Вы выиграли')
        } else {
            console.log(`Вы не угадали, ваше число - ${a}, a выпало число ${random}`)
        }
    }
}
guessNumber(15)
guessNumber(7)

/* 4 Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8] */

let arr = [5, 4, 3, 8, 0];

function filterFor(arr, a) {
    let newArr = []
    for (let number of arr) {
        if (number >= a) {
            newArr.push(number)
        }
    }
    console.log(newArr)
}

filterFor(arr, 5);
filterFor(arr, 10);
filterFor(arr, 3.11);

/*5 Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива. */
let array1 = ['yaroslav', 'prokopovich', 'Minsk'];
array1Copy = [];

array1.forEach((item => array1Copy.push(item)))
console.log(array1Copy)

/*6 Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
Проверить работу функции можно на объекте:  */

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}

const sumObjectValues = (obj) => {
    let sum = 0
    for (let property in obj) {
        if (typeof obj[property] == 'number') {
            sum = sum + obj[property]
        }
    }
    return sum
}

console.log(sumObjectValues(objectWithNumbers));
