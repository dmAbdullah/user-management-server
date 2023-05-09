const express = require('express')
const app = express();
const cors= require('cors')
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

const users= [
    {id: 1, name: 'sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'khabana', email: 'khabana@gmail.com'},
    {id: 3, name: 'dibana', email: 'dibana@gmail.com'}
]

app.get('/', (req, res)=> {
    res.send('Users Management Server is Running ........');
})

app.get('/users', (req, res)=>{
    res.send(users);
    
})

app.post('/users', (req, res)=>{
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=> {
    console.log(`Server is Running on Port: ${port}`);
})

