import React from 'react';

const ListingForm = () => {
  return (
    <div>
      <h1>Book Your Adventure Here!</h1>
      <form>
        <label>
          Where To?
            <input type='text' placeholder='Where to?' />
        </label>
        <div>
          <label>
            Check-In:
              <input type='text' placeholder='MM/DD/YY' />
          </label>
          <label>
            Check-Out:
              <input type='text' placeholder='MM/DD/YY' />
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