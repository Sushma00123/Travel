const loginForm = document.querySelector('#shelter_form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');
const logoutBtn = document.querySelector('#logoutBtn');


loginForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const value1 = email.value;
    const value2 = password.value;
    let getData = JSON.parse(localStorage.getItem('userData'))
    const index = getData.findIndex((val, ind) => {
        if (val.email === value1) {
            window.location.href = "destination.html";
            loginBtn.style.visibility = 'hidden';
            logoutBtn.style.visibility = 'visible';
        }
        // else {
        //     loginBtn.style.visibility = 'visible';
        //     logoutBtn.style.visibility = 'hidden';
        // }
    })
})

const fetchData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        // console.log(data)
        localStorage.setItem('userData', JSON.stringify(data))
    }
    catch (err) {
        console.log(err)
    }
}
fetchData()



// reviews
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}