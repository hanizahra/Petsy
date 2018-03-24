import React, { Component } from 'react';
import { Col, Card, CardImg, CardLink, CardText, CardBody, CardTitle} from 'reactstrap';

class Result extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    let result = this.props.result
    if (result.media && result.media.photos) {
      let photos = result.media.photos.photo;
      let thumbnail = photos.find((photo) => photo['@size'] === 'pn')['$t']
      let name = result.name['$t']
      let animalType = result.animal['$t']
      let age = result.age['$t']
      let breed;
      if (Array.isArray(result.breeds.breed)) {
        breed = result.breeds.breed.map((breed) => breed['$t']).join(', ')
      } else {
        breed = result.breeds.breed['$t']
      }

      return (
        <Col md='4'>
          <Card className='mb-4'>
            <CardLink onClick={() => this.props.onResultClick(this.props.result)} >
              <div className='result-image-container'>
                <CardImg src={thumbnail} top width='100%' alt='petImage'/>
              </div>
            </CardLink>
            <CardBody>
              <CardTitle>Name: {name}</CardTitle>
              <CardText>Type: {animalType}</CardText>
              <CardText>Breed(s): {breed}</CardText>
              <CardText>Age: {age}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
    } else {
      return (<div>No image</div>)
    }
  }
}

export default Result;
