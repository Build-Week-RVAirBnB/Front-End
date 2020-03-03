import React from 'react';

const ListingForm = () => {
  return (
    <div>
      <h1>Book Your Adventure Here!</h1>
      <form>
        <label>
          <div>
            Where is the space located?
          </div>
          <div>
            <input type='text' placeholder='Street address' />
          </div>
          <div>
            <input type='text' placeholder='Apt., suite (optional)' />
          </div>
          <div>
            <input type='text' placeholder='City' />
            <input type='text' placeholder='State' />
          </div>
          <div>
            <input type='text' placeholder='Zip' />
          </div>
        </label>
        <div>
          <label>
            What amenities do you offer?
            <div>
              <div>
                <label>
                  Electric hookups:
                  <input type='checkbox' />
                </label>
              </div>
              <div>
                <label>
                  Waste plumbing:
                  <input type='checkbox' />
                </label>
              </div>
              <div>
                <label>
                  Water:
                  <input type='checkbox' />
                </label>
              </div>
              <div>
                <label>
                  Wifi:
                  <input type='checkbox' />
                </label>
              </div>
              <div>
                <label>
                  Pet friendly:
                  <input type='checkbox' />
                </label>
              </div>
            </div>
          </label>
        </div>
        <label>
          Number Of Guest:
          <input 
            name='numberOfGuest'
            type='number'
          />
        </label>
      </form>
    </div>
  )
}

export default ListingForm;