import express from "express";
import bodyParser from "body-parser";
import { insertData, fetchAllData } from "./db_actions.js";
import database from "./db/db_config.js";

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static("public"));
app.use(express.json());

// Handle POST request to insert data
app.post("/submit", (req, res) => {
	const { userInput } = req.body;

	insertData(userInput, (err, results) => {
		if (err) {
			return res.status(500).send("Error inserting data into the database.");
		}
		res.status(200).redirect("/map/map.html");
	});
});

// Optional: Handle GET request to fetch all data
app.get("/data", (req, res) => {
	fetchAllData((err, results) => {
		if (err) {
			return res.status(500).send("Error fetching data from the database.");
		}
		res.json(results);
	});
});

app.post("/sub", (req, res) => {
	const event = req.body; // Notification reçue
	const eventType = event.type;
	const phoneNumber = event.data.device.phoneNumber;

	// Définir la valeur de isInZone selon l'événement
	const isInZone = eventType === "org.camaraproject.geofencing-subscriptions.v0.area-entered" ? 1 : 0;
	console.log(isInZone);

	// Mettre à jour la colonne isInZone dans la base de données
	database.query(`UPDATE numbers SET isInZone = ${isInZone} WHERE number = ${phoneNumber}`, (err, results) => {
		if (err) {
			console.error("Erreur lors de la mise à jour de isInZone:", err);
			return res.status(500).send("Erreur interne du serveur");
		}

		console.log(`isInZone mis à jour pour le numéro ${phoneNumber} : ${isInZone}`);
	});

	res.status(200).send("Notification traitée");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
