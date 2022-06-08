let names = ['Front End Web Developer', 'Machine Learning Enthusiast', 'Photographer']
console.log(names.length);
let tag = document.getElementsByClassName('words')[0];
let nav = document.getElementsByClassName('width')[0];
let lists = document.getElementsByClassName('nav-lists')[0];
let bar = document.getElementsByClassName('bars')[0]
let lis = document.getElementsByClassName('nav-list')[0];

let imag = document.getElementsByClassName('imag')[0]
//myWords(names,tag)

/*function myWords(names, target) {
    for (let i = 0; i < names.length; i++) {
        setInterval((c => () => target.innerHTML = c)(names[i]), (i + 1)* 1000);
    }
}*/




new WOW().init();



function showNav(){
 
    bar.style.display = 'none';
    lists.style.display = 'block';
    lis.style.display = 'none'
}


let navo = document.getElementsByClassName('nav')[0]

let navv = document.getElementsByClassName('navv')[0]
let x = document.getElementsByClassName('x')[0]
let x1 = document.getElementsByClassName('x1')[0]
let x2 = document.getElementsByClassName('x2')[0]
let x3 = document.getElementsByClassName('x3')[0]
let x4 = document.getElementsByClassName('x4')[0]
let raw =()=>{
    imag.style.width = '100vw';
    navv.style.display = 'block';
    
    bar.style.display = 'none';
    lis.style.display = 'none';
    imag.style.display='block'
    window.scrollY = 0
};
let w =()=>{
    navv.style.display = 'none'
    bar.style.display = 'block'
    imag.style.display='none'
}
x.addEventListener("click", w)
x1.addEventListener("click", w)
x2.addEventListener("click", w)
x3.addEventListener("click", w)
x4.addEventListener("click", w)
nav.addEventListener("click", raw);

window.onscroll = function(){
    let scrolltop = window.scrollY 

    if (scrolltop>= 150){
        navo.classList.add('active')
    }
}

