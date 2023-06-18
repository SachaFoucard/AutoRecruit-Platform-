const UserModel = require('../Models/model.apply');
const HRModel = require('../Models/model.hr');

module.exports.Register = async (req, res) => {
    let { firstname, lastname, mail, city, state, phone, address, codepostal, resume } = req.body;

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
            codepostal
        });

        let alreadyApply = await UserModel.findOne({ mail: newUser.mail }) // check if user has already apply

        if (!alreadyApply && firstname && lastname && mail && city && state && resume && phone && address && codepostal) {
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

module.exports.Print = async (req, res) => {
    try {
        let users = await UserModel.find({})
        res.status(201).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
};


module.exports.Login = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user = await HRModel.findOne({ username: username, password:password})
        if (user) {
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(401).json({ message: 'hr not found' })
    }
}