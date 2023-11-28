const express = require('express');
const app = express();

const userRoutes = require('./routes/userRouter')
app.use('/users', userRoutes);







const PORT = 5000
app.listen(PORT, function () {
    console.log(`server listen: http://localhost:${PORT}`);
});