import React, { useState } from 'react';
import axios from 'axios';

const ListingForm = () => {
  const [listing, setListing] = useState('')

  const handleChange = e => {
    // console.log(ev.target.value)
    e.preventDefault()
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`https://rventure.herokuapp.com/api/listing/:id`, listing)
      .then(res => {
        console.log(res)
        setListing(res.data)
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <h1>List Someone's Adventure Here!</h1>
      <form onSubmit={handleSubmit}>
        <label>
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
        </label>
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
            Number Of Guest:
            <input 
              name='numberOfGuest'
              type='number'
              value={listing.numberOfGuest}
            />
        </label>
        </div>
        <div>
          <button type="submit">Submit Listing</button>
        </div>
      </form>
    </div>
  )
}

export default ListingForm;