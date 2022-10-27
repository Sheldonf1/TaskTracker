const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
// const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const mongoose = require('mongoose');
// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connected to MongoDB!");
  app.listen(3000, () => console.log("Server Up and running on port 3000"));
});
