import React from 'react';

import '../style.css'

function Input(props) {

      return (
        <div className='box-input'>
           <img className='pokebola-icon' src={props.label}/>
            <input
                name={props.name}
                type={props.type}
                className='input'
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input