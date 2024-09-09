const { json } = require("express");

async function push_data(){
    let button = document.getElementById('name').value;
    let ps1 = document.getElementById('ps1').value;
    let ps2 = document.getElementById('ps2').value;
    if(ps1===ps2){
        let data = {user_name:button,Password:ps1};
        const response = await fetch('/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify content type
            },
            body : JSON.stringify(data)
        });
        if(response.ok){
            window.location.assign('/login.html');
            alert('Account created');
        }else{
            alert('signup failed try again');
        }
        
    }
    else {
        alert('Passwords do not match'); // Alert if passwords do not match
    }
}