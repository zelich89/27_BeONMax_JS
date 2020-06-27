

let money = +prompt('Ваш бюджет на месяц?', '3000'),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-06-21');

let appDate = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false
};

for (let i = 0; i < 1; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '1'),
        b = prompt('Во сколько обойдется?', '2')

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50) {
        сonsole.log('done');    
        appDate.expenses[a] = b;
    }

    appDate.moneyPerDay = appDate.budget / 30;

}

alert("Ежежеднеыный бюджет: " + appDate.moneyPerDay);

if (appDate.moneyPerDay < 50) {
    console.log("Минимальный");
} else if (appDate.moneyPerDay > 50 && appDate.moneyPerDay < 1500) {
    console.log('Среднeе');
} else if (appDate.moneyPerDay > 1500) {
    console.log('Много');
} else {
    console.log('Ошибка');

}
        