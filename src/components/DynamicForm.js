import React,{useEffect, useState} from "react";
import TextField from "./FormComponents/TextField";
import RadioField from "./FormComponents/RadioField";
import CheckboxField from "./FormComponents/CheckBoxField";
import SelectField from "./FormComponents/SelectField";

import { saveFormData, fetchFormData } from "../apiService";



const DynamicForm=({config})=> {
    const [formData,setFormData]=useState({});
    const [errors,setErrors]=useState({});
    const [submittedData,setSubmittedData]=useState(null);
    const [storedData, setStoredData]= useState([])

    const validateField =(field,value)=>{
        const fieldErrors=[];
        field.validations?.forEach((validation)=>{
            if(validation.name === "required" && validation.validation && !value){
                fieldErrors.push(`${field.label} is required.`);
            }
            if(
                validation.name === "pattern" &&
                validation.validation instanceof RegExp &&
                !validation.validation.test(value)
            ){
                fieldErrors.push(`${field.label} is invalid.`)
            }
        })
            return fieldErrors;
    };

    const handleChange= (fieldName,value)=>{
        setFormData((prev)=>({...prev , [fieldName]:value}));
    };
    // const handleSubmit= async (e)=>{
    //     e.preventDefault();
    //     const newErrors={};
    //     config.fields.forEach((field)=>{
    //         const fieldErrors=validateField(field,formData[field.name ] || "");
    //             if(fieldErrors.length>0){
    //                 newErrors[field.name]=fieldErrors
    //             }
    //     })
    //     if(Object.keys(newErrors).length === 0){
    //        try{
    //         const response =await saveFormData(formData)
    //         setSubmittedData(response.data);
    //         loadData();
    //        }catch(err){
    //         console.error("failed to submit the data",err);
    //         alert("failed to subimt the fomr ")
    //        }
    //     }else{
    //         setErrors(newErrors)
    //     }
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newErrors={};
        config.fields.forEach((field)=>{
            const fieldErrors=validateField(field,formData[field.name ] || "");
                if(fieldErrors.length>0){
                    newErrors[field.name]=fieldErrors
                }
        })
        if(Object.keys(newErrors).length === 0){
            setSubmittedData(formData);
            alert("FOrm submitted successfully")
        }else{
            setErrors(newErrors)
        }
    }

    const loadData=async()=>{
        try{
            const response =await fetchFormData(1,10)
            setStoredData(response.data)
        }catch(err){
            console.error("error loding data", err)
        }
    }

    useEffect(()=>{
        loadData()
    },[])
    return(
        <div className="form-container">
            <h1>{config.title}</h1>
            <form onSubmit={handleSubmit}>
                {config.fields.map((field)=>{
                    const ComponentMap={
                        text :TextField,
                        email:TextField,
                        radio:RadioField,
                        checkbox: CheckboxField,
                        select:SelectField,
                    };
                    const Component =ComponentMap[field.type];
                    return(
                        <Component
                        key={field.id}
                        field={field}
                        value={formData[field.name] || ""}
                        error = {errors[field.name]}
                        onChange={handleChange}
                        />
                    );
                })}
                <button type="submit " className="submit-btn">Submit</button>
            </form>
                {submittedData &&(
                    <div className="submitted-data">
                        <h2>submitted Data:</h2>
                        <pre>{JSON.stringify(submittedData,null ,2)}</pre>
                    </div>
                )}
                {storedData.length>0 && (
                    <div className="stored-data">
                        <h2>stored Data</h2>
                        <ul>
                            {storedData.map((item)=>(
                                <li key={item.id}>{JSON.stringify(item)}</li>
                            ))}
                        </ul>
                    </div>
                )}
        </div>
    )
}

export default DynamicForm;