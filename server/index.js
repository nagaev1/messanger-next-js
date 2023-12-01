const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRoutes = require('./routes/userRouter')
app.use('/users', userRoutes);







const PORT = 5000
app.listen(PORT, function () {
    console.log(`server listen: http://localhost:${PORT}`);
});