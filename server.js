const express = require('express');
const app = express();

const port = 3000;
app.use('/', express.static('./public/'));
app.use('/js', express.static('./js/'));
app.use('/wasm', express.static('./build/'));
app.listen(port, () => console.log(`Server is running on port ${port}`));
