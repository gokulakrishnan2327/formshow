import React from "react";
import DynamicForm from "./components/DynamicForm"

const formConfig={
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
          "validation": "/^([^<>\\[\\]~]){1,50}$/"
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
          "validation": "/^([a-zA-ZÀ-ÿ0-9_\\-\\.\\+]{1,})@([a-zA-Z09_\\-]{2,})\\.([a-zA-Z]{2,})(\\.([a-zA-Z]){2,})?$/"
        }
      ]
    },
    {
      "id": "dynamicFormRadio",
      "type": "radio",
      "label": "Gender",
      "name": "gender",
      "options": [
        "Male",
        "Female",
        "Other"
      ],
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
      "options": [
        "Sports",
        "Music",
        "Traveling"
      ],
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
      "options": [
        "USA",
        "UK",
        "India"
      ],
      "validations": [
        {
          "name": "required",
          "validation": "required"
        }
      ]
    }
  ]
}


function App() {
  return (
   <div className="App">
      <DynamicForm config={formConfig}/>
   </div>
  );
}

export default App;
