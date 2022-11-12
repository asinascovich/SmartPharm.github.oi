

function scrollMe(){
    window.onscroll = () =>{
        if(window.scrollY=1800){
            gsap.to ('.circle', {display:'block',delay:2,duration:4});
        }
        if(window.scrollY!=1800){
            gsap.to ('.circle', {display:'none',delay:2,duration:4});
        }
    }
}
scrollMe(); 




var designA = document.getElementById("d-a");
var designB = document.getElementById("d-b");
var designC = document.getElementById("d-c");
var designD = document.getElementById("d-d");
var designE = document.getElementById("d-e");
var designF = document.getElementById("d-f");

designA.addEventListener("mouseover" , () =>{
    designA.classList.add('a-d');
    designA.classList.remove('back');
})
designA.addEventListener("mouseleave" , () =>{
    designA.classList.add('back');
    designA.classList.remove('a-d');
})
designB.addEventListener("mouseover" , () =>{
    designB.classList.add('a-d');
    designB.classList.remove('back');
})
designB.addEventListener("mouseleave" , () =>{
    designB.classList.add('back');
    designB.classList.remove('a-d');
})
designC.addEventListener("mouseover" , () =>{
    designC.classList.add('a-d');
    designC.classList.remove('back');
})
designC.addEventListener("mouseleave" , () =>{
    designC.classList.add('back');
    designC.classList.remove('a-d');
})
 

designD.addEventListener("mouseover" , () =>{
    designD.classList.add('a-d');
    designD.classList.remove('back');
})
designD.addEventListener("mouseleave" , () =>{
    designD.classList.add('back');
    designD.classList.remove('a-d');
})

designE.addEventListener("mouseover" , () =>{
    designE.classList.add('a-d');
    designE.classList.remove('back');
})
designE.addEventListener("mouseleave" , () =>{
    designE.classList.add('back');
    designE.classList.remove('a-d');
})
designF.addEventListener("mouseover" , () =>{
    designF.classList.add('a-d');
    designF.classList.remove('back');
})
designF.addEventListener("mouseleave" , () =>{
    designF.classList.add('back');
    designF.classList.remove('a-d');
})


var homeScroll = document.getElementById("home-scroll")

homeScroll.addEventListener("click" , () =>{
    window.scrollTo ({
        left:0,
        top : 100,
        behavior : 'smooth',
        
    });
})

var aboutScroll = document.getElementById("about-scroll")

aboutScroll.addEventListener("click" , () =>{
    window.scrollTo ({
        left:0,
        top : 550,
        behavior : 'smooth',
        
    });
})
    
var skillScroll = document.getElementById("skills-scroll")

skillScroll.addEventListener("click" , () =>{
    window.scrollTo ({
        left:0,
        top : 1400,
        behavior : 'smooth',
        
    });
})
var workScroll = document.getElementById("work-scroll")

workScroll.addEventListener("click" , () =>{
    window.scrollTo ({
        left:0,
        top : 2800,
        behavior : 'smooth',
        
    });
})
var contactScroll = document.getElementById("contact-scroll")

contactScroll.addEventListener("click" , () =>{
    window.scrollTo ({
        left:0,
        top : 3800,
        behavior : 'smooth',
        
    });
})

var aboutMe = document.getElementById("about-m");

setInterval(() => {
    aboutMe.style.opacity = 1;
},6000);

var menu = document.getElementById("menu");
var cross= document.getElementById("cross");
var hum = document.getElementById("hum-nav");





function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }





