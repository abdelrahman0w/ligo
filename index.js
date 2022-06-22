const express = require ('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRoute = require ('./routes/user');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoute);


app.listen('8000', () => {
    console.log('Listening to port 8000..');
});