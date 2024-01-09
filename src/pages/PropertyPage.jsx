import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './css/propertyPage.css'
import {properties} from '../data/properties.json'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {numberWithCommas} from '../utils'
import { Button} from 'react-bootstrap';


export function PropertyPage ({
    setFavourits,
    favourits
}) {

    let { id } = useParams();
    let [isSaved, setIsSaved] = useState(false)

    const data = properties.find(row => row.id == id)

    useEffect(() => {
      const findData = favourits.find(row => row.id == id)
      if(findData){
        setIsSaved(true)
      }else{
        setIsSaved(false)
      }
    },[favourits])

    const removeFromFev = () => {
      const indexOf = favourits.findIndex(row => row.id == id)
      const newArr =  favourits
      newArr.splice( indexOf, 1);
      // const newArr =  favourits.splice( indexOf, 1);
      setFavourits([...newArr])
    }
    
  return (
    <div className="propertyPage">   
      <div className='pro-cover-img'>
            <img src={data.coverImage}/>
      </div>

      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 tab-cont"
      >
        <Tab eventKey="home" title="Home">
          <div className='short-des'>
            <div>Type : {data.type}</div>
            <div>Location : {data.location}</div>
            <div>Price : Rs {numberWithCommas(data.price)}</div>
            <div>Bedrooms : {data.bedrooms}</div>
            <div>Tenure : {data.tenure}</div>
            <div>Posted On :  {`${data.added.year}-${data.added.month}-${data.added.day}`}</div>

            <div className='image-set'>
              {data.images.map((image, index) => {
                return <div className='set-img' key={index}>
                          <img key={index} src={image}/>
                    </div>
              })}
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div className='short-des'>
            <div>{data.description}</div>
            
            <div className='floor-plan'>
              Floor Plan
              <div className='floor-img'>
                <img src={data.floorPlan}/>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
        
      <div className='fav-btn-cont'>
        <Button 
          variant="primary" 
          type="submit" 
          className='search-btn'
          onClick={() => !isSaved? setFavourits(prev => [...prev, data]): removeFromFev()}
        >
          {isSaved?
             'Remove to Favourits'
          :
            'Add to Favourits'
          }
        </Button>
      </div>
    </div>
  );
}
