import React from 'react'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import { axiosWithAuth } from '../utils/AxiosWithAuth';


// MVP req: location, description, price per day, photo
// optional: listingID, ownerID, amenaties
// reservation for RV owner: listing ID, date, ownerID



const ListingCard = (props) => {

  console.log('props', props);

  const handleRemoveListing = (id) => {
    const urlDelete = 'https://rventure.herokuapp.com/api/listing/'+id ;
    console.log('remove listing', urlDelete);

    axiosWithAuth().delete(urlDelete)
    .then(res => {
        console.log('updated after delete', res);
  })
}

const handleReserveListing = (id) => {
  const urlReserve = 'https://rventure.herokuapp.com/api/listing/'+id ;
  console.log('remove listing', urlReserve);

  axiosWithAuth().post(urlReserve, 1)
  .then(res => {
      console.log('response after reserve', res);
})
}



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
      <a href="#" onClick={() => handleRemoveListing(props.listing.id)} className="myButton">DELETE</a> <br />
      <a href="#" onClick={() => handleReserveListing(props.listing.id)} className="myButton">Reserve</a>

    </Card.Content>   
  </Card>
  )
}


export default ListingCard