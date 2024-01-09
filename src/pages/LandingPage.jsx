import React, { useState } from 'react';
import './css/LandingPage.css'
// import Button from '../components/Button';
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { filterProperties } from '../utils';
import {properties as propertiesData} from '../data/properties.json'



export function LandingPage ({
    setProperties
}) {

    
    let navigate = useNavigate();
    const [criteria, setCriteria] = useState({
        type: 'any',
        minPrice: 0,
        maxPrice: 0,
        minBedrooms: 0,
        maxBedrooms: 0,
        startDate: null,
        endDate: null,
        postcodeArea: ''
    });
    
      const handleSearch = () => {
        console.log("tt",propertiesData,  criteria)
        const filtered = filterProperties(propertiesData, criteria);
        console.log("ttt", filtered)
        setProperties(filtered);
        navigate('/search')
    };



    const handleSubmit = () => {
        handleSearch()
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCriteria({ ...criteria, [name]: value });
    };

  return (
    <div className='landing-page'>
      <div className='landing-top'>
        <div className='landing-header'>
            <h1 className='propert-title'>
                PROPERTY SALES
            </h1>
        </div>
      </div>
      <div className='landing-bt'>
        <div className='landing-bt-buttons'>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className='row-input'>
                        <Form.Group controlId="formGridType">
                            <Form.Label>Property Type</Form.Label>
                            <Form.Control as="select" name="type" value={criteria.type} onChange={handleInputChange}>
                                <option value="any">Any</option>
                                <option value="House">House</option>
                                <option value="Flat">Flat</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col  className='row-input'>
                        <Form.Group controlId="formMinPrice">
                            <Form.Label>Minimum Price</Form.Label>
                            <Form.Control type="number" name="minPrice" value={criteria.minPrice} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col  className='row-input'>
                        <Form.Group controlId="formMaxPrice">
                            <Form.Label>Maximum Price</Form.Label>
                            <Form.Control type="number" name="maxPrice" value={criteria.maxPrice} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col  className='row-input'>
                        <Form.Group controlId="formMinBedrooms">
                            <Form.Label>Minimum Bedrooms</Form.Label>
                            <Form.Control type="number" name="minBedrooms" value={criteria.minBedrooms} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col  className='row-input'>
                        <Form.Group controlId="formMaxBedrooms">
                            <Form.Label>Maximum Bedrooms</Form.Label>
                            <Form.Control type="number" name="maxBedrooms" value={criteria.maxBedrooms} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col  className='row-input'>
                        <Form.Group controlId="formPostcodeArea">
                            <Form.Label>Postcode Area</Form.Label>
                            <Form.Control type="text" name="postcodeArea" value={criteria.postcodeArea} onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col  className='row-input'>
                        <Form.Group controlId="formStartDate">
                            <Form.Label>Date Added After</Form.Label>
                            <Form.Control type="date" name="startDate" 
                                // value={criteria.startDate} 
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col  className='row-input'>
                        <Form.Group controlId="formEndDate">
                            <Form.Label>Date Added Before</Form.Label>
                            <Form.Control type="date" name="endDate" 
                                // value={criteria.endDate} 
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit" className='search-btn'>
                    Search
                </Button>
            </Form>
            {/* <Button label='Search Properties by Area' onClick={() =>  navigate("/search/area") }/> */}
        </div>
      </div>
    </div>
  );
}
