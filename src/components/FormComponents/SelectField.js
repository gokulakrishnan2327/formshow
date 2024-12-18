import React from "react";

const SelectField =({field, value, error, onChange})=>{
    return(
        <div className="form-group">
            <label htmlFor={field.id}>{field.label}</label>
            <select 
            id={field.id}
            name={field.name}
            onChange={(e)=>onChange(field.name, e.target.value)}
            >
                <option value="">Select</option>
                {field.options.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
                </select>
            {error && <span className="error">{error[0]}</span>}
        </div>
    )
}

export default SelectField;