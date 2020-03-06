import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

import { axiosWithAuth } from '../utils/AxiosWithAuth';
import axios from 'axios';

const ListingForm = () => {
  
  const [listing, setListing] = useState({
    landownerid: 2,
    description: '',
    price: '',
    location: '',
    photo: ''
  })

  const changeHandler = ev => {
    console.log('value', ev.target.value)
    
    let value = ev.target.value;

    setListing({
      ...listing,
      [ev.target.name]: value
    });

    console.log('object', listing);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('listing',listing);

    axiosWithAuth().post(`https://rventure.herokuapp.com/api/listing/`, listing)
    .then(res => {
        console.log('res', res);
      })
  };

  return (
    <div>
      <h1>List Someone's Adventure Here!</h1>
      <form onSubmit={handleSubmit}>
        {/* <label>
          <div>
            Where is the space located?
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Street Address'
              value={listing.streetAddress}
              onChange={handleChange} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Apt., suite (optional)' 
              value={listing.apt}
              onChange={handleChange} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='City' 
              value={listing.city}
              onChange={handleChange} 
            />
            <input 
              type='text' 
              placeholder='State' 
              value={listing.state}
              onChange={handleChange} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Zip' 
              value={listing.zip}
              onChange={handleChange} 
            />
          </div>
        </label> */}
        {/* <div>
          <label>
            What amenities do you offer?
            <div>
              <div>
                <label>
                  Electric hookups:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Waste plumbing:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Water:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Wifi:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
              <div>
                <label>
                  Pet friendly:
                  <input 
                    type='checkbox' 
                  />
                </label>
              </div>
            </div>
          </label>
        </div> */}
        
        <div>
          <label>
            Description    
            <Input 
              placeholder='' 
              onChange={changeHandler} 
              name='description'
              value={listing.description}
            />
          </label>
        </div>

        <div>
          <label>
            Location 
            <Input 
              type='text' 
              placeholder=''
              onChange={changeHandler} 
              name='location'
              value={listing.location}
            />
        </label>
        </div>

        <div>
          <label>
            Price per day ($) 
            <Input 
              type='text' 
              placeholder=''
              onChange={changeHandler} 
              name='price'
              value={listing.price}
            />
        </label>
        </div>

        <div>
          <label>
          Photo 
            <Input 
              type='text' 
              placeholder='http://url.com/img.png'
              onChange={changeHandler} 
              name='photo'
              value={listing.photo}
            />
        </label>
        </div>
        <div>
          <Button basic>Submit Listing</Button>
        </div>
      </form>
      <br />
      <br />
    </div>
  )
}

export default ListingForm;