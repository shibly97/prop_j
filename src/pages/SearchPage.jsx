import React, {useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './css/SearchPage.css'
import Button from '../components/Button';
import CustomInput from '../components/Input';
import { PropertyCard } from '../components/PropertyCard';


export function SearchPage ({
    properties
}) {

    const [inputValue, setInputValue] = useState('');
    let navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };


  return (
    <div className='search-continer'>
      
        <div className='search-btm'>
            {properties.map((row) => {
                return <PropertyCard
                        key={row.id}
                        data={row}
                        onClick={() => navigate(`/property/${row.id}`)}
                    />
            })}
        </div>
    </div>
  );
}
