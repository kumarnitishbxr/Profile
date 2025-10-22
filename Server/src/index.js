

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const main = require('./config/db.js')
const contactRoutes = require('./routes/contactRoute.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// Routes
app.use('/contact', contactRoutes);



const InitializeConnection = async ()=>{

   try {

      await main();
      console.log('DB connected successfully.')

      app.listen(process.env.PORT, ()=>{
         console.log('Listening at PORT', process.env.PORT)
      })
      
   } catch (error) {

      console.log(error.message)
   }
}


InitializeConnection()


