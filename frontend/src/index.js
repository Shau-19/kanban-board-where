const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
app.use(express.json());
app.use('/api', apiRouter);
if (require.main === module) { app.listen(3000); }
module.exports = app;