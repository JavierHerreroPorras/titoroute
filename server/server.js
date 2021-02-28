import app from './src/app.js';
const PORT = 8080;

import './src/database/database.connection.js';

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});