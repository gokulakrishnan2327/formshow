markdown
# Dynamic Form Application with React and Backend

This project allows you to dynamically generate and validate forms based on a provided JSON configuration. The form data is submitted to a backend, and the data can be retrieved with pagination and filtration options.

## Features

- **Dynamic Form Generation**: Generate form fields (text, email, checkbox, radio, select) based on a JSON configuration.
- **Validation**: Validate form fields (e.g., required fields, regex patterns).
- **Form Submission**: Submit form data to the backend and display the result.
- **Data Retrieval**: Fetch form data from the backend with pagination and filtering.
- **Backend API**: A simple Node.js server to handle form data submission and retrieval.

## Prerequisites

Before starting, you need to have the following installed:

- **Node.js**: To run the backend server.
- **npm or yarn**: For installing dependencies.
- **Git**: To clone the repository and manage the project.

## Setup Instructions

### 1. Clone the repository

Clone the project to your local machine by running the following command:

bash
git clone https://github.com/gokulakrishnan2327/formshow.git


### 2. Navigate to the project folder

Go to the root folder of the project:

bash
cd formshow


### 3. Install dependencies for the front-end

Navigate to the `client` directory:

bash
cd client


Then install the required dependencies:

bash
npm install


### 4. Install dependencies for the back-end

Navigate to the `server` directory:

bash
cd server


Then install the required dependencies:

bash
npm install


### 5. Set up the backend API

In the `server` directory, make sure to have a `server.js` or an equivalent file that sets up the backend API to handle form submissions. If using an Express.js server, ensure the server is listening on the correct port (e.g., port 5000).

### 6. Configure the API endpoint

If the API URL or port is different, you may need to adjust the backend URL in your front-end `apiService.js` file:

javascript
const API_BASE_URL = "http://localhost:5000"; // Update this if the backend runs on a different port


### 7. Running the application

- **Run the backend** (from the `server` directory):

  bash
  npm start
  

  This will start the backend server on `http://localhost:5000`.

- **Run the front-end** (from the `client` directory):

  bash
  npm start
  

  This will start the React development server on `http://localhost:3000`.

### 8. Access the application

Once both servers are running, you can access the application at:


http://localhost:3000


You will be able to see the dynamic form, fill it out, submit it, and view the submitted data.

## Backend API Endpoints

- **POST /data**: Submit form data to the server.
- **GET /data?page=1&limit=10**: Retrieve form data with pagination and filtering.

## Troubleshooting

If you encounter issues, check the following:

- Ensure that both the backend and frontend servers are running.
- Verify that the API base URL in the `apiService.js` file is set correctly.



### Example JSON configuration for form:

json
{
  "title": "Dynamic Form",
  "fields": [
    {
      "id": "dynamicFormText",
      "type": "text",
      "label": "Name",
      "name": "name",
      "validations": [
        {
          "name": "required",
          "validation": "required"
        },
        {
          "name": "pattern",
          "validation": "/^[a-zA-Z0-9 ]{1,50}$/"
        }
      ]
    },
    {
      "id": "dynamicFormEmail",
      "type": "email",
      "label": "Email",
      "name": "email",
      "validations": [
        {
          "name": "required",
          "validation": "required"
        },
        {
          "name": "pattern",
          "validation": "/^\\S+@\\S+\\.\\S+$/"
        }
      ]
    },
    {
      "id": "dynamicFormRadio",
      "type": "radio",
      "label": "Gender",
      "name": "gender",
      "options": ["Male", "Female", "Other"],
      "validations": [
        {
          "name": "required",
          "validation": "required"
        }
      ]
    },
    {
      "id": "dynamicFormCheckbox",
      "type": "checkbox",
      "label": "Interests",
      "name": "interests",
      "options": ["Sports", "Music", "Travelling"],
      "validations": [
        {
          "name": "required",
          "validation": "required"
        }
      ]
    },
    {
      "id": "dynamicFormSelect",
      "type": "select",
      "label": "Country",
      "name": "country",
      "options": ["USA", "UK", "India"],
      "validations": [
        {
          "name": "required",
          "validation": "required"
        }
      ]
    }
  ]
}


This configuration can be input dynamically via the application.

## Contributions

If you would like to contribute, please fork the repository, make your changes, and submit a pull request. All contributions are welcome!

---

### Notes

- This project is a template and can be extended with more features, such as better validation, custom components, or different data storage options.
- The backend is a simple Node.js server with an Express framework. You can customize it to use a database for storage (like MongoDB, PostgreSQL, etc.) if required.
