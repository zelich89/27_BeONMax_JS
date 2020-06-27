let bntStart = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
let expensesItem = document.getElementsByClassName('expenses-item');
let btnExpenses = document.getElementsByTagName('button')[0],
    btnOptional = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2];
let optionalItem = document.querySelectorAll('.optionalexpenses-item');
let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time, exValue;
    
bntStart.addEventListener('click', function() {
    console.log("Press"); 
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-06-21');
    money = +prompt('Ваш бюджет на месяц?', '3000');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '3000');
    }
    appDate.budget = money;
    appDate.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
        b = +expensesItem[++i].value;        
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appDate.expenses[a] = b;
            sum += b;
            expensesValue.textContent = sum;
        } else {
            i = i - 1;
        }
    }
});

btnOptional.addEventListener('click', function() {
    
    for (let i = 0; i < optionalItem.length; i++) {
        let opt = optionalItem[i].value;
        appDate.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + ' ';
    }
});

btnCountBudget.addEventListener('click', function() {
    if (appDate.budget != undefined) {
        appDate.moneyPerDay = (appDate.budget / 30).toFixed(1);
        daybudgetValue.textContent= appDate.moneyPerDay;
        if (appDate.moneyPerDay <= 100) {
            levelValue.textContent = "Минимум";
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 250) {
            levelValue.textContent = "Средне";
        } else if (appDate.moneyPerDay > 250) {
            levelValue.textContent = "Много";
        } else {
            levelValue.textContent = "Что-то не так";
        }
    }
    else {
        daybudgetValue.textContent = "Рано";
        levelValue.textContent = "Рано";
    }
    
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appDate.income = items.split(',');
    incomeValue.textContent = appDate.income;
});

checkSavings.addEventListener('click', function() {
    if(appDate.savings != true) {
        appDate.savings = true;
    } else {
        appDate.savings = false;
    }
});

sumValue.addEventListener('input', function() {
    if(appDate.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appDate.monthIncum = sum/100/12*percent;
        appDate.yearIncum = sum/100*percent;

            
        monthsavingsValue.textContent = appDate.monthIncum.toFixed(1);
        yearsavingsValue.textContent = appDate.yearIncum.toFixed(1);

    }
});

percentValue.addEventListener('input', function() {
    if(appDate.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appDate.monthIncum = sum/100/12*percent;
        appDate.yearIncum = sum/100*percent;

            
        monthsavingsValue.textContent = appDate.monthIncum.toFixed(1);
        yearsavingsValue.textContent = appDate.yearIncum.toFixed(1);

    }
});


let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false
};
