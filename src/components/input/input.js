import React from 'react';
import './input.css';

const CustomInput = ({placeholder, ...props}) => {

    if ( placeholder === undefined ) {
        placeholder = 'Hello!';
    }

    return (
        <div className='field'>
          <input className='customInput' autoComplete='off' required {...props}/>
          <label className='customLabel'>{placeholder}</label>
        </div>
      
    );
}

export default CustomInput

