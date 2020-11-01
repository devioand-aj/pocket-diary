import React from 'react';

import '../../styles/inputField.css';

const InputField = ({
  type = 'text',
  onChange,
  // placeholder = '',
  value,
  ...otherProps
}) => {
  return (
    <input
      type={type}
      value={value ? value : ''}
      onChange={onChange}
      className='input-field'
      {...otherProps}
    />
  );
};

export default InputField;
