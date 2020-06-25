let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '30000');
    time = prompt("Введите дату в формате YYYY-MM-DD", '2020-06-22');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '10000');
     }
}
start();

let appDate = {
    budget: money,
    expenses: {},
    optionalExpenses : {},
    timeData: time,
    income: [],
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            a = prompt("Введите обязательную статью расходов в этом месяце", '3000'),
            b = prompt("Во сколько обойдется?", '100');
            
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null 
               && a != '' && b != '' && a.length < 50) {
                appDate.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBodget: function() {
       appDate.moneyPerDay = (appDate.budget / 30).toFixed();
       alert("Ежежеднеыный бюджет: " + appDate.moneyPerDay);
    },
    detectlLevel: function() {
        if (appDate.moneyPerDay < 50) {
            console.log("Минимум");
        } else if (appDate.moneyPerDay > 50 && appDate.moneyPerDay < 150) {
            console.log("Средне");
        } else if (appDate.moneyPerDay > 150) {
            console.log("Много");
        } else {
            console.log('Что-то не так');
        }
    },
    checkSavings:  function() {
        if (appDate.savings) {
            let save = +prompt("Какова сумма?", "1000"),
                percent = +prompt("Ставка", "12");
        
        appDate.monthIncum = +(save/100/12*percent).toFixed();
        alert("Доходс в месяц с депозита " + appDate.monthIncum + '$');
        }
    },
    chooseOptExpenses: function() {
        for (let i =0; i < 3; i++) {
            s = prompt("Статья необязательных расходов?",777);
    
            if ((typeof (a)) === 'string' && (typeof (s)) != null && s != '') {
                appDate.optionalExpenses[i] = s;
            }
            else {
                i = i - 1;
            }
        }
    },
    chooseIncum: function() {
            let items = prompt("Что принёсет дополнительный доход (через запятую)", "444,111,666,222,555");
            
            if ((typeof (q)) !== 'string' || a == '' || (typeof (q)) == null) {
                console.log("Упс");
            }
            else {
                appDate.income = items.split(",");
                appDate.income.push(prompt("Может ещё что-то?", "777"));
                appDate.income.sort();
            }
    }
};

appDate.chooseIncum();

for (let key in appDate) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appDate[key]);
}

function AddIn() {
    appDate.income.forEach(function(item, i) {
        console.log(i+1 + ": " + item);
    });
}
// chooseOptExpenses();
AddIn();