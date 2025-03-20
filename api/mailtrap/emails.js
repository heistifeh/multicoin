import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  const receipient = [{ email }];
  try {
    await mailtrapClient.send({
      from: sender,
      to: receipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
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
    const response = await mailtrapClient.send({
      from: sender,
      to: receipient,
      subject: "Verify Your Email",
      template_uuid: "7379bcb6-4ca6-4ea7-97cb-0ea6aeaecf78",
      template_variables: {
        company_info_name: "Multicoin",
        name: name,
      },
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(error);
  }
};
