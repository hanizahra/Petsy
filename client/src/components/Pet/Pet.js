import React from 'react';

const Pet = (props) => {
  return (
      <div>
        <h2>{props.pets.name}</h2>
        <p>{props.pets.animal}</p>
      </div>
    )

}
export default Pet;