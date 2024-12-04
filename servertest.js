import express from 'express';
const app = express();

app.use(bodyParser.json()); 


app.listen(port, () => {
    console.log(`serveur démarrer sur localhost:${3001}`);
})

const reponseGeofencing = {
    "type": "org.camaraproject.geofencing-subscriptions.v0.area-entered",
    "id": "07cbff91-0793-4580-88d2-4eea3f7cf4ac",
    "source": "com.orange.camara.geofencing",
    "specversion": "1.0",
    "datacontenttype": "application/json",
    "data": {
      "device": {
        "phoneNumber": "+33699901032"
      },
      "area": {
        "areaType": "CIRCLE",
        "center": {
          "latitude": 48.816,
          "longitude": 2.305
        },
        "radius": 2000
      },
      "subscriptionId": "86eccea4-efe7-4556-872d-3b03e281914f"
    },
    "time": "2024-12-04T13:32:40.030990356Z"
  }


setInterval(() => {
    
    fetch('http://localhost:3000/sub',{
        method: "post",
        body: JSON.stringify(reponseGeofencing)
    })


}, 20000);