import React, { Component } from 'react';
import { Col, Row, Label, Button, Panel, Image, Modal } from 'react-bootstrap';

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
            <Col md={6} key={photo['$t']}>
              <Panel>
                <Panel.Body className='result-image-container'>
                  <Image width="100%" src={photo['$t']} alt="Card image cap" />
                </Panel.Body>
              </Panel>
            </Col>
          );
          thumbnails.push(thumbnail);
        }

        return thumbnails;
      }, [])
      return (
        <Modal bsSize="large" show={this.props.isModalOpen} onHide={this.props.onModalHide}>
          <Modal.Header closeButton><Modal.Title>{name}</Modal.Title></Modal.Header>
          <Modal.Body>
            <Row>
              {images}
            </Row>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Contact Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </Modal.Body>
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
