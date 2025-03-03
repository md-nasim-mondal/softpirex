export const resetPasswordTemplate = (token: string) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Reset</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f0f0f0">
    <center>
      <table
        cellpadding="0"
        cellspacing="0"
        border="0"
        width="100%"
        style="
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 15px;
        "
      >
        <!-- Header -->
        <tr>
          <td style="padding: 20px">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td bgcolor="#1a237e" style="padding: 5px; border-radius: 5px">
                  <table width="100%">
                    <tr>
                      <td width="50%">
                        <img
                          src="https://i.postimg.cc/6p9zrL43/logo-removebg-preview.png"
                          alt="Softpirex"
                          width="40"
                          style="display: block; height: auto"
                        />
                      </td>
                      <td width="50%" style="text-align: right">
                        <h3
                          style="
                            color: #ffffff;
                            margin: 0;
                            font-family: Arial, sans-serif;
                          "
                        >
                          SOFTPIREX
                        </h3>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Main Content -->
        <tr>
          <td style="padding: 20px; text-align: center">
            <img
              src="https://i.postimg.cc/hjN3MW81/logol.png"
              alt="Softpirex Logo"
              width="300"
              style="
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto;
                background-color: #4b5563;
                border-radius: 15px 0 15px 0;
              "
            />
            <h1
              style="
                color: #1a237e;
                font-family: Arial, sans-serif;
                font-size: 24px;
                margin: 20px 0;
              "
            >
              Password Reset Request
            </h1>
            <p
              style="
                color: #979797;
                font-family: Arial, sans-serif;
                line-height: 1.5;
                max-width: 400px;
                margin: 0 auto;
              "
            >
              We received a request to reset your password. Click the button below to
              set up a new password.
            </p>
          </td>
        </tr>

        <!-- Reset Button -->
        <tr>
          <td style="padding: 20px">
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              bgcolor="#f9fafb"
              style="border-radius: 5px"
            >
              <tr>
                <td style="padding: 30px; text-align: center">
                  <table cellpadding="0" cellspacing="0" border="0" align="center">
                    <tr>
                      <td
                        bgcolor="#1a237e"
                        style="padding: 12px 30px; border-radius: 20px"
                      >
                        <a
                          href="${process.env.NEXT_PUBLIC_BASE_URL}/verify-reset-password?token=${token}"
                          style="
                            color: #ffffff;
                            text-decoration: none;
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            display: inline-block;
                          "
                        >
                          RESET PASSWORD
                        </a>
                      </td>
                    </tr>
                  </table>
                  <p
                    style="
                      color: #4b5563;
                      font-family: Arial, sans-serif;
                      line-height: 1.5;
                      margin: 20px 0 0 0;
                    "
                  >
                    This link will expire in 1 hour for security reasons.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td bgcolor="#1a237e" style="padding: 30px; text-align: center">
            <p
              style="
                color: #ffffff;
                font-family: Arial, sans-serif;
                line-height: 1.5;
                margin: 0 0 15px 0;
              "
            >
              Didn't request this password reset?
            </p>
            <p
              style="
                color: #d1d5db;
                font-family: Arial, sans-serif;
                font-size: 14px;
                margin: 0;
              "
            >
              Please ignore this email or contact us at<br />
              <a
                href="mailto:support@softpirex.com"
                style="color: #60a5fa; text-decoration: none"
              >
                softpirex@gmail.com
              </a>
            </p>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
`;
