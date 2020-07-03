let z = document.querySelector('.Z');
z.style.color= 'limegreen';

let btnStart = document.getElementById('start'),
    btnExpenses = document.getElementsByTagName('button')[0],
    btnOptional = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2];
let expensesItems = document.getElementsByClassName('expenses-item'),
    optionalExpensesItems = document.getElementsByClassName('optionalexpenses-item'),
    incomeItem = document.getElementById('income'),
    checkItem = document.getElementById('savings'),
    sumItem = document.getElementById('sum'),
    percentItem = document.getElementById('percent');
let budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetvalue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    yearValue = document.getElementsByClassName('year-value')[0],
    monthValue = document.getElementsByClassName('month-value')[0],
    dayValue = document.getElementsByClassName('day-value')[0];


let money, time;
let appDate = {
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false
};

btnStart.addEventListener('click', function() {
    time = '2020-06-29';
    money = 3003;
    // time = prompt('Введите дату в формате YYYY-MM-DD', '2020-06-21');
    // money = prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }

    appDate.timeDate = time;
    appDate.budget = +money;

    budgetValue.textContent = +appDate.budget.toFixed();
    console.log(typeof(+(budgetValue.textContent)));

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth()+1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function() {
    let suma = 0;
    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = +expensesItems[++i].value;
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appDate.expenses[a] = b;
            suma = suma + b; 
            expensesValue.textContent = suma;
        }
        else {
            i = i - 1;
        }
    }
});

btnOptional.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let optional = optionalExpensesItems[i].value;
        appDate.optionalExpenses[i] = optional;
        if(i == 0) {
            optionalExpensesValue.textContent = appDate.optionalExpenses[i];
        } else {
            optionalExpensesValue.textContent += ' ' + appDate.optionalExpenses[i];
        }
    }
});

btnCountBudget.addEventListener('click', function() {
    if (appDate.budget == undefined) {
        daybudgetvalue.textContent = 'Рано';
        levelValue.textContent = 'Рано';
    } else {
        let day;
        day = (money / 30).toFixed(1);
        daybudgetvalue.textContent = day;
        if (day < 50) {
            levelValue.textContent = 'Низкий';
        }
        else if (day > 50 && day < 150) {
            levelValue.textContent = 'Средний';
        }
        else if (day > 150) {
            levelValue.textContent = 'Высокий';
        }
    }
    

});

incomeItem.addEventListener('input', function() {
    let add = incomeItem.value;
    appDate.income = add.split(',');
    incomeValue.textContent = appDate.income;
    console.log(typeof(incomeItem.value));
    
});

console.log(appDate.savings);

checkItem.addEventListener('click', function() {
    if (appDate.savings == false) {
        appDate.savings = true;
    } else {
        appDate.savings = false;
    }
    console.log(appDate.savings);
    
});

sumItem.addEventListener('input', function() {
    if (appDate.savings == true) {
        let sum = +sumItem.value,
            percent = +percentItem.value;

        appDate.monthIncum = sum/100/12*percent;
        appDate.yearIncum =  sum/100*percent;

        monthsavingsValue.textContent = appDate.monthIncum.toFixed(1);        
        yearsavingsValue.textContent = appDate.yearIncum.toFixed(1);        
    }
});

percentItem.addEventListener('input', function() {
    if (appDate.savings == true) {
        let sum = +sumItem.value,
            percent = +percentItem.value;

        appDate.monthIncum = sum/100/12*percent;
        appDate.yearIncum =  sum/100*percent;

        monthsavingsValue.textContent = appDate.monthIncum.toFixed(1);        
        yearsavingsValue.textContent = appDate.yearIncum.toFixed(1);        
    }
});

