import React, { useContext } from 'react'
import Student from '../components/layouts/Student'
import { MyContext } from '../../hooks/MyContext'

const Classroom = () => {
    let msg = useContext(MyContext)
  return (
    // properties - props
    <div>
        <h1>{msg}</h1>
        <Student name= 'Sushant' roll= '1' address='Godawari'/>
        {/* {name: 'Sushant', roll: '1', address: 'delhi'} */}
        <Student name= 'Nehma' roll= '2' address='Godawari'/>
        <Student name='Prashanna' roll= '3' address= 'Godawari'/>
    </div>
  )
}

export default Classroom