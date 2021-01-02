// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let gStatus = {
  "♡": "♥",
  "♥": "♡"
};
let cStatus = {
  "red" : "",
  "": "red"
};
let articleHearts = document.querySelectorAll(".like");
function likeCallback(e) {
  let x = e.target;
  mimicServerCall("bogusUrl")
 .then(function(serverMessage){
 x.innerText = gStatus[x.innerText];
    x.style.color = cStatus[x.style.color];
    })
    .catch(function(error) {
      document.getElementById("modal").className = "";
    });
}
for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
