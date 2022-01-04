const name = document.querySelector('name');
const email = document.querySelector('email');
const submit = document.querySelector('submit');
const contactMe = document.querySelector('ContactMe');

for (let index = 0; index < 3; index++) {
    const text = document.querySelector('text');
}

document.addEventListener('submit', outcome);

function outcome(){
    alert('Unfortunately, I did not do a backend for this form, so please feel free to email me using' + 
    ' my email above. Feel free to call me: 732-754-9338, or use my email above. ');
}