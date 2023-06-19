const UserModel = require('../Models/model.apply');
const HRModel = require('../Models/model.hr');

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
    let { jobNumb } = req.query; // Retrieve jobNumb from query parameters

    if (jobNumb == 0) {
        const users = await UserModel.find({});
        res.status(200).json(users);
    } else {
        const users = await UserModel.find({ jobID: jobNumb });
        res.status(200).json(users);
    }
};

module.exports.LoginHR = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user = await HRModel.findOne({ username: username, password: password })
        if (user) {
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(401).json({ message: 'hr not found' })
    }
};

