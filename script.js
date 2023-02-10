'use strict';

// let money = + prompt("write down necessary point of expenses this month")
// let time = prompt("How match will it cost?");

// let expenses = {
//     money,
//     time
// }

// let appData = {
//     money,
//     time,
//     expenses,
//     optionalExpenses: 0,
//     incom: [],
//     savings: false
// }

// console.log(money);
// console.log(typeof(money))
// console.log(time);
// console.log(expenses);
// console.log(appData);

// let dayBuget = money/30;

// alert('One day buget is: ' + dayBuget);


let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);