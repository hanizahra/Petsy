import axios from 'axios';

const apiServices = {};

apiServices.getAllPets = () => {
	return axios.get('/api/petFinder') 
}
apiServices.getOnePet = (id) => {
	return axios.get(`/api/${id}`) 
}

apiServices.addToPetsList = (pet) => {
  axios({
    method: 'POST',
    url: '/api/petFinder',
    data: {
      name: pet.name,
      animal: pet.animal,
      sex: pet.sex,
      size: pet.size,
      age: pet.age,
      breed: pet.breeds,
      mixed: pet.mix,
      description: pet.description,
      photos: pet.media.photos,
      shelter_pet_id: pet.shelterPetId,
      shelter_id: pet.shelterId,
      owner_phone: pet.contact.phone,
      owner_address: pet.contact.address1,
      owner_city: pet.contact.city,
      owner_state: pet.contact.state,
      owner_email: pet.contact.email
    }
  })
}

apiServices.deletePet = (id) => {
  return axios.delete(`/api/petFinder/${id}`);
}
// AXIOS CALLS FOR COMMENTS

 apiServices.getAllCommentsForThisPet = (id) => {
  console.log('axios call for get getAllCommentsForThisPet===>', id)
   return axios.get(`/api/petFinder/comments/${id}`)  
}

apiServices.addComment = (comment) => {
  return axios({
    method: 'POST',
    url: '/api/petFinder/addComment',
    data: {
      comment: comment.comment,
      pet_id: comment.pet_id
    },
  });
};


export default apiServices;