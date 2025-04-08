let card = document.querySelectorAll('.card');
let prev = document.querySelector('.fas.fa-arrow-left');
let next = document.querySelector('.fas.fa-arrow-right');
let number = document.querySelector('#number');


let index = 0;


prev.addEventListener('click', () => {
     index--;
     if (index < 0) {
          index = card.length - 1;
     }
     console.log(index);
     document.querySelector('.main').style.backgroundImage = `url(assets/img/img${index + 1}.jpg)`;
     document.querySelector('#number').textContent = `${index + 1}`;
     
});

next.addEventListener('click', () => {
     index++;
     if (index > card.length - 1) {         
          index = 0;
     }
     console.log(index);
     document.querySelector('.main').style.backgroundImage = `url(assets/img/img${index + 1}.jpg)`; 
     document.querySelector('#number').textContent = `${index + 1}`;

});

/* when mouse hover on card img then change the background  */

let cardbox = document.querySelectorAll('.cards-box');
let cardimg = document.querySelectorAll('.card img');


cardimg.forEach((img) => {
     img.addEventListener('mouseover', () => {
           index = Array.from(cardimg).indexOf(img);
          document.querySelector('.main').style.backgroundImage = `url(${img.src})`;
          document.querySelector('#number').textContent = `${index + 1}`;
     });
});
