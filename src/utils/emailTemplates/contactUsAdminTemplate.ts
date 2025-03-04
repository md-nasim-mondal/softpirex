export const contactUsAdminTemplate = (
  name: string,
  email: string,
  subject: string,
  message: string
) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Message</title>
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

        <!-- Content -->
        <tr>
          <td style="padding: 20px; text-align: center">
            <h1
              style="
                color: #1a237e;
                font-family: Arial, sans-serif;
                font-size: 24px;
                margin: 20px 0;
              "
            >
              New Contact Form Submission
            </h1>
            
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              style="margin: 20px 0"
            >
              <tr>
                <td style="padding: 15px; text-align: left">
                  <p style="color: #4b5563; font-family: Arial, sans-serif; margin: 10px 0;">
                    <strong>Name:</strong> ${name}
                  </p>
                  <p style="color: #4b5563; font-family: Arial, sans-serif; margin: 10px 0;">
                    <strong>Email:</strong> 
                    <a href="mailto:${email}" style="color: #1a237e; text-decoration: none;">
                      ${email}
                    </a>
                  </p>
                  <p style="color: #4b5563; font-family: Arial, sans-serif; margin: 10px 0;">
                    <strong>Subject:</strong> ${subject}
                  </p>
                  <div style="
                    background-color: #f3f4f6;
                    padding: 15px;
                    border-left: 4px solid #1a237e;
                    margin: 20px 0;
                    text-align: left;
                  ">
                    <p style="
                      color: #4b5563;
                      font-family: Arial, sans-serif;
                      margin: 0;
                      line-height: 1.5;
                    ">
                      ${message}
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td bgcolor="#1a237e" style="padding: 30px; text-align: center">
            <h2
              style="
                color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 18px;
                margin: 0 0 15px 0;
              "
            >
              Action Required
            </h2>
            <p
              style="
                color: #ffffff;
                font-family: Arial, sans-serif;
                line-height: 1.5;
                margin: 0 0 15px 0;
              "
            >
              Please respond within 24 hours
            </p>
            <p
              style="
                color: #d1d5db;
                font-family: Arial, sans-serif;
                font-size: 14px;
                margin: 0;
              "
            >
              Sent via Softpirex Contact Form<br />
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
