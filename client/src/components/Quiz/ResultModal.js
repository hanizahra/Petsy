import React, { Component } from 'react';
import { Col, Row, Label, Card, CardImg, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ResultModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let result = this.props.result;
    if (result) {
      let name = result.name['$t']
      let description = result.description['$t']
      let contactEmail = result.contact.email['$t']
      let animalType = result.animal['$t']
      let age = result.age['$t']
      let breed;
      if (Array.isArray(result.breeds.breed)) {
        breed = result.breeds.breed.map((breed) => breed['$t']).join(', ')
      } else {
        breed = result.breeds.breed['$t']
      }
      let images = result.media.photos.photo.reduce((thumbnails, photo) =>  {
        if (photo['@size'] === 'x') {
          let thumbnail = (
            <Col md="6" key={photo['$t']}>
              <Card className="mb-4">
                <div className='result-image-container'>
                  <CardImg top width="100%" src={photo['$t']} alt="Card image cap" />
                </div>
              </Card>
            </Col>
          );
          thumbnails.push(thumbnail);
        }

        return thumbnails;
      }, [])
      return (
        <Modal centered size='lg' isOpen={this.props.isOpen} toggle={this.props.onToggle}>
          <ModalHeader toggle={this.props.onToggle}>{name}</ModalHeader>
          <ModalBody>
            <Row>
              {images}
            </Row>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Contact Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </ModalBody>
        </Modal>
      );
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default ResultModal;
