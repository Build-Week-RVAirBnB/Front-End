import React from 'react'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

// MVP req: location, description, price per day, photo
// optional: listingID, ownerID, amenaties
// reservation for RV owner: listing ID, date, ownerID



const ListingCard = (props) => {

  console.log('props', props);

  return (
  <Card color='red'>
    <Image src={props.listing.photo} wrapped ui={false} />
    <Card.Content extra>
    <Segment.Group horizontal>
  <Segment><Icon name='map marker alternate' /><span className='location'>{props.listing.location}</span></Segment>
    <Segment><a>
        {props.listing.price} / night
      </a></Segment>
    </Segment.Group>
      <Card.Description>
      {props.listing.description}
      </Card.Description>
    </Card.Content>   
  </Card>
  )
}


export default ListingCard