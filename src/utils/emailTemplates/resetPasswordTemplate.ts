export const resetPasswordTemplate = (token: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0;">
    <center>
        <table width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 10px; margin: 20px auto; padding: 20px;">
            <tr>
                <td style="text-align: center;">
                    <h1 style="color: #1a237e;">Reset Your Password</h1>
                    <p style="color: #4b5563; font-size: 16px;">We received a request to reset your password. Click the button below to reset it.</p>
                    <hr style="border: 1px solid #ddd;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/verify-reset-password?token=${token}" 
                        style="display: inline-block; padding: 10px 20px; background-color: #1a237e; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px;">
                        Reset Password
                    </a>
                    <hr style="border: 1px solid #ddd;">
                    <p style="color: #6b7280; font-size: 14px;">If you did not request a password reset, please ignore this email.</p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
`;
