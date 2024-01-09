import * as React from 'react';
import './css/Button.css'


export default function Button (props) {
  return (
    <div className='button-cont'>
        <button 
            onClick={props.onClick}
            className='custom-button'
        >
            {props.label}
        </button>
    </div>
  );
}
