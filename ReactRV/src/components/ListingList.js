import React from 'react';
import ListingCard from './ListingCard';
import { Card, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";


const ListingList = () => {
  return (
    <div>
      <h4>Listing List</h4>
      <Header size='huge'>Land you got? or maybe you need a spot?</Header>
      <Header size='huge'>We're your melting pot! </Header>
      <Link to='/listings/add'>Land Onwers: Add you spot here</Link>

      <Card.Group itemsPerRow={6} className='listing-list' stackable>

      {/* this is where we will map over the array of listings as pass into ListingCard */}
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />
      <ListingCard />

      </Card.Group>
    </div>
  )
};

export default ListingList;