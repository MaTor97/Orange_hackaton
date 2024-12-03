import express from 'express';
const app = express();
const port = process.env.PORT;
const ip = process.env.IP

//Middleware

app.use(bodyParser.json()); //analyse les requêtes au format json et les transforme en objet dans req.body

//démarrer le serveur

import userRouter from './controllers/user/user.js'
app.use('/user', userRouter);


app.listen(port, () => {
    console.log(`serveur démarrer sur ${ip}:${port}`);
})