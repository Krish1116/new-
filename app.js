// //examine the document object
// // console.dir(document)
// console.log(document.URL)
// console.log(document.title)
// // document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images)

//getelementbyid
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// var headerTitle = document.getElementById('main-header');
// console.log(typeof(headerTitle));
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000'

// console.log(document.getElementsByClassName('title').style.color = 'green');
// console.log(x);
// const tag = document.querySelector('.title');
// tag.style.color = 'green'

//getelementbyclassname
// let items = document.getElementsByClassName('list-group-item');
// console.log(typeof(items));
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';


// for(let i = 0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

//getelementbyTagName
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';


// for(let i = 0; i < li.length; i++){
//     li.style.fontWeight = 'bold';
// }

//queryselector 
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

