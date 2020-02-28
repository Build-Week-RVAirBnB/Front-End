import React from 'react'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'

//MVP: location, description, price per day, photo

const ListingCard = () => (
  <Card>
    <Image src='https://thumbnail.invisionapp.com/resize?location=https%3A%2F%2Fs3%2Einvisionapp%2Dcdn%2Ecom%2Fstorage%2Einvisionapp%2Ecom%2Fboards%2Ffiles%2F195491677%2Ejpg%3Fx%2Damz%2Dmeta%2Div%3D1%26x%2Damz%2Dmeta%2Dck%3Ddeb71895c37da151df69ea0760a39203%26AWSAccessKeyId%3DAKIAJFUMDU3L6GTLUDYA%26Expires%3D1585699200%26Signature%3DIgHDxsB2yPr1fzux4NW7xE56kLQ%253D&width=1800' wrapped ui={false} />
    <Card.Content extra>
    <Segment.Group horizontal>
    <Segment><Icon name='map marker alternate' /><span className='location'>Big Sur, CA</span></Segment>
    <Segment><a>
        $95 / night
      </a></Segment>
    </Segment.Group>
      <Card.Description>
        This is a description of the listing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet vestibulum nisl quis hendrerit. Donec viverra ut felis vel tincidunt. Phasellus euismod lacus et odio tincidunt laoreet. In condimentum et.
      </Card.Description>
    </Card.Content>   
  </Card>
)

export default ListingCard