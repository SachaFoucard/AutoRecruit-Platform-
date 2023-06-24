// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587, // 587 -> TLS & 465 -> SSL
//     auth: {
//         user: 'sachafoucard8@gmail.com', // email de votre votre compte google
//         pass: '' // password de votre compte google
//     }
// });
// let Goodmail = {
//     from: 'no-reply@example.com',
//     to: 'sachafoucard8@gmail.com',
//     subject: 'Happy to inform that We liked your profile!',
//     text: "We hope this letter finds you in good health and high spirits. The company SACHRA would like to inform you that you have been selected to proceed with the job application process for the position you applied for. We have carefully reviewed your application and we are impressed with your profile, skills, and experience. We firmly believe that you have the potential to make a significant contribution to our company. In the next steps of the selection process, you will be contacted by our human resources team to arrange a personal interview. This interview will allow us to get to know you better, assess your skills in relation to the position, and discuss the job details. We encourage you to prepare for this crucial step by revisiting your professional journey, highlighting your achievements, and considering any questions you may have about us or the position itself. If you have any additional questions before the interview, please don't hesitate to contact our human resources team. We will be delighted to assist you and provide any necessary information. Congratulations once again on advancing in our recruitment process. We look forward to meeting you and discussing your potential within our company. Best regards,",
//     inReplyTo: 'no-reply'
// };

// function sendMail() {
//     transporter.sendMail(Goodmail, (error, info) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email: ' + info.response);
//         }
//     })
// }

// module.exports.sendMail = sendMail;
