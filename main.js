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
    savings: true,
    chooseExpenses: function() {
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
        }
    },

    detectDayBudget: function() {
        appData.maneyPerDay = (appData.budget / 30).toFixed();

        alert("Ежедневный бюджет: " + appData.maneyPerDay);
    },

    detectLevel: function() {
        if (appData.maneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.maneyPerDay > 100 && appData.maneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.maneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },

    chooseIncome: function() {
         let items = prompt("Что принесет дополнительный доход ? (указать через запятую)", "");
    
         if (typeof(items) != "string" || items == "" || typeof(items) == null) {
             console.log("Укажите корректные данные");
         } else {
             appData.income = items.split(", ");
             appData.income.push(prompt("Может, что то еще "));
             appData.income.sort();
         }
 
         appData.income.forEach (function (itemmassive, i) {
             alert("Наша программа включает в себя данные: " + (i+1) + " - " + itemmassive);
         });
 
    }
};

for (let key in appData) {
    console.log("Способы доп. заработка:  " + key + " - " + appData[key]);
}