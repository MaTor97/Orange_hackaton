require('dotenv').config();
/*
async function fetchToken() {
    const url = 'https://api.orange.com/oauth/v3/token';

    const options = {
        method: 'POST',
        headers: {
            'Authorization': process.env.ORANGE_KEY, // Replace with your variable name in .env
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials' // Form data
        })
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON response
        console.log('Token Response:', data);
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}
*/
async function fetchToken() {
    try {
        const response = await fetch('https://api.orange.com/oauth/v3/token', {
            method: 'POST',
            headers: {
                'Authorization': process.env.ORANGE_KEY,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            })
        });
        if (!response.ok) {
            throw new Error(`not daijoubu: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching token:', error);
    }
}

async function main(){
    let test = await fetchToken();
    
console.log(test)
}

main();