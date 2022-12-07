const ul = document.querySelector('.items');

// changing the content of the first li
ul.firstElementChild.textContent = 'Hello from the changed content of the first li';

// using innerText of the returned node list
ul.children[1].innerText = 'Brad';

// changing the content of the last item
ul.lastElementChild.innerHTML  = '<h1>Hello from h1</h1>';

// removing the last item
ul.lastElementChild.remove();

// removes the whole ul
ul.remove();


const btn = document.querySelector('.btn');
btn.style.background = 'red';