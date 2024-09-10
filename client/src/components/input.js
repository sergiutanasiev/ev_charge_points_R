import React from 'react';

const Input = ({
    text,
    name,
    title,
    id,
    type,
    placeholder,
    value,
    onChange
}) => {
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = value;
        }
    },[value]);

    const handleOnChange = () => {
        if (inputRef.current) {
            onChange(inputRef.current.value);
        }
    }

    return (
        <label htmlFor={id} className="form-control w-full sm:height-10">
            <div className="label">
                <span className="label-text">{text}</span>
            </div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                title={title} 
                placeholder={placeholder} 
                ref={inputRef}
                onChange={handleOnChange}
                className="input input-bordered rounded input-sm w-full" />
        </label>
    )
}

export default Input;