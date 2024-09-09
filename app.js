// Required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
app.use(express.json()); // Parse incoming JSON requests
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Define the user schema and model
const usrSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('user', usrSchema);

app.get('/',async(req,res)=>{
    try{
        res.redirect('/login.html');
    }catch(error){
        window.write("Cannot reach login.html");
    }
})


// POST route to handle user signup
app.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        const usr = new User(data); // Create new user instance

        await usr.save(); // Save the user to MongoDB
        res.status(201).send(); // Send a success response
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error creating account'); // Send an error response
    }
});

app.post('/login', async(req,res) => {
    try{
        const {user_name,Password} = req.body;
        const name = await User.findOne({user_name});
        if(name){
            // console.log('name is matched');
            // console.log(Password+ ""+name.Password);
            if(name.Password=== Password){
                // console.log('Ayush');
                return res.status(200).send();
            }
            return res.status(401).send();
        }else{
            return res.status(404).send();
            // console.log('failed if');
        }
    }catch(error){
        // console.log('failed try');
        return res.status(404).send();
    }
})

// Define a port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
