import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000
const ip = process.env.IP

//Middleware

app.use(bodyParser.json()); //analyse les requêtes au format json et les transforme en objet dans req.body

//démarrer le serveur
/*
app.use(session({
    secret: 'your-secret-key', // Secret for signing the session ID cookie
    resave: false,             // Don't resave session if it wasn't modified
    saveUninitialized: true,   // Save a session that hasn't been modified
    
}));
*/
//import userRouter from './controllers/user/user.js'
//app.use('/user', userRouter);



app.listen(port, () => {
    console.log(`serveur démarrer sur localhost:${port}`);
})