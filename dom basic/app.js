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
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let last_item = document.querySelector('.list-group-item:last-child');
// last_item.style.color = 'blue';

// let second_item = document.querySelector('.list-group-item:nth-child(2)');
// second_item.style.color = 'yellow';

// let second_item = document.querySelector('.list-group-item:nth-child(2)');
// second_item.style.backgroundColor = 'green';

// let third_item = document.querySelector('.list-group-item:nth-child(3)');
// third_item.style.visibility = 'hidden';

//queryselectorAll
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// for(let i = 0; i < even.length; i++){
//     even[i].style.backgroundColor = '#ccc';
// }

//------------------------------------------------------------------

//TRAVERSING THE DOM//
// let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement 
//parentElement and parentNode's most part is can be intarchangable
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentNode);
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes - it's present text node too
//textnode represent the void space
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //1stchild
// console.log(itemList.firstChild);

// //1stelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lasstchild
// console.log(itemList.lastChild);

// //lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

//nextsibling
// console.log(itemList.nextSibling);

// //nextelement sibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //priviousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

//creatElement

//creat a div
// let new_div = document.createElement('div');

// //add class
// new_div.className = 'hello';

// //add id
// new_div.id = 'hello1';

// //add attr
// new_div.setAttribute('title', 'hello div');

// //create text node
// let newDivText = document.createTextNode('Hello World');

// //add text to div
// new_div.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(new_div);

// new_div.style.fontSize = '30px';
// container.insertBefore(new_div, h1);

//event//
// let x = document.getElementById('button').addEventListener('click', tres);
// console.log(x)

// function tres(e){
    // console.log('Button clicked')
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = 
    // '#f4f4f4';
    // console.log(e)

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.classList);

    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>'

    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)

// }

// let x = document.getElementById('button');
// let box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

//MOUSEOVER - FOR ANY INNER ELEMENT
//MOUSEENTER-ENTER ONLY GOING TO BE FOR THE ELEMENT ITSELF
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);

// function runEvent(e){
    // console.log('EVENT TYPE: '+e.type);

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3> <h3>MouseY: '+e.offsetY+'</h3>'

    // document.body.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)'
// }

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('click', filterItem);

//add item
function addItem(e){
    e.preventDefault();

    // console.log(1);
    //get input value
    let newItem = document.getElementById('item').value;

    //create new li element
    let li = document.createElement('li');

    //add class
    li.className = 'list-group-item';
    
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    
    //create del button ele
    let deleteBtn = document.createElement('button'); 
    
    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Item
function filterItem(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    // console.log(text);

    //get list
    let items = itemList.getElementsByTagName('li');
    
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !== -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}