// Label.jsx
import React from 'react';

function Label({ htmlFor, labelText, inputType, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor={htmlFor} className='form-label'>{labelText}</label>
      <input
        type={inputType}
        className='form-control'
        required
        onChange={handleChange}
      />
    </div>
  );
}

export default Label;
