// Get the modal
var modalSignUp = document.getElementById("signup-Modal");

// Get the button that opens the modal
var btnSignUp = document.getElementById("signup-nav-btn");

// Get the <span> element that closes the modal
var spanCloseSignUp = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnSignUp.onclick = function() {
  modalSignUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCloseSignUp.onclick = function() {
  modalSignUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalSignUp.style.display = "none";
  }
}

var modalSignIn = document.getElementById("signin-Modal");

// Get the button that opens the modal
var btnSignIn = document.getElementById("signin-nav-btn");

// Get the <span> element that closes the modal
var spanCloseSignIn = document.getElementsByClassName("close-signIn")[0];

// When the user clicks the button, open the modal 
btnSignIn.onclick = function() {
  modalSignIn.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCloseSignIn.onclick = function() {
  modalSignIn.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalSignIn.style.display = "none";
  }
}

function signInToSignUp(arg) {
  document.getElementById("signin-Modal").style.display = "none";
  document.getElementById("signup-Modal").style.display = "block";
}
var postId;
function deletePostModal(postNumber) {
  document.getElementById("delete-Modal").style.display = "block";
  postId = postNumber;
}

function deletePostYesBtn() {
  document.getElementById(postId).style.display = "none";
  document.getElementById("delete-Modal").style.display = "none";
}

function deletePostNoBtn() {
  document.getElementById("delete-Modal").style.display = "none";
}

function getPostDetails(individualPostTitle, individualPostContent, individualPostUsername) {

  var postTitle = document.getElementById(individualPostTitle).innerText;
  var postContent = document.getElementById(individualPostContent).innerText;
  var postUsername = document.getElementById(individualPostUsername).innerText;

  localStorage.setItem("title", postTitle);
  localStorage.setItem('content', postContent);
  localStorage.setItem("username", postUsername);

  window.location.href = "index.html";

}