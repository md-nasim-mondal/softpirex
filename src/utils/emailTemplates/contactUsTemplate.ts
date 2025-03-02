export const contactUsTemplate = (
  name: string,
  email: string,
  subject: string,
  message: string
) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Message</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0;">
    <center>
        <table width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 10px; margin: 20px auto; padding: 20px;">
            <tr>
                <td style="text-align: center;">
                    <h1 style="color: #1a237e;">New Contact Form Message</h1>
                    <p style="color: #4b5563; font-size: 16px;">You have received a new message from your website contact form.</p>
                    <hr style="border: 1px solid #ddd;">
                    <p><b>Sender:</b> ${name}</p>
                    <p><b>Email:</b> <a href="mailto:${email}" style="color: #1a237e;">${email}</a></p>
                    <p><b>Subject:</b> ${subject}</p>
                    <p><b>Message:</b></p>
                    <blockquote style="background-color: #f3f4f6; padding: 10px; border-left: 4px solid #1a237e; color: #4b5563;">
                        ${message}
                    </blockquote>
                    <hr style="border: 1px solid #ddd;">
                    <p style="color: #6b7280; font-size: 14px;">Please respond as soon as possible.</p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
`;
