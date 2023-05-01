import React, { useEffect, useState} from 'react'
// import { useSelector } from 'react-redux'
import { getGrade } from '../service/grade.js'

const Grade = () => {
	// const grades = useSelector((state) => state.user.grade)
	// console.log("grade is: ", grades.results)

  const token = localStorage.getItem("accesstoken")
  const [grades, setGrades] = useState({})
  
  useEffect(() => {
    const fetchGrade = async () => {
      const response = await getGrade(token)
      console.log('response is ', response)
      setGrades(response)
      // console.log('token is ', token)
      console.log('grade fetch is ' , grades)
    }
    fetchGrade().catch(console.error)
  }, [])

  return (
    <div>	
      <section>
        <p>Grade</p>
        {grades.grade.results.map((grade) => (
          <div key={grade.gpa}>
            <p>{grade.academicYear}</p>
            <p>{grade.gpa}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Grade