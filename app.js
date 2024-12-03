



function submit() {
  var a = $("#username").val()
  var b = $("#email").val()
  var c = $("#password").val()
localStorage.setItem("Name",a)
localStorage.setItem("Email",b)
localStorage.setItem("Password",c)
Swal.fire({
  title: "Sign Up Succesfully",
  text: "You clicked the button!",
  icon: "success"
});
  }

  function signin() {
var signInEmail = $("#signInEmail").val()
var signInPassword = $("#signInPassword").val()
var checkLocalEmail = localStorage.getItem("Email")
var checkLocalPass = localStorage.getItem("Password")

if (checkLocalEmail === signInEmail && checkLocalPass === signInPassword) {
  Swal.fire({
    title: "Sign In Succesfully",
    text: "Welcom on Facbook",
    icon: "success"
  });
} else {
  Swal.fire({
  icon: "error",
  title: "incorect pass and email",
  text: "if you haven't account please sign up",
  footer: '<a href="#">Why do I have this issue?</a>'
});
}
    
    
    }