const nodemailer = require('nodemailer');
const UserModel = require('../Models/model.apply')
module.exports.EmailAccepted = async (req, res) => {
    const { to } = req.body;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // 587 -> TLS & 465 -> SSL
        auth: {
            user: process.env.MAILADRESSE, // email de votre compte Google
            pass: process.env.MAILPASS, // password de votre compte Google
        },
    });

    let mail = {
        from: 'no-reply@example.com',
        to: to,
        subject: 'Happy to inform that We liked your profile!',
        text: "We hope this letter finds you in good health and high spirits. The company SACHRA would like to inform you that you have been selected to proceed with the job application process for the position you applied for. We have carefully reviewed your application and we are impressed with your profile, skills, and experience. We firmly believe that you have the potential to make a significant contribution to our company. In the next steps of the selection process, you will be contacted by our human resources team to arrange a personal interview. This interview will allow us to get to know you better, assess your skills in relation to the position, and discuss the job details. We encourage you to prepare for this crucial step by revisiting your professional journey, highlighting your achievements, and considering any questions you may have about us or the position itself. If you have any additional questions before the interview, please don't hesitate to contact our human resources team. We will be delighted to assist you and provide any necessary information. Congratulations once again on advancing in our recruitment process. We look forward to meeting you and discussing your potential within our company. Best regards,",
        inReplyTo: 'no-reply'
    };

    try {
        await transporter.sendMail(mail);
        await UserModel.findOneAndDelete({mail:to});
        res.status(200).json({ message: 'Email sent successfully' });

    } catch (error) {
        await UserModel.findOneAndDelete({mail:to})
        console.log('Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}
module.exports.EmailRefused = async (req, res) => {
    const { to } = req.body

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // 587 -> TLS & 465 -> SSL
        auth: {
            user: 'sachafoucard8@gmail.com', // email de votre compte Google
            pass: 'lhdblvgjrpzdibsn', // password de votre compte Google
        },
    });

    let mail = {
        from: 'no-reply@example.com',
        to: to,
        subject: "Thank to apply to us!",
        html: "Hello,<br> Unfortunately, SACHRA R&D solutions has decided not to move forward with your application at this time.While we wish we had better news, continuing to search and apply will help you maintain your momentum.Best of luck,The Indeed team",
        inReplyTo: 'no-reply'
    };

    try {
        await transporter.sendMail(mail);
        await UserModel.findOneAndDelete({mail:to})
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        await UserModel.findOneAndDelete({mail:to})
        console.log('Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
}






