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
var headerTitle = document.getElementById('header-title');
var headerTitle = document.getElementById('main-header');
// console.log(typeof(headerTitle));
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'
headerTitle.style.borderBottom = 'solid 3px #000'

// console.log(document.getElementsByClassName('title').style.color = 'green');
// console.log(x);
const tag = document.querySelector('.title');
tag.style.color = 'green'