import React from "react";

const RadioField =({field, value, error, onChange})=>{
    return(
        <div className="form-group">
            <label >{field.label}</label>
            {field.options.map((option)=>(
               <label label key ={option}>
                <input 
            type="radio"
            name={field.name}
            value={option}
            checked={value ===option}
            onChange={(e)=>onChange(field.name, e.target.value)}
            />
            {option}
            </label>
            ))}
            
            {error && <span className="error">{error[0]}</span>}
        </div>
    )
}

export default RadioField;