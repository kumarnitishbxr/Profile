

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const main = require('./config/db.js')
const contactRoutes = require('./routes/contactRoute.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://nitish-5je8.onrender.com',
  credentials: true,
}));

// Routes
app.use('/contact', contactRoutes);



// const InitializeConnection = async ()=>{

//    try {

//       await main();
//       console.log('DB connected successfully.')

//       app.listen(process.env.PORT, ()=>{
//          console.log('Listening at PORT', process.env.PORT)
//       })
      
//    } catch (error) {

//       console.log(error.message)
//    }
// }


// InitializeConnection()

main()
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => console.log('Server running on port', PORT));
  })
  .catch(err => console.error('DB connection error:', err.message));
