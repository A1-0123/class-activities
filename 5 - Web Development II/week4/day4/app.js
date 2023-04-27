// console.log("hello");

const users = [
    {
        id: 3,
        name: "Jane",
        salary: 4000
    },
    {
        id: 1,
        name: "John",
        salary: 3000
    },
    {
        id: 2,
        name: "Joel",
        salary: 3500
    },
];

let data = [
    {
        id: 1,
        images: {
            medium: "medium-1",
            large: "large-1"
        }
    },
    {
        id: 2,
        images: {
            medium: "medium-2",
            large: "large-2"
        }
    },
    {
        id: 3,
        images: {
            medium: "medium-3",
            large: "large-3"
        }
    },
]

let numbers = [44, 45, 44, 65, 12, 12, 14, 0, 2, 2, 1];

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

let filterResult = _.filter(users, user => user.salary >= 3000);
let sortResult = _.sortBy(users, "salary");
let orderResult = _.orderBy(users, ['name', 'salary']);
let uniqResult = _.uniq(numbers);

let newDataResult = _.map(data, obj => obj.id);
console.log(newDataResult);
let sumResult = _.reduce(numbers, (total, num) => total + num * 2);
let sumResult2 = _.sum(numbers)
console.log(sumResult);
console.log(sumResult2);
let chunkResult = _.chunk(numbers, 3);
console.log(chunkResult);
let isEmpty = _.isEmpty([]);
console.log(isEmpty);

function sayHi() {
    console.log("Hello");
}

let debounceResult = _.debounce(() => sayHi(), 4000);
console.log(debounceResult());

const slowFunction = (n) => {
    var arr = [];
    for(var i = n; i >= 0; i--){
      arr.push(i);
    }
    arr.sort(function(a,b){
      return a - b;
    });
    return arr;
}

let memoizeResult = _.memoize(slowFunction)

// console.log(memoizeResult(50000020));
// console.log(memoizeResult(50000020));
// console.log(memoizeResult(2));

// let reverseResult = _.reverse(numbers);

// console.log(reverseResult);

let indexOfResult = _.indexOf(numbers, 12)
console.log(indexOfResult); // 5
console.log(numbers[indexOfResult]); //12

let valueResult = _.values(obj);
console.log(valueResult);

let takeResult = _.take(numbers, 2);

// console.log(takeResult);

let mergeResult = _.merge({ a: 1 }, { a: 5, b: 2});

console.log(mergeResult);

obj2 = {
    a: 1,
    b: 2,
    a: 5,
};

console.log(obj2);