let arr = [1,2,3,4,5,6,7];

arr.forEach(function(element, index){
    return element * 2;
});
// returns doubled elements

let newArr = arr.map(function(element, index) {
    if(element % 2 === 0) {
        return element;
    }else{
        return 0;
    }
});

// console.log(newArr); // [0, 2, 0, 4, 0, 6, 0]

for(let i = 3; i < arr.length; i++){
    // console.log(arr[i]);
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
}

function filterValue(element) {
    return element % 2 === 0;
}

let newArr2 = arr.filter(filterValue);

// console.log(newArr2); [2, 4, 6]

let comments = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "likes": 5000,
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "likes": 4000,
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "likes": 200,
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
];

let popularComments = comments.filter((el, index) => {
    // console.log(el.name);
    return el.likes > 200;
})

// console.log(popularComments); [{...}, {...}]

function sum(a, b){
    return a + b;
}

// sum(4, 5); // 9

for(let comment of comments){
    console.log(comment.likes);
}

for(let index in comments) {
    console.log(comments[index].likes);
}