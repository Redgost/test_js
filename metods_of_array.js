/*---------------MAP метод-----------------*/
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// debugger;

const getName = (arr) => {
    return arr.map((el) => {
        return el.name;
    });
}

const newGetName = (users) => users.map((el) => el.name);
    
console.table(users);
console.log(getName(users));

console.log(newGetName(users));

/*---------------Задача перерахунок ціни зі знижкою-------*/
const cars = [
    {
        make: 'Honda',
        model: 'CR-V',
        price: 15000,
        amount: 14,
        onSale: true,
        type: 'sedan',
    },
    {
        make: 'Honda',
        model: 'Accord',
        price: 22500,
        amount: 4,
        onSale: true,
        type: 'sedan',
    },
            {
        make: 'Mazda',
        model: 'Mazda 6',
        price: 25000,
        amount: 8,
        onSale: false,
        type: 'sedan',
    },
                {
        make: 'Hyundai',
        model: 'Accent',
        price: 12000,
        amount: 24,
        onSale: true,
        type: 'sedan',
    },
                    {
        make: 'Mersedes',
        model: 'Benz',
        price: 35000,
        amount: 1,
        onSale: true,
        type: 'universal',
    },
]
/*------------це брудна фунцкія!!!--------------------*/
const makeCarsWithDiscount = (cars, discount) => {
    return cars.map((auto) => {
        auto.price -= discount;
        return auto;
    })
 };

// console.table(cars);
console.table(makeCarsWithDiscount(cars, 1000));

/*---------------це чиста функція ------------------------*/
const makeCarsWithDiscount1 = (cars, discount) => {
    return cars.map((auto) => ({...auto, price: auto.price - discount}))
 };

// console.table(cars);
console.table(makeCarsWithDiscount1(cars, 2000));


/*----------------------метод FILTER-------------------*/

const flterByPrice = (cars, threshold) => {
    return cars.filter(
        (auto) => auto.price < threshold
    );
}

console.table(flterByPrice(cars, 20000));

const getCarsOnsale = (cars) => cars.filter(auto => auto.onSale === true);
/*або!!!*/
const getCarsOnsale1 = (cars) => cars.filter(auto => auto.onSale);
/*так як результат auto => auto.onSale повертає true, можна не порівнювати з true*/
console.table(getCarsOnsale(cars));
console.table(getCarsOnsale1(cars));

const getCarsWithType = (cars, type) => cars.filter(
    (auto) => auto.type === type);
console.table(getCarsWithType(cars, 'sedan'));

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston

/*----------------------метод FIND-----------------*/