import React, {useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './css/SearchPage.css'
import Button from '../components/Button';
import CustomInput from '../components/Input';
import { PropertyCard } from '../components/PropertyCard';
// import {properties} from '../data/properties.json'


export function SearchPage ({
    properties
}) {

    // let { type } = useParams();

    const [inputValue, setInputValue] = useState('');
    let navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // const [searchedArr, setSearchedArr] = useState([{}, {}])


  return (
    <div className='search-continer'>
        {/* <div className='search-top'>
            <h1>Search by {type}</h1>
            <div>
                <CustomInput 
                    placeholder="Enter text"
                    name="customInput"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button label='search' onClick={() => console.log("clicked")}/>
            </div>
        </div> */}
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
