import connection from './db/db_config.js';

// Insert data into the database
export const insertData = (data, callback) => {
    data = parseInt(data);
    
    if (isNaN(data)) {
        return callback(new Error('Data must be a number.'), null);
    }

    const query = 'INSERT INTO numbers (number) VALUES (?)';
    connection.query(query, [data], (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};

// Fetch all numbers
export const fetchAllData = (callback) => {
    const query = 'SELECT * FROM numbers';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return callback(err, null);
        }
        callback(null, results);
    });
};
