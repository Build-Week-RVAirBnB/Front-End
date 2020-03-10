import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext'
import ListingCard from './ListingCard';
import { Card, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from '../utils/AxiosWithAuth';


const ListingList = () => {

  const user = useContext(UserContext);
  const [listings, setListings] = useState([]);
  console.log('first load', listings)



  useEffect(() => {
    axiosWithAuth().get('https://rventure.herokuapp.com/api/listing/')
    .then(res => {
        console.log('response', res);
        setListings(res.data.listings);
    })
  }, []);


  return (
    <div>
      <h4>Listing List for {user.username}</h4>
      <Header size='huge'>Land you got? or maybe you need a spot?</Header>
      <Header size='huge'>We're your melting pot! </Header>
      <Link to='/listings/add'>Land Onwers: Add you spot here</Link>

      <Card.Group itemsPerRow={5} className='listing-list' stackable>
      {listings.map(item => (
              <ListingCard listing={item} />
      ))}

      </Card.Group>
    </div>
  )
};

export default ListingList;