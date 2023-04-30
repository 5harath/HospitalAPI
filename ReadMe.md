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
    - POST request, please pass name, email and password parameters to this function
- /doctors/login → returns the JWT to be used
    - GET request, have to login with registered email and password, you will get JWT token as output
- /patients/register
    - PST request, please pass phone, name, email and address as parameter to this function
- /patients/:id/create_report
    - POST request, please pass patient id in URL and status in body
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
    - GET request, please pass patient id you will get all the report
- /reports/:status → List all the reports of all the patients filtered by a specific status
    - Get request, status can be 'Negative', 'Positive-Admit', 'Symptoms-Quratine', 'Travelled-Qurantine'
