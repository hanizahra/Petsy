import React, { Component } from 'react';
import { Col, Panel, Image} from 'react-bootstrap';

class Result extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    let result = this.props.result;
    let name = result.name['$t']
    let animalType = result.animal['$t']
    let age = result.age['$t']
    let breed;
    if (Array.isArray(result.breeds.breed)) {
      breed = result.breeds.breed.map((breed) => breed['$t']).join(', ')
    } else {
      breed = result.breeds.breed['$t']
    }
    let image;
    if (result.media && result.media.photos) {
      let photos = result.media.photos.photo;
      let thumbnail = photos.find((photo) => photo['@size'] === 'pn')['$t']
      image = (<Image rounded src={thumbnail} width='100%' alt='petImage'/>)
    } else {
      image = (<Image rounded alt="No Image" className='no-image'
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_161ed4c6c08%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_161ed4c6c08%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.15%22%3ENo%20Photo%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true" />)
    }
    return (
      <Col md={4}>
        <Panel>
          <Panel.Body className='result-image-container' onClick={() => this.props.onResultClick(this.props.result)} >
            {image}
          </Panel.Body>
          <Panel.Footer>
            <p>Name: {name}</p>
            <p>Type: {animalType}</p>
            <p>Breed(s): {breed}</p>
            <p>Age: {age}</p>
          </Panel.Footer>
        </Panel>
      </Col>
     )
  }
}

export default Result;
