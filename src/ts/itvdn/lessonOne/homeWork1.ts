
// Завдання 2
// Використовуючи TS, створіть наступну функцію, яка розраховує вартість
// морозива: Магазин пропонує 2 розміри морозива:
// • Маленький стаканчик (10грн)
// • Великий стаканчик (25грн)
// • Морозиво доповнюється однією або декількома начинками (мінімум – однією):
// -шоколад (+5грн)
// -карамель (+6грн)
// -ягоди (+10грн)
//  Додатково морозиво (не обов'язково) можна посипати маршмелоу (+5грн).
// Вхідні параметри користувач вводить через prompt.

enum Size {
    Small = 10,
    Big = 25
}

enum Options {
    Chocolate = 5,
    Caramel = 6,
    Berries = 10,
    Marshmallow = 5
}

// console.log('first')

const size = prompt("Check Size?(small or big)")
console.log(size)

export { }

