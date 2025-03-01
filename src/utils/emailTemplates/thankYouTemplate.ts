export const thankYouTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0;">
    <center>
        <table width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 10px; margin: 20px auto; padding: 20px;">
            <tr>
                <td style="text-align: center;">
                    <h1 style="color: #1a237e;">Thank You, ${name}!</h1>
                    <p style="color: #4b5563; font-size: 16px;">We have received your message and will get back to you soon.</p>
                    <hr style="border: 1px solid #ddd;">
                    <p style="color: #6b7280; font-size: 14px;">If you need urgent assistance, feel free to reach out at:</p>
                    <p style="color: #1a237e; font-size: 16px;"><b>softpirex@gmail.com</b></p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
`;
