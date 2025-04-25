export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Your Verification Code for Multicoin Capital</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.5; color: #f3f4f6; background-color: #111827; max-width: 600px; margin: 0 auto; padding: 10px;">
  <div style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
    <h3 style="color: #ffffff; margin: 0;">Your Verification Code for Multicoin Capital</h3>
  </div>
  <div style="background-color: #1e293b; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
    <p>Hi {name},</p>
    <p>Thank you for signing up with Multicoin Capital. To complete your registration, please enter the verification code below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>This code will expire in 15 minutes. If you didn’t initiate this request, please ignore this email.</p>
    <p>If you have any questions or need assistance, feel free to contact our support team.</p>
    <p>Best regards,<br>Multicoin Capital Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #f3f4f6; background-color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
    <h1 style="color: #ffffff; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #1e293b; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul style="padding-left: 20px; color: #d1d5db;">
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Multicoin Capital Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #f3f4f6; background-color: #111827; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
    <h1 style="color: #ffffff; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #1e293b; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Multicoin Capital Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;


export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Multicoin Capital</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.5; color: #f3f4f6; background-color: #111827; max-width: 600px; margin: 0 auto; padding: 10px;">
  <div style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
   
    <h3 style="color: #ffffff; margin: 0;">Welcome to Multicoin Capital</h3>
  </div>
  <div style="background-color: #1e293b; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
    <p>Hi {name},</p>
    <p>Welcome to Multicoin Capital, we’re excited to have you with us!</p>
    <p>We’re building a decentralized financial future powered by blockchain, focused on long-term, generational wealth. As part of our community, you’ll get:</p>
   
    <ul style="color: #d1d5db; padding-left: 20px;">
      <li>Research-driven investment insights</li>
      <li>Education on transformative tech</li>
      <li>Tools to help you invest with confidence</li>
    </ul>
    <p>Stay tuned for updates, reports, and ways to engage.</p>
    <p>Let’s shape the future of wealth together.</p>
    <p>Best,<br>The Multicoin Capital Team</p>
    
  <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
