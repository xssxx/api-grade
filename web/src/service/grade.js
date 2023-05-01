import axios from 'axios'

export const getGrade = async (token) => {
    const response = await axios.get('http://127.0.0.1:3000/api/getGrade')
    const result = await response.data
    console.log(result)

    return result
}