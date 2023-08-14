import emailjs from "emailjs-com";
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID1 = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_1;
const templateID2 = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_2;
const userID = process.env.REACT_APP_EMAILJS_USER_ID;

export const sendEmailRocketTeam = async (name, email, phone, message) => {
  const templateParams = {
    name,
    email,
    phone,
    message,
  };
  try {
    await emailjs.send(serviceID, templateID1, templateParams, userID);
    console.log("Email sent succesfully!");
  } catch (err) {
    throw new Error(`Error sending the mail: ${err}`);
  }
};

export const sendThanksEmailToProspect = async (email, name) => {
  const templateParams = {
    email,
    name,
  };
  try {
    await emailjs.send(serviceID, templateID2, templateParams, userID);
    console.log("Thank-you email sent successfully to the prospect!");
  } catch (err) {
    throw new Error(`Error sending the thank-you email: ${err}`);
  }
};

export const validateEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};
