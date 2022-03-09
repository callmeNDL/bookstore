
import axios from "../axios"



const handleLoginApi = (Inputemail, Inputpassword) => {
    return axios.post('api/login', { email: Inputemail, password: Inputpassword });
}

export { handleLoginApi }