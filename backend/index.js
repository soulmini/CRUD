const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require("./routes/useRoute");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI)
    .then(() => {
        console.log('connected');
        app.listen(process.env.PORT || 5000, (err) => {
            if (err) console.log(err);
            console.log("server has started");
        });
    })
    .catch((error) => {
        console.log('error', error);
    })

// Router
app.use(userRoute);