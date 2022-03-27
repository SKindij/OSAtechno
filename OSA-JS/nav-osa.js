//a feature that allows the user to change the background color of the page


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

