let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");


// 按下按鈕之後產生的變化
menu.onclick = () => {
    menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

// 回到上層按鈕
window.onscroll = () => {
    if (window.scrollY > 60) {
	document.querySelector('#scroll-up').classList.add('active');
    } else {
    document.querySelector('#scroll-up').classList.remove('active');
    }
}

const scriptURL='https://script.google.com/macros/s/AKfycbzV8R7qTE56czbELOYQHtNSeIpaeOWmwTSpj8qStOFJ_uhk4VBD7SLy5chaUH6ydQZRqQ/exec';
const form = document.forms['orderlist'];
	  
form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, {method: 'POST',body: new FormData(from)})
	 .then(response=>alert("You have successfully submitted."))
	 .catch(error=> console.error('Error!', error.message))
})