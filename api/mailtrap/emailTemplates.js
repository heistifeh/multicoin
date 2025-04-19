export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email</title>
  <style>
    :root {
      color-scheme: dark light;
      supported-color-schemes: dark light;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #111827;
      color: #f9f9f9;
    }

    .header {
      background: linear-gradient(to right, #111827, #1f2937);
      padding: 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 24px;
    }

    .content {
      background-color: #1f2937;
      padding: 20px;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      color: #f3f4f6;
    }

    .verification-code {
      text-align: center;
      margin: 30px 0;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #ffffff;
    }

    .footer {
      text-align: center;
      margin-top: 20px;
      color: #9ca3af;
      font-size: 0.8em;
    }

    @media (prefers-color-scheme: light) {
      body {
        background-color: #f9f9f9;
        color: #111827;
      }

      .header {
        background: linear-gradient(to right, #111827, #1f2937);
      }

      .header h1 {
        color: #ffffff;
      }

      .content {
        background-color: #ffffff;
        color: #333;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }

      .verification-code {
        color: #111827;
      }

      .footer {
        color: #888;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Verify Your Email</h1>
  </div>

  <div class="content">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div class="verification-code">{verificationCode}</div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br />Multicoin Capital Team</p>
  </div>

  <div class="footer">
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset Successful</title>
  <style>
    :root {
      color-scheme: dark light;
      supported-color-schemes: dark light;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #111827;
      color: #f9f9f9;
    }

    .header {
      background: linear-gradient(to right, #111827, #1f2937);
      padding: 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 24px;
    }

    .content {
      background-color: #1f2937;
      padding: 20px;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      color: #f3f4f6;
    }

    .success-icon {
      background-color: #22c55e;
      color: white;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      display: inline-block;
      font-size: 30px;
      text-align: center;
      margin: 30px 0;
    }

    .content ul {
      padding-left: 20px;
    }

    .footer {
      text-align: center;
      margin-top: 20px;
      color: #9ca3af;
      font-size: 0.8em;
    }

    @media (prefers-color-scheme: light) {
      body {
        background-color: #f9f9f9;
        color: #111827;
      }

      .header {
        background: linear-gradient(to right, #111827, #1f2937);
      }

      .header h1 {
        color: #ffffff;
      }

      .content {
        background-color: #ffffff;
        color: #333;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }

      .footer {
        color: #888;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Password Reset Successful</h1>
  </div>

  <div class="content">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>

    <div style="text-align: center;">
      <div class="success-icon">✓</div>
    </div>

    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>

    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br />Multicoin Capital Team</p>
  </div>

  <div class="footer">
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password</title>
  <style>
    :root {
      color-scheme: dark light;
      supported-color-schemes: dark light;
    }

    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #111827;
      color: #f9f9f9;
    }

    .header {
      background: linear-gradient(to right, #111827, #1f2937);
      padding: 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 24px;
    }

    .content {
      background-color: #1f2937;
      padding: 20px;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      color: #f3f4f6;
    }

    .button {
      display: inline-block;
      background-color: #22c55e;
      color: white !important;
      padding: 12px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 16px;
    }

    .footer {
      text-align: center;
      margin-top: 20px;
      color: #9ca3af;
      font-size: 0.8em;
    }

    @media (prefers-color-scheme: light) {
      body {
        background-color: #f9f9f9;
        color: #111827;
      }

      .header {
        background: linear-gradient(to right, #111827, #1f2937);
      }

      .header h1 {
        color: #ffffff;
      }

      .content {
        background-color: #ffffff;
        color: #333;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }

      .footer {
        color: #888;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Password Reset</h1>
  </div>

  <div class="content">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" class="button">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br />Multicoin Capital Team</p>
  </div>

  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
