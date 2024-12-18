import React from "react";

const CheckboxField =({field, value=[], error, onChange})=>{

    const handleCheckboxChange=(option)=>{
        const updatedValue=value.includes(option)
        ? value.filter((item)=>item !== option) : [...value , option]
        onChange(field.name ,updatedValue)
    }
    return(
        <div className="form-group">
            <label htmlFor={field.id}>{field.label}</label>
            {field.options.map((option)=>(
                <label key={option}>
                    <input 
            type="checkbox"
            name={field.name}
            value={option}
            checked={value.includes(option)}
            onChange={(e)=>handleCheckboxChange(option)}
            />
            {option}
                </label>
            ))}
           
            {error && <span className="error">{error[0]}</span>}
        </div>
    )
}

export default CheckboxField;