require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');




const studentInformationRoutes = require('../routes/studentInformationRoutes.js');
const bookDistributionRoutes = require('../routes/bookDistributionRoutes.js');
const bookReceivedRoutes = require('../routes/bookReceivedRoutes.js');
const authRoutes = require('../routes/authRoutes.js');
const { isAuthenticated, isLoggedIn } = require('../middleware/auth.js');



const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.set('view engine', 'hbs');
const parentDir = path.dirname(__dirname);
app.set('views', path.join(parentDir, 'views'));



const url = 'mongodb+srv://'+process.env.CLUSTERUSERNAME+':'+process.env.CLUSTERUSERPASS+'@cluster0.qrtll88.mongodb.net/project350_mongo'

connectDB().then(() => {
    console.log("Connected to DB");
}).catch(err => console.log(err));

async function connectDB() {
    try {
        await mongoose.connect(url);   
    } 
    catch (error) {
        throw new Error('Error connecting to MongoDB: ' + error.message);
    }
    
}



app.get("/menu", isAuthenticated, function (req, res) {
  // res.render('menu');
  const data = {
    people: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ", "পঞ্চম"],
  };
  res.render("menu", data);
});

app.use(authRoutes);
app.use(isAuthenticated,studentInformationRoutes);
app.use(isAuthenticated,bookDistributionRoutes);
app.use(isAuthenticated,bookReceivedRoutes);


app.get('/logout', async function(req,res){
    res.cookie('jwt','', {maxAge:1});
    res.redirect('/');
  })
  
  
app.listen(process.env.PORT || 4000,function(){
    console.log("server is running on port 4000");
})


