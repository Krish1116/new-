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


// let x = document.getElementById('buttton').addEventListener('click', tres);
// console.log(x)

// function tres(e){
    // console.log('Button clicked')
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = 
    // '#f4f4f4';
    // console.log(e)

    // console.log(e.target);
// }
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}