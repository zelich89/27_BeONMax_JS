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
    savings: false
};

function chooseExpenses() {
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
}

chooseExpenses();

appDate.moneyPerDay = (appDate.budget / 30).toFixed();

alert("Ежежеднеыный бюджет: " + appDate.moneyPerDay);

if (appDate.moneyPerDay < 50) {
    console.log("Минимум");
} else if (appDate.moneyPerDay > 50 && appDate.moneyPerDay < 150) {
    console.log("Средне");
} else if (appDate.moneyPerDay > 150) {
    console.log("Много");
} else {
    console.log('Что-то не так');
}
        
function checkSavings() {
    if (appDate.savings) {
        let save = +prompt("Какова сумма?", "1000"),
            percent = +prompt("Ставка", "12");
    
    appDate.monthIncum = +(save/100/12*percent).toFixed();
    alert("Доходс в месяц с депозита " + appDate.monthIncum + '$');
    }
}   

checkSavings();

function chooseOptExpenses() {
    for (let i =0; i < 3; i++) {
        s = prompt("Статья необязательных расходов?",777);

        if ((typeof (s)) != null && s != '') {
            appDate.optionalExpenses[i] = s;
        }
        else {
            i = i - 1;
        }
    }
}

// chooseOptExpenses();
        
console.log(appDate);