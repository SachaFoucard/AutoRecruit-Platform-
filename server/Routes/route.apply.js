const routerUser = require('express').Router();

const { PrintCandidates, LoginHR } = require('../Controllers/controller.user');
const { S3Client } = require("@aws-sdk/client-s3");
const sharp = require('sharp');
const crypto = require('crypto'); // Add missing import for crypto module
const multer = require('multer')
const { Upload } = require('@aws-sdk/lib-storage');
const UserModel = require('../Models/model.apply');

const storage = multer.memoryStorage(); // You can use memory storage for temporarily storing the file in memory.
const upload = multer({ storage: storage });

// Setup and Initialization
const s3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

// Function to generate each time a different keyName
const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');


routerUser.post('/register', upload.single("resume"), async (req, res) => {

    console.log("buffer",req.file.buffer);
    const buffer = req.file.buffer

  const keyName = generateFileName();

  // Define the body object containing user information
  const body = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mail: req.body.mail,
    city: req.body.city,
    state: req.body.state,
    phone: req.body.phone,
    address: req.body.address,
    codepostal: req.body.codepostal,
    linkedin: req.body.linkedin,
    github: req.body.github,
    jobID: req.body.jobID,
    resume: keyName // Use the generated keyName as the resume filename
  }

  // Define S3 parameters for uploading the file
  const upload = new Upload({
    client: s3,
    params: {
        Bucket: process.env.BUCKET_NAME,
        Key: keyName,
        Body: buffer,
        ContentType: req.file.mimetype,
    }
});
  await upload.done();

  // Create a new HRModel instance with user information
  const newUser = new UserModel(body);
  // Save the new HR user to the database
  await newUser.save();

  // Send a response with the created user
  res.status(201).send(newUser);
});

//Print applicants of jobs (get)
routerUser.get('/printUsers', PrintCandidates);

//Login HR
routerUser.post('/HRLogin', LoginHR);

module.exports = routerUser

