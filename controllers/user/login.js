import express from 'express';
import bcrypt from 'bcrypt';
import connection from "../../dbConnect.js"
import jwt from 'jsonwebtoken'
const router = express.Router();




// Route de connexion
router.post('*', async(req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] =  await connection.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0)
            return res.status(401).json({ message: 'E-mail ou mot de passe incorrect' });
        const user = rows[0];
        console.log("login =" + user.id)
        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json({ message: 'E-mail ou mot de passe incorrect' });
        res.session.user = user.id;
        res.session.number = user.number;
        res.session.authorize = true;
        //Envois vers la page du profil
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

export default router