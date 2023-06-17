const UserModel = require('../Models/model.apply');

module.exports.Register = async (req, res) => {
    let { firstname, lastname, mail, city, state, resume, phone, address,codepostal } = req.body;

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

}