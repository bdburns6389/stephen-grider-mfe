# Readme for Micro-frontends

## TODO's after course

- Go back and re-watch part about the 'onParentNavigate'. How exactly is routing working between parent and child apps?
- Stephen helped us set up how to use navigation within each micro frontend, but it is unclear if nested
  routes will also be included in this. E.g. /pricing works, but what if there was an individual price route
  we want to go to such as /pricing/1?
- Instead of the `lazy` method, can we convert this to use the loadRemote that Daniel added in his PR?
- Make this all work with a Vue app as the container instead of React. How do we handle lazy loading?
- Research how to incorporate a global state store into all of this.
- Implement routing in the Vue app.

## Cheatsheets

### S3 Bucket Creation and Configuration

Go to AWS Management Console and use the search bar to find S3

Click Create Bucket

Specify an AWS Region

Provide unique Bucket Name and click Create Bucket

Click the new Bucket you have created from the Bucket list.

Select Properties

Scroll down to Static website hosting and click Edit

Change to Enable

Enter index.html in the Index document field

Click Save changes

Select Permissions

Click Edit in Block all public access

Untick the Block all public access box.

Click Save changes

Type confirm in the field and click Confirm

Find the Bucket Policy and click Edit

Click Policy generator

Change Policy type to S3 Bucket Policy

Set Principle to \*

Set Action to Get Object

Copy the S3 bucket ARN to add to the ARN field and add /_ to the end.
eg: arn:aws:s3:::mfe-dashboard/_

Click Add Statement

Click Generate Policy

Copy paste the generated policy text to the Policy editor

Click Save changes

CloudFront setup
Go to AWS Management Console and use the search bar to find CloudFront

Click Create distribution

Set Origin domain to your S3 bucket

Find the Default cache behavior section and change Viewer protocol policy to Redirect HTTP to HTTPS

Scroll down and click Create Distribution

After Distribution creation has finalized click the Distribution from the list, find its Settings and click Edit

Scroll down to find the Default root object field and enter /container/latest/index.html

Click Save changes

Click Error pages

Click Create custom error response

Change HTTP error code to 403: Forbidden

Change Customize error response to Yes

Set Response page path to /container/latest/index.html

Set HTTP Response Code to 200: OK

Create IAM user

1. Search for "IAM"

2. Click "Create Individual IAM Users" and click "Manage Users"

3. Click "Add User"

4. Enter any name you’d like in the "User Name" field.

5. Click "Next"

6. Click "Attach Policies Directly"

7. Use the search bar to find and tick AmazonS3FullAccess and CloudFrontFullAccess

8. Click "Next"

9. Click "Create user"

10. Select the IAM user that was just created from the list of users

11. Click "Security Credentials"

12. Scroll down to find "Access Keys"

13. Click "Create access key"

14. Select "Command Line Interface (CLI)"

15. Scroll down and tick the "I understand..." check box and click "Next"

16. Copy and/or download the Access Key ID and Secret Access Key to use for deployment.
