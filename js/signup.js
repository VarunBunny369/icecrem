document.querySelector('.signup-form').addEventListener('submit', (event) => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!username || !email || !password) {
      event.preventDefault();
      alert('All fields are required!');
    }
  });
  