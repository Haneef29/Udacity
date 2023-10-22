const opentab = document.querySelector(".active-link");
const opencont = document.querySelector(".tab-links");
const tabopen = document.querySelector(".tab-contents");
const showtab = document.querySelector(".show-tab");
const tabclose = document.querySelector(".active-tab");
const showlink = document.querySelector(".show-link");


opencont.addEventListener("click", function(){
    tabopen.style.display = "block";
    tabclose.style.display = "none";
    showtab.style.display = "block";
    showlink.style.display = "none";
});
opentab.addEventListener("click", function(){
    tabopen.style.display = "none";
    tabclose.style.display = "block";
    showtab.style.display = "none";
    showlink.style.display = "block";
});







const one = document.querySelector(".art.one");
const first = document.querySelector(".pop-up.first");
const closeone = document.querySelector(".close-one");

one.addEventListener("click", function(){
    first.style.display = "block";
});
closeone.addEventListener("click", function(){
    first.style.display = "none";
});




const two = document.querySelector(".art.two");
const second = document.querySelector(".pop-up.second");
const closetwo = document.querySelector(".close-two");

two.addEventListener("click", function(){
    second.style.display = "block";
});
closetwo.addEventListener("click", function(){
    second.style.display = "none";
});


const three = document.querySelector(".art.three");
const third = document.querySelector(".pop-up.third");
const closethree = document.querySelector(".close-three");

three.addEventListener("click", function(){
    third.style.display = "block";
});
closethree.addEventListener("click", function(){
    third.style.display = "none";
});



const four = document.querySelector(".art.four");
const fourth = document.querySelector(".pop-up.fourth");
const closefour = document.querySelector(".close-four");

four.addEventListener("click", function(){
    fourth.style.display = "block";
});
closefour.addEventListener("click", function(){
    fourth.style.display = "none";
});


const five = document.querySelector(".art.five");
const fifth = document.querySelector(".pop-up.fifth");
const closefive = document.querySelector(".close-five");

five.addEventListener("click", function(){
    fourth.style.display = "block";
});
closefive.addEventListener("click", function(){
    fourth.style.display = "none";
});





const six = document.querySelector(".art.six");
const sixth = document.querySelector(".pop-up.sixth");
const closesix = document.querySelector(".close-six");

six.addEventListener("click", function(){
    sixth.style.display = "block";
});
closesix.addEventListener("click", function(){
    sixth.style.display = "none";
});


// document.getElementById("idana").innerHTML = "How far Idxan";
// document.getElementById('idana').style.color = "purple";

