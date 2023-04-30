## Description :
# Hospital API
 
## Step to set up the Hospital API

* Download the zip file from download option about or do a git pull request from github URL above
* Navigate to the folder where package.json is present
* Type 'npm install' to install all the dependency (node.js should be installed on the system)
* Type 'npm start' to deploy the app on the local machine
* Use 'localhost:8000' followed by function to access API

## Functions available with the API

- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
