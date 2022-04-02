//a feature that allows the user to change the background color of the page
document.addEventListener('DOMContentLoaded', function() {
   let body = document.querySelector('body');
        document.querySelector('#backgr1').onclick = function() {
           body.style.backgroundColor = 'Black';
        };
        document.querySelector('#backgr2').onclick = function() {
           body.style.backgroundColor = 'PaleGoldenrod';
        };
        document.querySelector('#backgr3').onclick = function() {
           body.style.backgroundColor = 'Maroon';
        };  
});

//Function for expanding a text block
function showText (el) {
   if(el.previousElementSibling.clientHeight === 40) {
      el.previousElementSibling.style.height = "100%";
      el.innerHTML = "ShowLess...";
   } else {
      el.previousElementSibling.style.height = "40px";
      el.innerHTML = "Read More...";
   }
}

