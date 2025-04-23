import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationCode, name) => {
  const receipient = [{ email }];
  try {
    await mailtrapClient.send({
      from: sender,
      to: receipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{name}", name).replace(
        "{verificationCode}",
        verificationCode
      ),
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};
export const sendWelcomeEmail = async (email, name) => {
  const receipient = [{ email }];
  try {
    await mailtrapClient.send({
      from: sender,
      to: receipient,
      subject: "Welcome to Multicoin Capital",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name).replace(
        "{websiteURL}",
        "https://multicoinapp.com"
      ),
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};

// export const sendWelcomeEmail = async (email, name) => {
//   const receipient = [{ email }];
//   try {
//      await mailtrapClient.send({
//       from: sender,
//       to: receipient,
//       template_uuid: "7379bcb6-4ca6-4ea7-97cb-0ea6aeaecf78",
//       template_variables: {
//         company_info_name: "Multicoin Capital",
//         name: name,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const receipient = [{ email }];
  try {
    await mailtrapClient.send({
      from: sender,
      to: receipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
    });
    console.log(resetUrl);

    console.log("Reset Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};
export const sendResetSuccessEmail = async (email) => {
  const receipient = [{ email }];
  try {
    await mailtrapClient.send({
      from: sender,
      to: receipient,
      subject: "Password reset succesful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("Reset Email sent successfully");
  } catch (error) {
    console.log(error);
  }
};
