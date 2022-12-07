// using eventListeners
const btn = document.querySelector('.btn');

/**
 * There are multiple types of events which we can have as event listeners
 * some of them are click, mouseover(works for hovering the mouse over), mouseout (when we exit the element, thats when the event is fired)
 * there are more events like input events as well
 */
btn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    // to add a class, we do classList.add() and to remove we do classList.remove()

    // for this, it changes the form background to black and the text color to white
    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

    // btn.style.background = 'red';
    // console.log(`The button was clicked`);
    // console.log(`The event object looks like this:`);
    
    // event.target returns the target on which the eventListener is placed
    // console.log(event.target.className);
} );