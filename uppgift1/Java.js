function validate() {
  if (document.myForm.msg.value == "") {
    alert("Please write a message! :)");
    document.myForm.msg.focus();
    return false;
  }
  if (document.myForm.email.value == "") {
    alert("Please provide your Email!");
    document.myForm.email.focus();
    return false;
  }
  return true;
}

window.onscroll = function () {
  scrollFunction();
};

window.onload = function () {
  window.onscroll = function () {
    scrollFunction();
  };
};

function scrollFunction() {
  mybutton = document.getElementById("scrollbtn");
  mybutton.style.display = "block";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
