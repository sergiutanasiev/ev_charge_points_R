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
        <label htmlFor={id} class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">{text}</span>
            </div>
            <input type={type} id={id} name={name} title={title} placeholder={placeholder} class="input input-bordered input-sm w-full max-w-xs" />
        </label>
    )
}

export default Input;