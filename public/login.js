var click = document.getElementById('Login');
click.addEventListener('click', async (e) => {
    e.preventDefault(); // Prevent form submission

    var user_name = document.getElementById('User_name').value;
    var Password = document.getElementById('Password').value; // Capital "P" for Password

    console.log("button clicked");

    const response = await fetch('/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_name: user_name, Password: Password }), // Capital "P" for Password
    });

    if (response.ok) {
        alert("Login Successful");
        window.location.assign('/landingpage/lpage.html'); 
    } else {
        alert("Enter valid data or create a new account");
    }
});


