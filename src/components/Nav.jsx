import * as React from 'react';
import './css/Nav.css'
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';


export function Nav (props) {

    let navigate = useNavigate();
    
  return (
    <div className='nav-container'>
      {/* <Button label='Favourits' onClick={() => navigate(`/favourit`)}/> */}
      {/* <Link to={'/favourit'} style={{
        // color: 'white'
      }}>Favourit</Link> */}
        <div className='nav-head' onClick={() => navigate(`/`)}>
        Home
        </div>
      <div className='nav-head' onClick={() => navigate(`/favourit`)}>
        Favourits
      </div>
    </div>
  );
}
