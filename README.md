# STEPS to be followed given in this blog - 
**Follow this blog:**
  - https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
  - Thanks to Chandra Panta Chhetri.
by that blog you will get the clientId, clientSecret and refreshToken. and put them inside the credentials.json and .evn file.

# Sending Emails Securely using Node.js, Nodemailer, SMTP, Gmail, and OAuth2

## Steps to setup:

1. **Setting up a project:**
   - Create a new directory for your project.
   - Initialize a new Node.js project using `npm init`.

2. **Installing necessary packages:**
   - run npm i

3. **Creating OAuth2 credentials:**
   - Go to Google Developer Console and create a new project.
   - Follow the steps given in the blog (Link given above)

4. **Setting up OAuth2 credentials:**
   - Place the downloaded credentials JSON file in your project directory.
   - Fill clientId, clientSecret and refreshToken in `credentials.json`.
   - Rename the JSON file to `credentials.json`.

5. **Creating the main script:**
   - Require the necessary modules (Nodemailer, googleapis).
   - Read the credentials file using `fs.readFile`.
   - Authorize OAuth2 client using `google.auth.OAuth2`.
   - Set up Nodemailer transporter with OAuth2.

6. **Sending an email:**
   - Define the email options (sender, recipient, subject, text, etc.).
   - Use `transporter.sendMail` to send the email.

This process enables you to send emails securely using Gmail SMTP and OAuth2 authentication with Node.js and Nodemailer.


## Steps to use the Script:

1. **There are two arrays as companyName and hrEmail**

**NOTE** - Maintain the order of companyName and hrEmail in arrays i.e 
            const companyName = ['Google', 'Facebook'];
            const companyName = ['hr@google.com', 'hr@facebook.com'];
            and so onn.

2. **Fill companyName with the list of companies you want to apply for.**

3. **Fill hrEmail with the list of emails of hr you want to mail.**

4. **Running the script:**
   - Execute the main script using `node`.

