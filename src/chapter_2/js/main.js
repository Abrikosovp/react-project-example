'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

expensesBtn.setAttribute('disabled', "disabled");
optionalExpensesBtn.setAttribute('disabled', "disabled");
countBtn.setAttribute('disabled', "disabled");
// expensesBtn.disabled = true;
// optionalExpensesBtn.disabled = true;
// countBtn.disabled = true;


let money, time;

startBtn.addEventListener('click', function () {

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

    expensesBtn.removeAttribute('disabled',);
    optionalExpensesBtn.removeAttribute('disabled');
    countBtn.removeAttribute('disabled');
    // expensesBtn.disabled = false;
    // optionalExpensesBtn.disabled = false;
    // countBtn.disabled = false;

});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("bad result");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i <= optionalExpensesItem.length - 1; i++) {
        console.log(i);
        console.log(optionalExpensesItem[i].value);
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBtn.addEventListener('click', function () {

    let err = "Произошла ошибка";

    if (appData.budget != undefined) {
        appData.maneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.maneyPerDay;

        if (appData.maneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.maneyPerDay > 100 && appData.maneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.maneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = err;
        }
    } else {
        budgetValue.textContent = err;
    }
});

// incomeItem.addEventListener('change', function () {
incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
    console.log(appData.savings);
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

function calculateAmount() {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
}

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        calculateAmount();
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        calculateAmount();
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
