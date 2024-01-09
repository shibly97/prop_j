import * as React from 'react';
import './css/PropertyCard.css'
import {numberWithCommas} from '../utils'

export function PropertyCard ({
    data,
    onClick
}) {
  return (
    <div className='property-card' onClick={() => onClick()}>
        <div className='img-container'>
            <img src={data.coverImage}/>
        </div>
        <div className='card-description'>
            <p>{data.type} | {data.location}</p>
            <div>
                Price : Rs.{numberWithCommas(data.price)}
            </div>
        </div>
    </div>
  );
}
