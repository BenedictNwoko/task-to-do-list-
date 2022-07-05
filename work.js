const list = document.querySelector('#lists')
const addButton = document.querySelector('#enter')
const addInput = document.querySelector('#user-input');
const container = document.querySelector('.container')

// let paragraph = document.createElement('li')

// container.appendChild(paragraph)

let markUp;

addButton.addEventListener('click', () => {
    markUp = `
        <li>
            <p>${addInput.value}</p>
            <button class='delete-btn'>X</button>
        </li> 
    `;    

    list.insertAdjacentHTML('beforeend', markUp);

    addInput.focus();
    addInput.value = '';
});

// event delegation because delete btn isnt present on load

list.addEventListener('click', e => {
    if(e.target.className === 'delete-btn') {
        e.target.parentNode.remove();
    }
});


