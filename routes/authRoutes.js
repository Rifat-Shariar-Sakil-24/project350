const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const nodemailer = require('nodemailer');
// const sendEmail = require('../utils/sendEmails');
const { School } = require('../models/School');
const app = express.Router();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

const jwt = require('jsonwebtoken');
const { OTP } = require('../models/OTP');
const { generateOTP } = require('../services/generateOTP');
const { sendOTP } = require("../services/sendOTP");
const { storeOTP } = require('../services/storeOTP');
const secret = process.env.SECRET;

const maxAge = 3*24*60*60;



const createToken = function(id){
    return jwt.sign({id}, secret, {
        expiresIn: maxAge
    });
}




app.get("/",function(req,res){

    res.render('home');
})


app.get("/changePassword/initiate", function(req,res){
    res.render('changePasswordInitiate');
})
app.post("/changePassword/Initiate", async function(req,res){
   
    const data = req.body;

    try {
        const existingSchool = await School.findOne({ email: data.email });
        if (!existingSchool) {
            return res.status(401).send('no such school found');
        } 
        req.session.email = data.email;
        res.status(201).send(req.body);
    } catch (error) {
        
    }
})

//res.status(200).json({ success: true, message: 'OTP sent successfully' });


app.get("/changePassword/confirm", async function(req, res) {
    const email = req.session.email;
    console.log(email);
    try {
        const otp = generateOTP();
        const newStoreOTP = storeOTP(email,otp);
        const result = await sendOTP(email, otp);
       
        res.render('changePasswordConfirm', {email});
    } catch (error) {
       
        res.status(401).send({ error: error.message });
    }
});


app.post("/changePassword/confirm", async function(req, res) {
    
    const email = req.session.email;console.log(email);
    const schoolOTPInfo = await OTP.findOne({email});
    console.log(schoolOTPInfo);
  console.log(req.body);
    const givenOTP = req.body.OTP;
    const storedOTP = schoolOTPInfo.otp;
    console.log(givenOTP);
    console.log(storedOTP);
    if(givenOTP!=storedOTP){
        return res.status(401).send('otp does not match');
    }

    try {
        const password = req.body.newPassword;
        await School.findOneAndUpdate(
            { email: email },
            { $set: { password: password} },
            { new: true }
        );
        const existingSchool = await School.findOne({email});
        const token = createToken(existingSchool._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        })
        
        res.status(201).send('password reset successful')
    } catch (error) {
        res.status(401).send('error occurred');
    }
});



//login
app.get("/login", function(req,res){
    res.render('login');
})

app.get("/register", function(req,res){
    res.render('register');
})
app.post('/login',async function(req,res){
    const data = req.body;
    try {
        const existingSchool = await School.findOne({ email: data.email });
        if (!existingSchool) {
            return res.status(401).send('no such school found');
        }
        // if(existingSchool.password!=data.password){
        //     return res.status(401).send('wrong password');
        // }
        
         if(!(await bcrypt.compare(data.password,existingSchool.password))){
            return res.status(401).send('wrong password');
        }
       // console.log(existingSchool.password);
        //console.log(data.password);
        const token = createToken(existingSchool._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        })
        
        res.status(201).send('ok');
    } catch (error) {
        
    }
})


app.post('/register', async function(req, res){
    const data = req.body;
    try {
      
       const existingSchool = await School.findOne({ email: data.email });
       if (existingSchool) {
           return res.status(401).send('Email address already exists');
       }
       
       const salt = await bcrypt.genSalt();
       data.password = await bcrypt.hash(data.password,salt);
       

       const newSchool = new School(data);
       await newSchool.save();

       const token = createToken(newSchool._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: maxAge * 1000
        })
       res.status(201).send('New school registered'); 
    } catch (error) {
        console.log(error);
        res.status(500).send('Error occurred while saving your school'); 
    }
});

module.exports =   app
