import React, { useState } from 'react'
import { login } from '../service/login.js'
import { useDispatch } from 'react-redux'
import { setGrade, setToken } from '../stores/Users.js'

const Login = () => {	
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const user = e.target.username.value
		const pass = e.target.password.value
		const data = await login(user, pass)

		// console.log(data)
		
		if (data.accesstoken) {
			dispatch(setToken(data.accesstoken))
			dispatch(setGrade(data.grade))

			localStorage.setItem("accesstoken", data.accesstoken)
		} else {
			console.log("Invalid credentials")
		}
	}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' name='username'/>
            <input type='password' placeholder='password' name='password'/>
            <button type="submit">Login</button>
        </form> 
    </div>
  )
}

export default Login