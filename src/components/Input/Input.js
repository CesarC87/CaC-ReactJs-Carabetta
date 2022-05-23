import React from 'react'

const Input = (props) => {

    return (
        <div>
            <label for={props.idFor}>{props.label}</label>
            <input 
            type={props.type} 
            id={props.idFor} 
            placeholder={props.placeholder} 
            onChange={props.handleInputChange}
            name={props.name}>
            </input>            
        </div>
    )
}

export default Input
  