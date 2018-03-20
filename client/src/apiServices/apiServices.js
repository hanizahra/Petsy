import axios from 'axios';

const apiServices = {};

apiServices.getAllPets = () => {
	return axios.get('/api/petFinder') 
}
apiServices.getOnePet = (id) => {
	return axios.get(`/api/${id}`) 
}


export default apiServices;