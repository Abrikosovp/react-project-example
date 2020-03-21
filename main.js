let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        prompt("-----", typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50);

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    };
}

chooseExpenses();



function detectDayBudget() {
    appData.maneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.maneyPerDay);
}
detectDayBudget();


// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }
//     i++;
// }




// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

//         console.log("done");

//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }
//     i++;
// }
// while (i < 2);

function detectLevel() {
    if (appData.maneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.maneyPerDay > 100 && appData.maneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.maneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        alert("ДPPPPPPP: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();