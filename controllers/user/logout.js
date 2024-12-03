import express from 'express';
import connection from "../../dbConnect.js"
const app = express.Router()
import authenticateToken from '../../auth.js'

app.delete('/', async (req, res) => {
    req.session.authorize = false;
    return res.status(403).json({message: 'Deconnection réussie'})
  })


export default app