const { json } = require('express');
const UserModel = require('../Models/model.apply');
const HRModel = require('../Models/model.hr');
const bcrypt = require('bcrypt')

module.exports.Register = async (req, res) => {
  let { firstname, lastname, mail, city, state, phone, address, codepostal, resume, linkedin, github } = req.body;
  let { jobID } = req.body;

  try {
    let newUser = new UserModel({
      firstname,
      lastname,
      mail,
      city,
      state,
      resume,
      address,
      phone,
      codepostal,
      linkedin,
      github,
      jobID
    });

    let alreadyApply = await UserModel.findOne({ mail: newUser.mail }) // check if user has already apply

    if (!alreadyApply && firstname && lastname && mail && city && state && resume && phone && address && codepostal, github, linkedin) {
      await newUser.save();
      res.status(201).json(newUser);
    }
    if (alreadyApply) {
      res.status(403).json({ message: 'User with this email already applied' })
    }
    else {
      res.status(401).json({ message: 'Missing required fields' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.PrintCandidates = async (req, res) => {
  const { jobNumb } = req.query; // Retrieve jobNumb from query parameters

  try {
    let users;

    if (jobNumb === '0') {
      users = await UserModel.find({});
    } else if (jobNumb === '1' || jobNumb === '2' || jobNumb === '3' || jobNumb === '4' || jobNumb === '5') {
      users = await UserModel.find({ jobID: jobNumb });
    } else {
      return res.status(401).json({ message: 'No users found' });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports.LoginHR = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const user = await HRModel.findOne({ mail });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.status(201).json(user);
      } else {
        res.status(401).json({ message: 'Invalid password' });
      }
    } else {
      res.status(401).json({ message: 'HR not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

