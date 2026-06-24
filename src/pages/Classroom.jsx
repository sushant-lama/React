import React from 'react'
import Student from '../components/layouts/Student'

const Classroom = () => {
  return (
    // properties - props
    <div>
        <Student name= 'Sushant' roll= '1' address='Godawari'/>
        {/* {name: 'Sushant', roll: '1', address: 'delhi'} */}
        <Student name= 'Nehma' roll= '2' address='Godawari'/>
        <Student name='Prashanna' roll= '3' address= 'Godawari'/>
    </div>
  )
}

export default Classroom