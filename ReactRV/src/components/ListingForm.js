import React, { useState } from 'react';

const ListingForm = () => {
  const [listing, setListing] = useState('')

  const changeHandler = ev => {
    console.log(ev.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
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
              onChange={changeHandler} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Apt., suite (optional)' 
              value={listing.apt}
              onChange={changeHandler} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='City' 
              value={listing.city}
              onChange={changeHandler} 
            />
            <input 
              type='text' 
              placeholder='State' 
              value={listing.state}
              onChange={changeHandler} 
            />
          </div>
          <div>
            <input 
              type='text' 
              placeholder='Zip' 
              value={listing.zip}
              onChange={changeHandler} 
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
          <button>Submit Listing</button>
        </div>
      </form>
    </div>
  )
}

export default ListingForm;