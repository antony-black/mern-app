require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-midleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//   credentials: true,
//   origin: process.env.CLIENT_URL
// }));
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Explicitly specify headers
}));

app.use('/api', router);
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.path}`);
  next();
});
app.use(errorMiddleware);

const start = async () => {
  try {
    // await mongoose.connect(process.env.DB_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // });
    await mongoose.connect(process.env.DB_URL);
    app.listen(PORT, () =>
      console.log(`Server has been started on PORT = ${PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
};

start();
