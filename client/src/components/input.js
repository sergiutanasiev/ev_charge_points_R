import React from 'react';

const Input = ({
    text,
    name,
    title,
    id,
    type,
    placeholder
}) => {
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input type={type} id={id} name={name} title={title} placeholder={placeholder} />
        </>
    )
}

export default Input;