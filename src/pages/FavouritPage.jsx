import * as React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { useNavigate } from 'react-router-dom';
import './css/Favourits.css'


export function FavouritPage ({
    favourits,
    setFavourits,
}) {

    let navigate = useNavigate();
    
  return (
    <div className='search-btm'>
      {favourits.length ?
         favourits.map((row) => {
            return <PropertyCard
                    key={row.id}
                    data={row}
                    onClick={() => navigate(`/property/${row.id}`)}
                />
        })
      :
      <div className='center'>
        <h1>No Favourits added yet</h1>
        </div>
        }
    </div>
  );
}
