# STEPS to be followed given in this blog - 
**Follow this blog:**
  - https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
  - Thanks to Chandra Panta Chhetri.
by that blog you will get the clientId, clientSecret and refreshToken. and put them inside the credentials.json and .evn file.

# Sending Emails Securely using Node.js, Nodemailer, SMTP, Gmail, and OAuth2

## Steps to Follow:

1. **Setting up a project:**
   - Create a new directory for your project.
   - Initialize a new Node.js project using `npm init`.

2. **Installing necessary packages:**
   - Install Nodemailer using `npm install nodemailer`.
   - Install googleapis and nodemailer-smtp-transport using `npm install googleapis nodemailer-smtp-transport`.

3. **Creating OAuth2 credentials:**
   - Go to Google Developer Console and create a new project.
   - Enable the Gmail API for the project.
   - Create OAuth2 credentials for the project.
   - Download the credentials JSON file.

4. **Setting up OAuth2 credentials:**
   - Place the downloaded credentials JSON file in your project directory.
   - Rename the JSON file to `credentials.json`.

5. **Creating the main script:**
   - Require the necessary modules (Nodemailer, googleapis).
   - Read the credentials file using `fs.readFile`.
   - Authorize OAuth2 client using `google.auth.OAuth2`.
   - Set up Nodemailer transporter with OAuth2.

6. **Sending an email:**
   - Define the email options (sender, recipient, subject, text, etc.).
   - Use `transporter.sendMail` to send the email.

7. **Running the script:**
   - Execute the main script using `node`.

This process enables you to send emails securely using Gmail SMTP and OAuth2 authentication with Node.js and Nodemailer.

