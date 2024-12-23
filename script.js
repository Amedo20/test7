/* let i = 0;

while(i <= 5) {
    console.log('work' + i);
    i++
} */

/* let i = 0;
do{
    console.log('work' + i);
    i++
} while(i < 3) */

/* for (let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++){
        console.log('work' + j);
    }

    console.log('work' + i);
}

for (let i = 0; i < 8; i++) {
    if(i % 2 != 0) continue
    console.log('work' + i);
}

for (let i = 0; i < 8; i++) {
    if(i == 2) break
    console.log('work' + i);
}
 */

/* let obj = new Object(); */

/* let person = {
    name: 'Ali',
    'userAge': 24,
    'user name': 'Khizir'
}
person.isUser = 'Admin'; // добавление
person.name = 'musa' // изменение
delete person['userAge'] // удаление

console.log(person['user name']) */


/* 
let book1 = {
    name: 'Harry Potter',
    author: 'Joan Rowling',
    study: function(){                          //функционал книги т.е. функция книги
        console.log(`Привет, я ${this.author}, я написал ${this.name}`)  // this обращается к родителю  метода (в данном случае study) т.е. переменной book1 в данном случае
    },                                                                 // this выведет результат как бы мы не поменяли название родителя(переменной)     
    pages: 300,
    address: {
        street: 'Kirova',
        number: 33
    }
} */
//console.log(book1.study())
// let address = book.address.street
//console.log(book1.address.street)                           //таким способом выводим эту функцию
                                                    //функция находящаяся внутри объекта является методом

// этот цикл проходится по всем элементам объекта
// после let  идет key, т.е ключи в которых заключено значение объекта
/* for (let key in book1) {         
    console.log(key)
}  

//выведет значения ключей
for (let key in book1) {         
    console.log(book1[key])
}

for (let key in book1) {         
    console.log(key + ' ' + book1[key])
} */
/* const obj = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",          // формат JSON
      "geo": {                          //JSON ЭТО ТО ЧТО ОТПРАВЛЯЕТ НАМ BACKEND РАЗРАБОТЧИК. JSON ПОХОЖ НА ОБЪЕКТ, НО НЕМНОГО ОТЛИЧАЕТСЯ ОТ НЕГО
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  console.log(obj.address.geo) */

let obj = {
    name: 'ali',
    age: 22
}
let obj2 = {
    name: 'ali',
    age: 22
}

console.log(obj == obj2);



/* let array = new Array()
console.log(typeof array) */
 let arr = [true, 'lorem', 23, []]
 console.log(arr[arr.length - 1]) //таким спососбом можно вывести последний элемент из массива
 console.log(arr.at[-1]) //метод at тоже выводит последний элемент из массива

 //данные с бэка приходят в таком формате, в формате массива. Они приходят в массиве потому что каждый объект это нумерованный элемент
/* let post = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
  ]
console.log(post[0].title) */ // ноль это индекс элемента(в данном случае объекта)

//лучше добавлять элемент в конец массива

let array = [33, 1, 'lorem, true', 2];
array.push(12) //метод push() добавляет элемент в конец массива
array.unshift('srewq') //метод unshift() добавляет элемент в начало массива
array.pop() //метод pop() удаляет последний элемент из массива
array.shift() // метод shift() удаляет первый элемент из массива
console.log(array)


let array2 = [33, 1, 'lorem', true, 22];
for(let i = 0; i < array2.length; i++) {
    console.log(array2[i])
}


let array3 = [33, 'lorem',  22];
for (let key of array3){
    console.log(key)
}







// дз к 20 уроку
//1:
let a =  ['lorem', 123, true, 'ipsum'];
console.log(a.length)
//2:
a.shift()
a.pop()
//3:
let em = [];
em.unshift(false, 'swws', 98)
em.push(12, true)
//console.log(em)
//4:
em.unshift('adwq', false, 34)
//5:
em.shift()
em.pop()
em.pop()
//6:
let number = [1, 3, 5, 7, 9]
for(let key in number){
    console.log(number[key] + 1)
}




