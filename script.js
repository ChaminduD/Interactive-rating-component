let ratingState = document.getElementById("rating-state");
let thankYouState = document.getElementById("thank-you-state");
let btn = document.getElementById("btn");
let rate = document.getElementById("rate");
let form = document.getElementById("ratingForm");

btn.onclick = function(){
    for (var i = 0; i < form.rating.length; i++) {
      if (form.rating[i].checked) {
        ratingState.style.display = "none";
        rate.innerHTML = i+1;
        thankYouState.style.display = "block";
        break;
      }
    }
}