import axios from 'axios'

export const login = async (username, password) => {
    const response = await axios.post('http://localhost:3000/api/login', { username, password })
    console.log(response.data)

    return response.data
}