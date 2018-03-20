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


export default apiServices;