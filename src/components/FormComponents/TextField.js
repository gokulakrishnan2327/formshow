import React from "react";

const TextField =({field, value, error, onChange})=>{
    return(
        <div className="form-group">
            <label htmlFor={field.id}>{field.label}</label>
            <input id={field.id}
            type={field.type}
            name={field.name}
            onChange={(e)=>onChange(field.name, e.target.value)}
            className={error ? "input-error" : ""}
            />
            {error && <span className="error">{error[0]}</span>}
        </div>
    )
}

export default TextField;