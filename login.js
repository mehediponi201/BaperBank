document.getElementById('btn-login').addEventListener('click', function () {
   let emailField = document.getElementById('user-email');
   let email = emailField.value;
   let passwordField = document.getElementById('user-password');
   let password = passwordField.value;
   if (email === 'hasan@gmail.com' && password === 'hasan') {
      window.location.href = 'bank.html'
   }
   else {
      alert('Incorrect input');
   }
})